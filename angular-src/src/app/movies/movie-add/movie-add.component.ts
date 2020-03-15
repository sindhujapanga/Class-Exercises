import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../Movie';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  movie:Movie;
  movies: Movie[];

  constructor(protected activatedRoute:ActivatedRoute,protected movieService:MovieService,protected router:Router) 
  { 
this.movie={
  movieTitle:'',
  movieUrl:'',
  movieDate:'',
  movieDirector:'',
  movieId:0
};
  }

  ngOnInit(): void {
  }

  addMovie()
  {
    let movies:Movie={
      movieId:this.movie.movieId,
      movieTitle:this.movie.movieTitle,
      movieDate:this.movie.movieDate,
      movieDirector:this.movie.movieDirector,
      movieUrl:this.movie.movieUrl,

    }
   
    
    this.movieService.addMovie(movies).subscribe(
      (response: any)=>{
        this.movies.push(response);
      }
    );
    
    this.router.navigate(['movie-list']);

  }
}

