var m = document.querySelectorAll(".drum").length;

for (var i = 0; i < m; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var n = this.innerHTML;
        makeSound(n);
        buttonAnimation(n);

    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);

});


function makeSound(key) {

    switch (key) {
        case 'w':
            var tom1 = new Audio("tom-1.mp3")
            tom1.play();
        case 'a':
            var tom2 = new Audio("tom-2.mp3")
            tom2.play();
        case 's':
            var tom3 = new Audio("tom-3.mp3")
            tom3.play();
        case 'd':
            var tom4 = new Audio("tom-4.mp3")
            tom4.play();
        case 'j':
            var snare = new Audio("snare.mp3")
            snare.play();
        case 'k':
            var crash = new Audio("crash.mp3")
            crash.play();
        case 'l':
            var kick = new Audio("kick-bass.mp3")
            kick.play();

        default:
            console.log(n);
    }


}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}






