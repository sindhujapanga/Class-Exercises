package com.movies.movies.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movies.movies.model.MoviePojo;
import com.movies.movies.service.MovieService;

@RestController
@RequestMapping("one")
@CrossOrigin
public class MovieController {
	@Autowired
	MovieService movieService;

	@GetMapping("/movies/all")
	List<MoviePojo> getAllMovies() {
		return movieService.getAllMovies();

	}

	@GetMapping("/movies/{movieId}")
	MoviePojo getmovie(@PathVariable("movieId") Integer mId) {
		return movieService.getmovie(mId);
	}

	@PostMapping("/movies")
	MoviePojo addMovie(@RequestBody MoviePojo moviePojo) {
		return movieService.addMovie(moviePojo);
	}

	@PutMapping("/movies")
	MoviePojo updateMovie(@RequestBody MoviePojo moviePojo) {
		return moviePojo;
	}

	@DeleteMapping("/movies/{movieId}")
	void deleteMovie(@PathVariable("movieId") Integer mID) {
		movieService.deleteMovie(mID);
	}

}
