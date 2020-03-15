-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2020 at 01:51 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moviesdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `moviestable`
--

CREATE TABLE `moviestable` (
  `movie_id` int(10) NOT NULL,
  `movie_title` varchar(20) NOT NULL,
  `movie_director` varchar(25) NOT NULL,
  `movie_date` varchar(20) NOT NULL,
  `movie_url` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `moviestable`
--

INSERT INTO `moviestable` (`movie_id`, `movie_title`, `movie_director`, `movie_date`, `movie_url`) VALUES
(5, 't', 'sg', 'sg', 'sg'),
(6, 'asd', 'adf', 'df', 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'),
(7, 'w', 'd', 'wsdw', 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'),
(8, 'sdfw', 'qrgr', 'dfwref', 'qf'),
(9, 'okm', 'gfy', 'hyfg', 'hfuyc'),
(10, 'malli', 'hgug', 'gfyhf', 'tftfh'),
(11, 'perfume', 'trivikram', '21 jan1984', 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `moviestable`
--
ALTER TABLE `moviestable`
  ADD PRIMARY KEY (`movie_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `moviestable`
--
ALTER TABLE `moviestable`
  MODIFY `movie_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
