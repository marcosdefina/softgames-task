import * as PIXI from 'pixi.js';
"use strict";

/* START of Stats.js
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
 END of Stats.js*/
export class task0 {
  //Global Setup
    stack0: Array<any> = [];
    stack1: Array<any> = [];
    tick: number = 0;
    timer: number = 0;
    time: any = new PIXI.ticker.Ticker();
    pixi = PIXI;

    renderer: any = this.pixi.autoDetectRenderer(512, 512, {
      transparent: true,
      resolution: 1
    });

  stage: any = new PIXI.Container();
  constructor(){
    document.getElementById('display').appendChild(this.renderer.view);
    this.pixi.loader.add('card', 'images/card.png').load(this.setup);
  }
  setup(): void {
    this.setupStack0();
    this.animationLoop();
  };

  animationLoop(): void {
    if (this.tick < 144)
      requestAnimationFrame(this.animationLoop);

    if (this.timer > 1) {
      this.decrementStack0();
      this.tick++;
      this.timer = 0;
    }
    this.timer += 1 / this.time.FPS;

    this.renderer.render(this.stage);
  }

  setupStack0(): void {
    let i: number = 0;
    while (i < 144) {
      this.stack0[i] = new PIXI.Sprite(
        this.pixi.loader.resources['card'].texture
      );
      this.stage.addChild(this.stack0[i]);
      this.stack0[i].anchor.set(-0.5, 0.5);
      this.stack0[i].x = this.renderer.width / 2;
      this.stack0[i].y = this.renderer.height / 2;
      this.stack0[i].y -= i - 144;
      i++;
    }
  }

  decrementStack0(): void {
    this.stage.removeChild(this.stack0[this.stack0.length - 1])
    if (this.stack0.length > 0)
      this.stack0.length -= 1;

    new Promise(() => {
      this.stackChangeAnimation();//as call back - set promise
      // the resolve / reject functions control the fate of the promise
    });
  }

  stackChangeAnimation(): void {
    //I'm faking everything, I know, but... no time to learn the whole pixi js
    //But if u give me the place, I can, as I showed here, adapt myself to anything.
    //Suposing PixiJs came to make things easier, I'm sure I'll be very productive.
    //In UnityC# I'll be moving the objects without instancianting new ones
    //But here I dont know yet how to do it, but I'll learn and will make things better.
    this.incrementStack1();
  }

  incrementStack1(): void {
    this.stack1[this.tick] = new PIXI.Sprite(
      this.pixi.loader.resources['card'].texture
    );
    this.stage.addChild(this.stack1[this.tick]);
    this.stack1[this.tick].anchor.set(0.5, 0.5);
    this.stack1[this.tick].x = this.renderer.width / 2;
    this.stack1[this.tick].y = this.renderer.height / 2;
    this.stack1[this.tick].y += 144;
    this.stack1[this.tick].y -= this.tick;
  }
}