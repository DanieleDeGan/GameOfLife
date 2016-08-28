export interface IPatternBuilder{
  createPulsarAt(x:number,y:number):IPatternBuilder;
  createBlockAt(x:number,y:number):IPatternBuilder;
  createBeehiveAt(x:number,y:number):IPatternBuilder;
  createLoafAt(x:number,y:number):IPatternBuilder;
  createBoatAt(x:number,y:number):IPatternBuilder;
  createBlinkerAt(x:number,y:number):IPatternBuilder;
}
