import { Injectable } from '@angular/core';
import { Movie } from './Movie';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
    
 
allMovies: Movie[];
//movie:Movie;
  constructor(protected http:HttpClient) {
    this.allMovies=[{
      movieId:101,
      movieUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU9-PSKimXnJqbPxptSU7EKX5w-hRBrL5ARH4EwCQtJ8oRE1_g',
      movieTitle:'1917',
      movieDate:'17/01/2020',
      movieDirector:'Sam Mendes'
    },  
    {
      movieId:102,
      movieUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPAiAnfB7n3mHYn8HuFIqiKOWeHizRY9OdJUO7lAiQsO4OBHAk',
      movieTitle:'Game of Thrones',
      movieDate:'17/04/2011',
      movieDirector:'George R R Martin'
    },  
    {
      movieId:103,
      movieUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6T7hE0ZusUTjq6jrrF015mSUj3Y0F0quSkniLSDHfuoRRhO7U',
      movieTitle:'ye jawami hai diwani',
      movieDate:'31/05/2013',
      movieDirector:'Ayan Mukerji'
    },  
    {
      movieId:104,
      movieUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQyroqdsUFwMP6vxS0i71_qreLp-KZII1lWzmGIuj-T7GrBtak',
      movieTitle:'legend',
      movieDate:'28/03/2014',
      movieDirector:'Boyapati Srinu'
    },  
    {
      movieId:105,
      movieUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuVHwEuRcbGZZBe94QjS5bus3U6OFviFBho0gH80v9_YJWsuAh',
      movieTitle:'Evil Dead',
      movieDate:'02/01/1984',
      movieDirector:'Fede Alvarez'
    }];  
  }
getAllMovies(){
  return this.http.get("http://localhost:8076/one/movies/all");
}
getMovie(mId:number){
  return this.http.get("http://localhost:8076/one/movies/"+mId);
}
 

/*updateMovie(movie:Movie){
  let size=this.allMovies.length;
  for(let i=0;i<size;i++){
    if(this.allMovies[i].movieId==movie.movieId)
    {        
             this.allMovies[i].movieId=movie. movieId,
              this.allMovies[i].movieTitle=movie.movieTitle,
              this.allMovies[i].movieUrl=movie.movieUrl,
              this.allMovies[i].movieDate=movie.movieDate,
             this.allMovies[i].movieDirector=movie. movieDirector
      }
    }
  }*/



addMovie(movies :Movie){
  return this.http.post("http://localhost:8076/one/movies",movies);
}

deleteMovie(movieId:number)
  
{
  return this.http.delete("http://localhost:8076/one/movies/"+movieId);
 }
updateMovie(movies: Movie){
  return this.http.put("http://localhost:8076/one/movies",movies);
}

}
