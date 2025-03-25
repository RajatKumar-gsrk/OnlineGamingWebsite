let nxtBtn = document.querySelector(".next-btn");
const gameSection = document.querySelector(".game-section");

let i = 0;

const clickNextHandle = ()=>{
    i += 1;
    if(i == 0){
        gameSection.innerHTML = `
        <div class="games-video">
            <video autoplay muted loop plays-inline src="resources/video/snake.mp4" class="game-video"></video>
        </div>

        <div class="game-info">
            <h1>Snake</h1>
            <p>Feel the hunger...</p>
            <a id="play-btn" href="games/snake/index.html">Play Snake</a>
        </div>

        <div class="next-btn">Next</div>`;
    }

    if(i == 1){
        gameSection.innerHTML = `
        <div class="games-video">
            <video autoplay muted loop plays-inline src="resources/video/pong.mp4" class="game-video"></video>
        </div>

        <div class="game-info">
            <h1>Pong</h1>
            <p>Can you beat me?</p>
            <a id="play-btn" href="games/pong/index.html">Play pong</a>
        </div>

        <div class="next-btn">Next</div>`;
    }

    if(i == 2){
        gameSection.innerHTML = `
        <div class="games-video">
            <video autoplay muted loop plays-inline src="resources/video/tic.mp4" class="game-video"></video>
        </div>

        <div class="game-info">
            <h1>Tic-Tac-Toe</h1>
            <p>Beat them over and over</p>
            <a id="play-btn" href="games/tic/index.html">Play pong</a>
        </div>

        <div class="next-btn">Next</div>`;
        i = -1;
    }

    nxtBtn = document.querySelector(".next-btn");
    nxtBtn.addEventListener('click', clickNextHandle);
}

nxtBtn.addEventListener('click', clickNextHandle);
