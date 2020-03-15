package com.movies.movies.dao.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "moviestable")
public class MovieEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "movie_id")
	Integer movieId;
	
	@Column(name = "movie_title")
	String movieTitle;
	
	@Column(name = "movie_director")
	String movieDirector;
	
	@Column(name = "movie_date")
	String movieDate;
	

	@Column(name = "movie_url")
	String movieUrl;


	public MovieEntity() {
		super();
		// TODO Auto-generated constructor stub
	}


	public MovieEntity(Integer movieId, String movieTitle, String movieDirector, String movieDate, String movieUrl) {
		super();
		this.movieId = movieId;
		this.movieTitle = movieTitle;
		this.movieDirector = movieDirector;
		this.movieDate = movieDate;
		this.movieUrl = movieUrl;
	}


	public Integer getMovieId() {
		return movieId;
	}


	public void setMovieId(Integer movieId) {
		this.movieId = movieId;
	}


	public String getMovieTitle() {
		return movieTitle;
	}


	public void setMovieTitle(String movieTitle) {
		this.movieTitle = movieTitle;
	}


	public String getMovieDirector() {
		return movieDirector;
	}


	public void setMovieDirector(String movieDirector) {
		this.movieDirector = movieDirector;
	}


	public String getMovieDate() {
		return movieDate;
	}


	public void setMovieDate(String movieDate) {
		this.movieDate = movieDate;
	}


	public String getMovieUrl() {
		return movieUrl;
	}


	public void setMovieUrl(String movieUrl) {
		this.movieUrl = movieUrl;
	}

}