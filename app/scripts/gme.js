const assets = 'assets/';
var ign = '';
var wrp = document.getElementById('wrapper');
var pzm = 1; // PosZoneMult
let gameLoopI;
let mpLoopI;

function startGameLoop() {
gameLoopI = setInterval(gameLoop, 30);
//const mpLoopI = setInterval(mpLoop, 30);
}

function stopGameLoop() {
    clearInterval(gameLoopI);
//  clearInterval(mpLoopI);
}

function gameLoop() {
    plrTick();
    plrPaint();
}

function mpLoop() {
    sendPacket();
}

startGameLoop();