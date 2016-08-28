export interface IPatternBuilder{
  createPulsarAt(x:number,y:number):IPatternBuilder;
  createBlockAt(x:number,y:number):IPatternBuilder;
  createBeehiveAt(x:number,y:number):IPatternBuilder;
  createLoafAt(x:number,y:number):IPatternBuilder;
  createBoatAt(x:number,y:number):IPatternBuilder;
  createBlinkerAt(x:number,y:number):IPatternBuilder;
  createToadAt(x:number,y:number):IPatternBuilder;
  createBeaconAt(x:number,y:number):IPatternBuilder;
  createPentadecathlonAt(x:number,y:number):IPatternBuilder;
  createGliderAt(x:number,y:number):IPatternBuilder;
  createLWSSAt(x:number,y:number):IPatternBuilder;
}
