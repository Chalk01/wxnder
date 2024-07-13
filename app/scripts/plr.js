var plr = document.getElementById('plr');
var plrC = 'W'; // colour of cat
var plrX = 50; // x pos on map
var plrY = 50; // y pos on map
var oPlrX = 50; // x pos on screen
var oPlrY = 50; // y pos on screen
var plrJx = 0; // joy x
var plrJy = 0; // joy y
var plrJd = 0; // joy distance
var plrD = 's'; // direction
var plrS = 1; // speed
var plrAf = 0; // animation frame
var plrAb = 0; // animation base

function plrTick() {
    plrControls();
    if(plrJd > 0){
        plrMovement();
    } else {
        plr.src = assets + 'plr/' + plrC + '/i' + plrD + '.png';
        plrAf = 0;
    }
}

function plrPaint() {
    oPlrX = plrX;
    oPlrY = plrY;
    setPos('plr', oPlrX, oPlrY);
}

function plrControls() {
    if(isKeyPressed('KeyW')) {
        plrJy = -1;
    }
    if(isKeyPressed('KeyS')) {
        plrJy = 1;
    }
    if(isKeyPressed('KeyA')) {
        plrJx = -1;
    }
    if(isKeyPressed('KeyD')) {
        plrJx = 1;
    }

    plrJd = Math.sqrt(plrJx*plrJx + plrJy*plrJy);
}

function plrTryMove(dx, dy) {
    plrX = plrX + dx;
    plrY = plrY + dy;
}

function plrMovement() {
    if(plrJd > 1) {plrJd = 1.2;} // comment for normalized diag
    plrJx = plrJx / plrJd;
    plrJy = plrJy / plrJd;
    plrTryMove(plrJx*plrS, plrJy*plrS);
    
    if(plrJy < 0){plrD = 'n';}
    else if(plrJy > 0) {plrD = 's';}
    else if(plrJx < 0){plrD = 'w';}
    else {plrD = 'e';}
    

    plrAf = plrAf + 0.3;
    plr.src = assets + 'plr/' + plrC + '/w' + plrD + [plrAb + Math.floor(plrAf) % 3] + '.png';
}