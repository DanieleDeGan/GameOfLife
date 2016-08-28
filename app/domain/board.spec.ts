import {Board} from "./Board";
fdescribe('Board Test', ()=> {

  let board:Board;

  beforeEach(()=>{
    board= new Board(4,false);
  });

  it('should set live cell', ()=> {
    board.setCellToLive(1,1);
    expect(board.isAlive(1,1)).toBe(true);
  });

  it('should give right number of neighbours',()=>{
    board.setCellToLive(1,1);
    board.setCellToLive(1,2);
    board.setCellToLive(1,3);
    expect(board.getLivingNeighbours(1,2)).toBe(2);
    expect(board.getLivingNeighbours(1,1)).toBe(1);
    expect(board.getLivingNeighbours(1,3)).toBe(1);
  });

  it('should kill a cell without neighbours',()=>{
    board.setCellToLive(2,2);
    board.evolve();
    expect(board.isAlive(2,2)).toBe(false);
  });

  it('should kill a cell with less of 2 neighbours',()=>{
    board.setCellToLive(2,2);
    board.setCellToLive(2,3);
    board.evolve();
    expect(board.isAlive(2,2)).toBe(false);
    expect(board.isAlive(2,3)).toBe(false);
  });

  it('should keep live a cell with 2 neighbours', ()=>{
    board.setCellToLive(1,1);
    board.setCellToLive(1,2);
    board.setCellToLive(1,3);
    board.evolve();
    expect(board.isAlive(1,2)).toBe(true);
  });

  it('should give live to a dead cell with 3 neighbours', ()=>{
    board.setCellToLive(1,1);
    board.setCellToLive(1,3);
    board.setCellToLive(2,2);
    board.evolve();
    expect(board.isAlive(1,2)).toBe(true);
  });


});
