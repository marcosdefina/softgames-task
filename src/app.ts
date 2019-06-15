import { Application, loader } from 'pixi.js';
import { task0 } from 'app/task0/task0';
    
class Game {
  private app: Application;
  constructor() {
    // instantiate app
    this.app = new Application({
      width: 800,
      height: 600,
      backgroundColor: 0x1099bb // light blue
    });

    // create view in DOM
    document.body.appendChild(this.app.view);

    loader.load(this.setup.bind(this));
  }

  setup(): void {
    let tk0: any = new task0();
    tk0.setup();
  }
}

new Game();
