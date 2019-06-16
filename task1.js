const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

var framerate = document.getElementById("framerate");

var renderer = PIXI.autoDetectRenderer(512, 512, {
  transparent: true,
  resolution: 1
});

document.getElementById('display').appendChild(renderer.view);

const REEL_WIDTH = 160;
const SYMBOL_SIZE = 150;

var stage = new PIXI.Container();

PIXI.loader
  .load(setup);

function setup() {
  text();



  

  this.elapsed = Date.now();
  animationLoop();
};

function animationLoop() {
  var now = Date.now();
  requestAnimationFrame(animationLoop);



  /*
   *   Write here your code
   */

  framerate.innerHTML = (1000 / (now - elapsed)).toFixed(2);
  elapsed = now

  renderer.render(stage);
}

function text(text0='João', text1='Alfredo', text2='Quebrou o dedo') {

  const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
  });

  const margin = (app.screen.height - SYMBOL_SIZE * 3) / 2;

  const top = new PIXI.Graphics();
  top.beginFill(0, 1);
  top.drawRect(0, 0, app.screen.width, margin);

  const middle = new PIXI.Graphics();
  /*
   *  middle.beginFill(0, 1);
   *  middle.drawRect(0, SYMBOL_SIZE * 3 + margin, 2*app.screen.width/(SYMBOL_SIZE * 5), margin);
   *  middle.drawRect(0, SYMBOL_SIZE * 3 + margin, 3*app.screen.width/(SYMBOL_SIZE * 5), margin);
  */

  const bottom = new PIXI.Graphics();
  bottom.beginFill(0, 1);
  bottom.drawRect(0, SYMBOL_SIZE * 3 + margin, app.screen.width, margin);

  const topText = new PIXI.Text(text0, style);
  topText.x = Math.round((top.width - topText.width) / 2);
  topText.y = Math.round((margin - topText.height) / 2);
  top.addChild(topText);

  const middleText = new PIXI.Text(text1, style);
  middleText.x = Math.round((bottom.width - middleText.width) / 2);
  middleText.y = Math.round(((app.screen.height - style.fontSize)/2));
  middle.addChild(middleText);

  const bottomText = new PIXI.Text(text2, style);
  bottomText.x = Math.round((bottom.width - bottomText.width) / 2);
  bottomText.y = app.screen.height - margin + Math.round((margin - bottomText.height) / 2);
  bottom.addChild(bottomText);

  app.stage.addChild(top);
  app.stage.addChild(middle);
  app.stage.addChild(bottom);
}