// START of Stats.js
javascript: (function () {
  var script = document.createElement('script');
  script.onload = function () {
    var stats = new Stats();
    document.body.appendChild(stats.dom);
    requestAnimationFrame(function loop() {
      stats.update(); requestAnimationFrame(loop)
    });
  };
  script.src = '//mrdoob.github.io/stats.js/build/stats.min.js';
  document.head.appendChild(script);
})()
// END of Stats.js

//Global Setup
stack0 = [];
stack1 = [];
tick = 0
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
  positioningStack();
  animationLoop();
};

function animationLoop() {
  if(this.tick < 144)
    requestAnimationFrame(animationLoop);

  stackChange();
  this.tick++;

  renderer.render(stage);
}

function stackChange(){
  //Incrementing Stack1
  this.stack1[this.tick] = new PIXI.Sprite(
    PIXI.loader.resources['card'].texture
  );
  stage.addChild(this.stack1[this.tick]);
  this.stack1[this.tick].anchor.set(0.5, 0.5);
  this.stack1[this.tick].x = renderer.width / 2;
  this.stack1[this.tick].y = renderer.height / 2;
  this.stack1[this.tick].y += 144;
  this.stack1[this.tick].y -= this.tick;
  i++;
  //Incrementing Stack1

  //Decrementing Stack0
  
  stage.removeChild(this.stack0[this.stack0.length-1])
  if(this.stack0.length > 0)
    this.stack0.length -= 1;
  //Decrementing Stack0

  stackChangeAnimation();
}

function stackChangeAnimation(){}

function positioningStack(){
  i = 0;
  while (i < 144) {
    this.stack0[i] = new PIXI.Sprite(
      PIXI.loader.resources['card'].texture
    );
    stage.addChild(this.stack0[i]);
    this.stack0[i].anchor.set(-0.5, 0.5);
    this.stack0[i].x = renderer.width / 2;
    this.stack0[i].y = renderer.height / 2;
    this.stack0[i].y -= i - 144;
    i++;
  }
}