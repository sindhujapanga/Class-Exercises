package com.movies.movies.service;

import java.util.List;


import com.movies.movies.model.MoviePojo;

public interface MovieService {
	List<MoviePojo> getAllMovies();
    MoviePojo getmovie(Integer mId);
    void deleteMovie(Integer mId);
    MoviePojo addMovie(MoviePojo moviePojo);
    MoviePojo updateMovie(MoviePojo moviePojo);
}

