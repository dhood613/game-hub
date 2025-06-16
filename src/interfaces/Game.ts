// For list API /games
export interface Game {
    id: number;
    name: string;
    background_image: string;
    //Bad design on API bc parent_platform is an array of objects
    //that have a platform object array
    parent_platforms: {platform:Platform}[];
    metacritic: number;
  }
  
  export interface Platform{
    id:number;
    name:string;
    slug:string;
  }
  // For detail API /games/{id}
export interface GameDetail extends Game {
    description: string;

}