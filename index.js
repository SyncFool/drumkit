for(i = 0; i< document.querySelectorAll('.drum').length; i++){
document.querySelectorAll('.drum')[i].addEventListener('click',function (){
    let buttonInnerHtml = this.innerHTML;
    switch (buttonInnerHtml) {
        case "w":
            var path = "sounds/crash.mp3";
            break;
        case "a":
            var path = "sounds/kick-bass.mp3";
            break;
        case "s":
            var path = "sounds/snare.mp3";
            break;
        case "d":
            var path = "sounds/tom-1.mp3";
            break;
        case "j":
            var path = "sounds/tom-2.mp3";
            break;
        case "k":
            var path = "sounds/tom-3.mp3";
            break;
        case "l":
            var path = "sounds/tom-4.mp3";
            break;
            
    }
    let audio = new Audio(path);
    audio.play();
   
})
}