import {IBoard} from "./IBoard";
export class Board implements IBoard {

  private _cells:boolean[][];
  private _generations:number;
  private newCells:boolean[][];
  private size:number;

  constructor(size:number, defaultValue:boolean) {
    this._generations = 0;
    this.size = size;
    this._cells = this.initializeCells(defaultValue);
    this.newCells = this.initializeCells(defaultValue);
  }

  get cells():boolean[][] {
    return this._cells;
  }

  get generations():number {
    return this._generations;
  }

  evolve():void {
    // console.log(this.cells);
    this.newCells = this.initializeCells(false);
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        let livingNeighbour = this.getLivingNeighbours(i, j);
        let isCurrentlyLiving = this._cells[i][j];
        if (isCurrentlyLiving) {
          if (livingNeighbour < 2 || livingNeighbour > 3) {
            this.newCells[i][j] = false;
          } else {
            this.newCells[i][j] = true;
          }
        }
        else {
          if (livingNeighbour === 3) {
            this.newCells[i][j] = true;
          }
          else {
            this.newCells[i][j] = false;
          }
        }
      }
    }

    this._cells = this.newCells;
  }

  setCellToLive(row:number, col:number):void {
    if (this._cells) {
      this._cells[row][col] = true;
    }
  }

  isAlive(row:number, col:number):boolean {
    if (this._cells) {
      return this._cells[row][col];
    }
  }

  getLivingNeighbours(row:number, col:number):number {
    let result = 0;
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (!(i < 0 || j < 0 || i >= this.size || j >= this.size || (i === row && j === col))) {
          if (this._cells[i][j]) {
            result++;
          }
        }
      }
    }
    return result;
  }


  private initializeCells(defaultValue:boolean):boolean[][] {
    let celle:boolean[][] = [];
    for (let i = 0; i < this.size; i++) {
      let arr:boolean[] = [];
      for (let j = 0; j < this.size; j++) {
        arr.push(defaultValue);
      }
      celle.push(arr);
    }
    return celle;
  }
}
