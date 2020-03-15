import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

allMovies: Movie[];
  constructor() { 
    this.allMovies =[{
      movieId: 101,
      movieUrl: 'https://i0.wp.com/www.newsbugz.com/wp-content/uploads/2020/02/Aranya-Movie-Rana-News.png?fit=921%2C710&ssl=1',
      movieTitle: 'Aranya',
      movieDate: '02-04-2020',
      movieDirector: 'Prabhu Solomon'
      },
      {
      movieId: 102,
      movieUrl: 'https://www.filmibeat.com/fanimg/214x100x267/fan_images/movie/18285/nani-v-sudheer-babu-v-photos-images-67526.jpg',
      movieTitle: 'V',
      movieDate: '25-03-2020',
      movieDirector: 'Mohan Krishna Indraganti'
      },
      {
      movieId: 103,
      movieUrl: 'https://timesofindia.indiatimes.com/thumb/msid-71790400,width-800,height-600,resizemode-4/71790400.jpg',
      movieTitle: 'Beeshma',
      movieDate: '21-02-2020',
      movieDirector: 'Venky Kudumula'
      },
      {
        movieId: 104,
        movieUrl: 'https://www.thetelugufilmnagar.com/wp-content/uploads/2020/01/TFN-artical_TEL-Final-3Monkeys-Trailer-out.jpg',
        movieTitle: '3 Monkeys',
        movieDate: '07-02-2020',
        movieDirector: 'Kranthi Madhav'
        },
        {
          movieId: 105,
          movieUrl: 'https://media2.bollywoodhungama.in/wp-content/uploads/2019/07/K.G.F-Chapter-2.jpg',
          movieTitle: 'KGF-2',
          movieDate: '21-07-2020',
          movieDirector: 'Prashanth Neel'
          }
];
  }
  getAllMovies(): Movie[]{
    return this.allMovies;
  }
  getmovie(mId: string): Movie{
    let movie: Movie;
    let size = this.allMovies.length;
    for(let i=0;i<size;i++)
    {
      if(this.allMovies[i].movieId== +mId){
       movie=this.allMovies[i];
       break;
      }
    }
    return movie;
  }
}
