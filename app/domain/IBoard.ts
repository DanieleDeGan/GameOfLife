export interface IBoard{
  setCellToLive(number:number, number2:number):void;
  isAlive(number:number, number2:number):boolean;
  evolve():void;
  getLivingNeighbours(row:number,col:number):number;
  cells: boolean[][];
}
