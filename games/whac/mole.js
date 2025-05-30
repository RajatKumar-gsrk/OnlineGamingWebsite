let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

//audio
let collisionSound = new Audio("../../resources/sfx/sfx_hit.wav");
let dropSound = new Audio("../../resources/sfx/sfx_die.wav");
let scoreSound = new Audio("../../resources/sfx/sfx_point.wav");
let bgm = new Audio("../../resources/sfx/bgm_mario.mp3");
bgm.loop = true;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 2000); // 1000 miliseconds = 1 second, every 1 second call setMole
    setInterval(setPlant, 2500); // 2000 miliseconds = 2 seconds, every 2 second call setPlant
}

function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "resources/img/monty-mole.png";

    let num = getRandomTile();
    while (currPlantTile && currPlantTile.id == num) {
        num = getRandomTile();
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "resources/img/piranha-plant.png";

    let num = getRandomTile();
    while (currMoleTile && currMoleTile.id == num) {
        num = getRandomTile();
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {

    if (gameOver) {
        return;
    }else if(bgm.paused){
        bgm.play();
    }

    if (this == currMoleTile) {
        collisionSound.play();
        score += 10;
        document.getElementById("score").innerText = "Score: " + score.toString(); //update score html
        setMole();
    }
    else if (this == currPlantTile) {
        dropSound.play();
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
        bgm.pause();
    }
}