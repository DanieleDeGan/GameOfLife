import {Component} from "@angular/core";
import {IBoard} from "./domain/IBoard";
import {Board} from "./domain/Board";

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


    this.createPulsar(5, 10);
    this.createPulsar(21, 10);


    // this.initializeCellsValue();
  }

  private createPulsar(x:number, y:number):void {
    this.board.setCellToLive(x, y + 2);
    this.board.setCellToLive(x, y + 3);
    this.board.setCellToLive(x, y + 4);
    this.board.setCellToLive(x, y + 8);
    this.board.setCellToLive(x, y + 9);
    this.board.setCellToLive(x, y + 10);

    this.board.setCellToLive(x + 5, y + 2);
    this.board.setCellToLive(x + 5, y + 3);
    this.board.setCellToLive(x + 5, y + 4);
    this.board.setCellToLive(x + 5, y + 8);
    this.board.setCellToLive(x + 5, y + 9);
    this.board.setCellToLive(x + 5, y + 10);

    this.board.setCellToLive(x + 7, y + 2);
    this.board.setCellToLive(x + 7, y + 3);
    this.board.setCellToLive(x + 7, y + 4);
    this.board.setCellToLive(x + 7, y + 8);
    this.board.setCellToLive(x + 7, y + 9);
    this.board.setCellToLive(x + 7, y + 10);

    this.board.setCellToLive(x + 12, y + 2);
    this.board.setCellToLive(x + 12, y + 3);
    this.board.setCellToLive(x + 12, y + 4);
    this.board.setCellToLive(x + 12, y + 8);
    this.board.setCellToLive(x + 12, y + 9);
    this.board.setCellToLive(x + 12, y + 10);

    this.board.setCellToLive(x + 2, y);
    this.board.setCellToLive(x + 3, y);
    this.board.setCellToLive(x + 4, y);
    this.board.setCellToLive(x + 8, y);
    this.board.setCellToLive(x + 9, y);
    this.board.setCellToLive(x + 10, y);

    this.board.setCellToLive(x + 2, y + 5);
    this.board.setCellToLive(x + 3, y + 5);
    this.board.setCellToLive(x + 4, y + 5);
    this.board.setCellToLive(x + 8, y + 5);
    this.board.setCellToLive(x + 9, y + 5);
    this.board.setCellToLive(x + 10, y + 5);

    this.board.setCellToLive(x + 2, y + 7);
    this.board.setCellToLive(x + 3, y + 7);
    this.board.setCellToLive(x + 4, y + 7);
    this.board.setCellToLive(x + 8, y + 7);
    this.board.setCellToLive(x + 9, y + 7);
    this.board.setCellToLive(x + 10, y + 7);

    this.board.setCellToLive(x + 2, y + 12);
    this.board.setCellToLive(x + 3, y + 12);
    this.board.setCellToLive(x + 4, y + 12);
    this.board.setCellToLive(x + 8, y + 12);
    this.board.setCellToLive(x + 9, y + 12);
    this.board.setCellToLive(x + 10, y + 12);
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
    this.intervalHandler = setInterval(()=>this.evolve(), 150);
  }
}
