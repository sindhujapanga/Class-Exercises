import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
  
})
export class MovieListComponent implements OnInit {
//movieId:number;
   allMovies:any;
  constructor( protected router :Router, protected movieService: MovieService) { 
 /* this.allMovies =[{
                    movieId: 102,
                    movieUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                    movieTitle:'1917',
                    movieDate: "30/01/2020",
                    movieDirector :'san Mades'
                   },
                   {
                    movieId: 103,
                    movieUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                    movieTitle:'happy Days',
                    movieDate: "30/01/2020",
                    movieDirector :'shekar kamula'
                   },
                   {
                    movieId: 104,
                    movieUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                    movieTitle:'kushi',
                    movieDate: "07/06/2007",
                    movieDirector :'S.J Surya'
                   },{
                    movieId: 105,
                    movieUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                    movieTitle:'Dhrushyam',
                    movieDate: "11/07/2014",
                    movieDirector :'sri Priya'
                   },
                   {
                    movieId: 102,
                    movieUrl: '',
                    movieTitle:'bahubali',
                    movieDate: "1/07/2018",
                    movieDirector :''
                   },

  ];*/

} 
  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(
      (response:any)=>{
        console.log(response.data);
        this.allMovies = response;
      }
    );
   // this.allMovies = this.movieService.getAllMovies();
  }
  displayEditMovie(mId:number){
    this.router.navigate(['/movie-edit/'+mId]);
    
  }
  displayAddMovie(){
    this.router.navigate(['/movie-add']);
    

    
  }
  deleteMovie(movieId:number)
  {
    this.movieService.deleteMovie(movieId).subscribe(
      (response)=>{
        this.movieService.getAllMovies().subscribe(
          (response)=>{
            console.log(response);
            this.allMovies = response;
    
          }
        )
      }
    );
    //this.allMovies=this.movieService.getAllMovies();
  }
}
