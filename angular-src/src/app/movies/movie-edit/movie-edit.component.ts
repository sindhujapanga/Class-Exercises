import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../Movie';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
 
  movie:Movie;
  allMovies:any;

  constructor(protected activatedRoute: ActivatedRoute, protected movieService: MovieService,protected router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( params=>
      {
        let mov:any=params.get('mId');
        //console.log();
       
        this.movieService.getMovie(+mov).subscribe(
          (response:any) => {
            console.log(response);
            this.movie = response;
          }
          
          );
    //  console.log(this.movieService.getMovie(+a));
      });
    }
  updateMovie()
  {
    this.movieService.updateMovie(this.movie).subscribe(
      (response:any)=>
      {});
        this.movieService.getAllMovies().subscribe(
         (response:any)=>
         {
             console.log(response);
              this.allMovies=response;
         }
        );
  
    
    this.router.navigate(['movie-list']);
  }
}
 