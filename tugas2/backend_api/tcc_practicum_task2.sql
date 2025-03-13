-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 12, 2025 at 04:24 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tcc_practicum_task2`
--

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `user_id`, `title`, `content`) VALUES
(10, 2, 'testing', '[TEST] TESTING API'),
(11, 2, 'testing', '[PART-1] TESTING API'),
(12, 2, '[PART-2] testing', '[PART-2] TESTING API'),
(13, 2, '[PART-2] testing', '[PART-2] TESTING API'),
(14, 2, '[PART-3] testing', '[PART-3] TESTING API');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1, 'John Doe test', 'johndoe@example.com', '$2b$10$6K1SRnB82U38fKQ/w/ZzqeoiR6FVqnI5n6K9iZI0eyxNe0P/xxZgO'),
(2, 'testing', 'testing@example.com', '$2b$10$Q6gubaBmnDnvdeqcTKiDZeRGfQx7xp/Hwd.43a.ONvYHvU8r0GBBO'),
(3, 'akun 1', 'akun1@example.com', '$2b$10$T.QytIEvvxhAY2/73JBfMeqrpanPfmrnCXMxkG2jk1EKwJqZpIBVW'),
(4, 'testakun1', 'testakun1@gmail.com', '$2b$10$2bsuILPGvCZp0smC8D5nYuvAEaCSF79yhSZGDeqGA2HgpyWU9Dv92'),
(5, 'testakun2', 'testakun2@gmail.com', '$2b$10$uW1OMJ6aHJXBM3bwwxbnJeCFOTPf0M8SFzytOC4cFj7f042n.ZoJm'),
(6, 'test akun 3', 'akun3@gmail.com', '$2b$10$KiLBfW3nu8zkhs.IzsIP7OyvrlPiqBbxy2FF2Fk.k4p6M92zwla8W'),
(7, 'test akun 4', 'akun4@gmail.com', '$2b$10$e/04qGJzadfvDb8OarUyj.hRvu13h5YojKb3Yg/2SNUVUknhjbffq');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
