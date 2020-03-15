package com.movies.movies.model;

public class MoviePojo {
 private int movieId;
 private String movieTitle;
 private String movieDirector;
 private String movieUrl;
 private String movieDate;
public MoviePojo() {
	super();
	// TODO Auto-generated constructor stub
}
public MoviePojo(int movieId, String movieTitle, String movieDirector, String movieUrl, String movieDate) {
	super();
	this.movieId = movieId;
	this.movieTitle = movieTitle;
	this.movieDirector = movieDirector;
	this.movieUrl = movieUrl;
	this.movieDate = movieDate;
}
public int getMovieId() {
	return movieId;
}
public void setMovieId(int movieId) {
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
public String getMovieUrl() {
	return movieUrl;
}
public void setMovieUrl(String movieUrl) {
	this.movieUrl = movieUrl;
}
public String getMovieDate() {
	return movieDate;
}
public void setMovieDate(String movieDate) {
	this.movieDate = movieDate;
}

}
