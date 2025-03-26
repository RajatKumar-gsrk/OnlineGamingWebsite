let nxtBtn = document.querySelector(".next-btn");
const gameSection = document.querySelector(".game-section");

const gameVideos = ["resources/video/snake.mp4", "resources/video/pong.mp4", "resources/video/tic.mp4"];
const gameNames = ["Snake", "Pong", "Tic-Tac-Toe"];
const gameLines = ["Feel the hunger...", "Can you beat me?", "Beat them over and over"];
const gameLinks = ["games/snake/index.html", "games/pong/index.html", "games/tic/index.html"];

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

        <div class="next-btn">Next</div>
        
    `;


    nxtBtn = document.querySelector(".next-btn");
    nxtBtn.addEventListener('click', clickNextHandle);
}

nxtBtn.addEventListener('click', clickNextHandle);
