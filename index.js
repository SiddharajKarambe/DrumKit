for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll("button")[i].addEventListener("click", clickhandle);
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    makeAnimation(event.key);
})
function makeAnimation(Currentkey){
    var animation = document.querySelector("." + Currentkey);
    animation.classList.add("pressed");

    setTimeout(function(){
        animation.classList.remove("pressed")
    },100)
}

function makeSound(key){
    switch(key){
        case "w" :
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var tom5 = new Audio('sounds/snare.mp3');
            tom5.play();
            break;
        case "k":
            var tom8 = new Audio('sounds/kick-bass');
            tom8.play();
        
        case "l":
            var tom7 = new Audio('sounds/crash.mp3');
            tom7.play();
            break;
        default:    
    }
}
function clickhandle(){
    var sound = this.innerHTML;
    makeSound(sound);
    makeAnimation(sound);

    switch(sound){
        case "w" :
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var tom5 = new Audio('sounds/snare.mp3');
            tom5.play();
            break;
        case "k":
            var tom8 = new Audio('sounds/kick-bass');
            tom8.play();
        
        case "l":
            var tom7 = new Audio('sounds/crash.mp3');
            tom7.play();
            break;
        default:    
    }
}
