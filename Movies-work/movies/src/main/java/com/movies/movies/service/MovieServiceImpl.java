package com.movies.movies.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movies.movies.dao.MovieDao;
import com.movies.movies.dao.entity.MovieEntity;
import com.movies.movies.model.MoviePojo;
@Service
public class MovieServiceImpl implements MovieService {
    @Autowired
    MovieDao movieDao;
	@Override
	public List<MoviePojo> getAllMovies() {
	   
		List<MoviePojo> allMoviePojo=new ArrayList();
		Iterable<MovieEntity> allMovieEntity=movieDao.findAll();
		Iterator itr=allMovieEntity.iterator();
		while(itr.hasNext())
		{
			MovieEntity movieEntity=(MovieEntity)itr.next();
			MoviePojo moviePojo=new MoviePojo(movieEntity.getMovieId(),movieEntity.getMovieTitle(),movieEntity.getMovieDirector(),movieEntity.getMovieDate(),movieEntity.getMovieUrl());
			allMoviePojo.add(moviePojo);
			
			
		}
		return allMoviePojo;
}
	@Override
	public MoviePojo getmovie(Integer mId) {
		// TODO Auto-generated method stub
		MoviePojo moviePojo=null;
		Optional<MovieEntity> optional= movieDao.findById(mId);
		if(optional.isPresent()) {
			
			MovieEntity movieEntity = optional.get();
			moviePojo = new MoviePojo(movieEntity.getMovieId(),movieEntity.getMovieTitle(),movieEntity.getMovieDirector(),movieEntity.getMovieDate(),movieEntity.getMovieUrl());
		}
		return moviePojo;
	}
	@Override
	public void deleteMovie(Integer mId) {
		// TODO Auto-generated method stub
		movieDao.deleteById(mId);
		
	}
	@Override
	public MoviePojo addMovie(MoviePojo moviePojo) {
		MovieEntity movieEntity= new MovieEntity(moviePojo.getMovieId(),moviePojo.getMovieTitle(),moviePojo.getMovieDirector(),moviePojo.getMovieDate(),moviePojo.getMovieUrl());
	    movieDao.saveAndFlush(movieEntity);
	    moviePojo.setMovieId(movieEntity.getMovieId());
				return moviePojo;
	}
	@Override
	public MoviePojo updateMovie(MoviePojo moviePojo) {
		MovieEntity movieEntity= new MovieEntity(moviePojo.getMovieId(),moviePojo.getMovieTitle(),moviePojo.getMovieDirector(),moviePojo.getMovieDate(),moviePojo.getMovieUrl());
		 movieDao.save(movieEntity);
			return moviePojo;
	}

}