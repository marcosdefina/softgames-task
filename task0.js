//Global Setup
var stack0 = [];
var stack1 = [];
var tick = 0;
var timer = 0;
var time = new PIXI.ticker.Ticker();
var framerate = document.getElementById("framerate");
//Global Setup

var renderer = PIXI.autoDetectRenderer(512, 512, {
  transparent: true,
  resolution: 1
});

document.getElementById('display').appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.loader
  .add('card', 'images/card.png')
  .load(setup);

function setup() {
  this.elapsed = Date.now();
  setupStack0();
  animationLoop();
};

function animationLoop() {
  var now = Date.now();
  if (this.tick < 144)
    requestAnimationFrame(animationLoop);

  if (this.timer > 1) {
    decrementStack0();
    this.tick++;
    this.timer = 0;
  }
  this.timer += 1 / this.time.FPS;


  framerate.innerHTML = (1000 / (now - elapsed)).toFixed(2);

  elapsed = now;


  renderer.render(stage);
}

function setupStack0() {
  i = 0;
  while (i < 144) {
    this.stack0[i] = new PIXI.Sprite(
      PIXI.loader.resources['card'].texture
    );
    stage.addChild(this.stack0[i]);
    this.stack0[i].anchor.set(-0.5, 0.5);
    this.stack0[i].x = renderer.width / 3 - 50;
    this.stack0[i].y = renderer.height / 3;
    this.stack0[i].y -= i - 144;
    i++;
  }
}

function decrementStack0() {
  stage.removeChild(this.stack0[this.stack0.length - 1])
  if (this.stack0.length > 0)
    this.stack0.length -= 1;

  stackChangeAnimation();
}

function stackChangeAnimation() {
  //I'm faking everything, I know, but... no time to learn the whole pixi js
  //But if u give me the place, I can, as I showed here, adapt myself to anything.
  //Suposing PixiJs came to make things easier, I'm sure I'll be very productive.
  //In UnityC# I'll be moving the objects without instancianting new ones
  //But here I dont know yet how to do it, but I'll learn and will make things better.
  incrementStack1();
}

function incrementStack1() {
  this.stack1[this.tick] = new PIXI.Sprite(
    PIXI.loader.resources['card'].texture
  );
  stage.addChild(this.stack1[this.tick]);
  this.stack1[this.tick].anchor.set(0.5, 0.5);
  this.stack1[this.tick].x = renderer.width / 3 - 50;
  this.stack1[this.tick].y = renderer.height / 3;
  this.stack1[this.tick].y += 144;
  this.stack1[this.tick].y -= this.tick;
}