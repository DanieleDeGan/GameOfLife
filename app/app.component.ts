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
    this.board = new Board(40, false);
    let patternBuilder = new PatternBuilder(this.board);
    patternBuilder
      .createLWSSAt(5,5)
      .createGliderAt(17,17);

  }


  stopEvolution() {
    window.clearInterval(this.intervalHandler);
  }

  initializeRandomCellsValue() {
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
    this.intervalHandler = setInterval(()=>this.evolve(), 250);
  }
}
