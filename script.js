document.getElementById("start").addEventListener("click", function(){
    makeSound();
    let  play1=Math.floor(Math.random()*6)+1;
    let  play2=Math.floor(Math.random()*6)+1;
    document.getElementById("play1").src=`items/${play1}.png`;
    document.getElementById("play2").src=`items/${play2}.png`;
    if(play1>play2)
        document.querySelector("h1").textContent="💁‍♂️player 1 Wins🥳";
    else if(play1<play2)
        document.querySelector("h1").textContent="💁🏻player 2 Wins🥳";
    else
        document.querySelector("h1").textContent="😬Oops!...It's a Draw😬" ;   
});

function makeSound(){
    let audio= new Audio("items/sound.mp3");
    audio.play();
}


