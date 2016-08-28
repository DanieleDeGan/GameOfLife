import {Component} from "@angular/core";
import {IBoard} from "./domain/IBoard";
import {Board} from "./domain/Board";
import {PatternBuilder} from "./domain/PatternBuilder";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles: ['.living{background-color:green;}']
})
export class AppComponent {
  board:IBoard;
  private intervalHandler:any;

  constructor() {
    this.newGame();
  }

  newGame():void {
    if(this.intervalHandler){
      this.stopEvolution();
    }
    this.board = new Board(40, false);
    let patternBuilder = new PatternBuilder(this.board);
    patternBuilder.createPulsarAt(5, 10)
      .createPulsarAt(21, 10)
      .createBlockAt(4,4)
      .createBeehiveAt(3,24)
      .createLoafAt(10,30)
      .createBoatAt(18,30)
      .createBlinkerAt(24,30);


    // this.initializeCellsValue();
  }


  stopEvolution() {
    window.clearInterval(this.intervalHandler);
  }

  initializeCellsValue() {
    var size = this.board.cells.length;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        this.board.cells[i][j] = Math.random() >= 0.5;
      }
    }
  };


  evolve() {
    this.board.evolve();
  }

  startAutomaticEvolution() {
    if(this.intervalHandler){
      this.stopEvolution();
    }
    this.intervalHandler = setInterval(()=>this.evolve(), 150);
  }
}
