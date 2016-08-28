import {IBoard} from "./IBoard";
import {IPatternBuilder} from "./IPatternBuilder";
export class PatternBuilder implements IPatternBuilder{
  private board;

  constructor(board:IBoard){
    this.board = board;
  }

  createPulsarAt(x:number,y:number):IPatternBuilder{
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

    return this;
  }

  createBlockAt(x:number,y:number):IPatternBuilder{
    this.board.setCellToLive(x,y);
    this.board.setCellToLive(x,y+1);
    this.board.setCellToLive(x+1,y);
    this.board.setCellToLive(x+1,y+1);
    return this;
  }

  createBeehiveAt(x:number,y:number):IPatternBuilder{
    this.board.setCellToLive(x,y+1);
    this.board.setCellToLive(x,y+2);
    this.board.setCellToLive(x+1,y);
    this.board.setCellToLive(x+1,y+3);
    this.board.setCellToLive(x+2,y+1);
    this.board.setCellToLive(x+2,y+2);
    return this;
  }

  createLoafAt(x:number,y:number):IPatternBuilder{
    this.board.setCellToLive(x,y+1);
    this.board.setCellToLive(x,y+2);
    this.board.setCellToLive(x+1,y);
    this.board.setCellToLive(x+1,y+3);
    this.board.setCellToLive(x+2,y+1);
    this.board.setCellToLive(x+2,y+3);
    this.board.setCellToLive(x+3,y+2);
    return this;
  }

  createBoatAt(x:number,y:number):IPatternBuilder{
    this.board.setCellToLive(x,y);
    this.board.setCellToLive(x,y+1);
    this.board.setCellToLive(x+1,y);
    this.board.setCellToLive(x+1,y+2);
    this.board.setCellToLive(x+2,y+1);
    return this;
  }

  createBlinkerAt(x:number,y:number):IPatternBuilder{
    this.board.setCellToLive(x,y);
    this.board.setCellToLive(x,y+1);
    this.board.setCellToLive(x,y+2);
    return this;
  }

  createToadAt(x:number,y:number):IPatternBuilder{
    this.board.setCellToLive(x,y+1);
    this.board.setCellToLive(x,y+2);
    this.board.setCellToLive(x,y+3);
    this.board.setCellToLive(x+1,y);
    this.board.setCellToLive(x+1,y+1);
    this.board.setCellToLive(x+1,y+2);
    return this;
  }

  createBeaconAt(x:number,y:number):IPatternBuilder{
    this.board.setCellToLive(x,y);
    this.board.setCellToLive(x,y+1);
    this.board.setCellToLive(x+1,y);
    this.board.setCellToLive(x+2,y+3);
    this.board.setCellToLive(x+3,y+2);
    this.board.setCellToLive(x+3,y+3);
    return this;
  }

  createPentadecathlonAt(x:number,y:number):IPatternBuilder{
    this.board.setCellToLive(x,y+1);
    this.board.setCellToLive(x+1,y+1);
    this.board.setCellToLive(x+2,y);
    this.board.setCellToLive(x+2,y+1);
    this.board.setCellToLive(x+2,y+2);

    this.board.setCellToLive(x+5,y);
    this.board.setCellToLive(x+5,y+1);
    this.board.setCellToLive(x+5,y+2);
    this.board.setCellToLive(x+6,y+1);
    this.board.setCellToLive(x+7,y+1);
    this.board.setCellToLive(x+8,y+1);
    this.board.setCellToLive(x+9,y+1);
    this.board.setCellToLive(x+10,y);
    this.board.setCellToLive(x+10,y+1);
    this.board.setCellToLive(x+10,y+2);

    this.board.setCellToLive(x+13,y);
    this.board.setCellToLive(x+13,y+1);
    this.board.setCellToLive(x+13,y+2);
    this.board.setCellToLive(x+14,y+1);
    this.board.setCellToLive(x+15,y+1);
    return this;
  }

  createGliderAt(x:number,y:number):IPatternBuilder{
    this.board.setCellToLive(x,y+1);
    this.board.setCellToLive(x+1,y+2);
    this.board.setCellToLive(x+2,y);
    this.board.setCellToLive(x+2,y+1);
    this.board.setCellToLive(x+2,y+2);
    return this;
  }
  createLWSSAt(x:number,y:number):IPatternBuilder{
    this.board.setCellToLive(x,y);
    this.board.setCellToLive(x,y+3);
    this.board.setCellToLive(x+1,y+4);
    this.board.setCellToLive(x+2,y);
    this.board.setCellToLive(x+2,y+4);
    this.board.setCellToLive(x+3,y+1);
    this.board.setCellToLive(x+3,y+2);
    this.board.setCellToLive(x+3,y+3);
    this.board.setCellToLive(x+3,y+4);
    return this;
  }
}
