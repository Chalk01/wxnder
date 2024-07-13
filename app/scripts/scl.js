function getPos(ent) {
    var entr = document.getElementById(ent);
    var entx = 0 + entr.style.left;
    var enty = 0 + entr.style.top;
    return {
        x: entx,
        y: enty
    }
}

function setPos(ent, x, y) {
    var entr = document.getElementById(ent);
    entr.style.top = Math.floor(y * pzm) + 'vh';
    entr.style.left = Math.floor(x * pzm) + 'vh';
}

let pressedKeys = {};

  document.addEventListener('keydown', function(event) {
    pressedKeys[event.code] = true;
  });
  
  document.addEventListener('keyup', function(event) {
    delete pressedKeys[event.code];
    switch(event.code) {
      case 'KeyW':
      case 'KeyS':
      plrJy = 0;
      break;
      case 'KeyA':
      case 'KeyD':
      plrJx = 0;
      break;
    }
  
  });

function isKeyPressed(keycode) {
  return pressedKeys[keycode] ? true : false;
}
// am so proud of myself :)