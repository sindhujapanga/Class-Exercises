import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie: Movie;
  constructor(protected movieService: MovieService, protected activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
                                                      this.movie = this.movieService.getmovie(params.get('mId'));
                                                      });
  }




}
