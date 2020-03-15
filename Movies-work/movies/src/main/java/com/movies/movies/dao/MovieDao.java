package com.movies.movies.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movies.movies.dao.entity.MovieEntity;

@Repository
public interface MovieDao extends JpaRepository<MovieEntity,Integer>{

}