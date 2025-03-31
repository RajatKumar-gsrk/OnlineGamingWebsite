let nxtBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");
const gameSection = document.querySelector(".game-section");

const gameVideos = ["resources/video/snake.mp4", "resources/video/pong.mp4", 
    "resources/video/tic.mp4", "resources/video/flapy.mp4", 
    "resources/video/whac.mp4", "resources/video/slide.mp4", 
    "resources/video/card.mp4"];
const gameNames = ["Snake", "Pong",
     "Tic-Tac-Toe", "Flapy Bird", 
     "Whac a mole", "Sliding puzzle", 
     "Card Memory"];
const gameLines = ["Feel the hunger...", "Can you beat me?", 
    "Beat them over and over", "Don't fall down", 
    "Smash them all", "Solve if you can", 
    "Can you Remember?"];
const gameLinks = ["games/snake/index.html", "games/pong/index.html", 
    "games/tic/index.html", "games/flapy/index.html", 
    "games/whac/index.html", "games/slide/index.html", 
    "games/card/index.html"];

let i = 0;

const clickNextHandle = ()=>{
    i += 1;
    
    if(i >= gameNames.length ){
        i = 0;
    }else if (i < 0){
        i = gameNames.length - 1;
    }
     

    gameSection.innerHTML = `

        <div class="games-video">
            <video autoplay muted loop plays-inline src=${gameVideos[i]} class="game-video"></video>
        </div>

        <div class="game-info">
            <h1>${gameNames[i]}</h1>
            <p>${gameLines[i]}</p>
            <a id="play-btn" href=${gameLinks[i]}>Play ${gameNames[i]}</a>
        </div>

        <div class="next-btn">&rarr;</div>
        <div class="prev-btn">&larr;</div>
        
    `;


    nxtBtn = document.querySelector(".next-btn");
    nxtBtn.addEventListener('click', clickNextHandle);

    prevBtn = document.querySelector(".prev-btn");
    prevBtn.addEventListener('click', clickPrevHandle);
}

const clickPrevHandle = ()=>{
   
    i -= 1;
    
    if(i >= gameNames.length ){
        i = 0;
    }else if (i < 0){
        i = gameNames.length - 1;
    }
     

    gameSection.innerHTML = `

        <div class="games-video">
            <video autoplay muted loop plays-inline src=${gameVideos[i]} class="game-video"></video>
        </div>

        <div class="game-info">
            <h1>${gameNames[i]}</h1>
            <p>${gameLines[i]}</p>
            <a id="play-btn" href=${gameLinks[i]}>Play ${gameNames[i]}</a>
        </div>

        <div class="next-btn">&rarr;</div>
        <div class="prev-btn">&larr;</div>
        
    `;


    nxtBtn = document.querySelector(".next-btn");
    nxtBtn.addEventListener('click', clickNextHandle);

    prevBtn = document.querySelector(".prev-btn");
    prevBtn.addEventListener('click', clickPrevHandle);
}

nxtBtn.addEventListener('click', clickNextHandle);
prevBtn.addEventListener('click', clickPrevHandle);
