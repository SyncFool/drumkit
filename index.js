// Button event Listener
for(i = 0; i< document.querySelectorAll('.drum').length; i++){
document.querySelectorAll('.drum')[i].addEventListener('click',async function (){
    let buttonInnerHtml = this.innerHTML;
    let path = await pathFinder(buttonInnerHtml);
    let audio = new Audio(path);
    audio.play();
   
})
}

// Key event Listener
document.addEventListener('keypress', async function (event){
    let data = await pathFinder(event.key);
    let audio = new Audio(data);
    audio.play();
})

// Pomisified function that return the path
async function pathFinder(key){
    return new Promise((resolve,reject)=>{
        switch (key) {
            case "w":
                 resolve("sounds/crash.mp3");
                break;
            case "a":
                 resolve("sounds/kick-bass.mp3");
                break;
            case "s":
                 resolve("sounds/snare.mp3");
                break;
            case "d":
                 resolve("sounds/tom-1.mp3");
                break;
            case "j":
                 resolve("sounds/tom-2.mp3");
                break;
            case "k":
                 resolve("sounds/tom-3.mp3");
                break;
            case "l":
                 resolve("sounds/tom-4.mp3");
                break;
    }})
}     
