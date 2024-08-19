-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-08-2024 a las 00:28:10
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `miniproyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `photo`, `name`, `bio`, `phone`, `email`, `password`) VALUES
(1, '1723935791236-OIP.jpg', 'Juan Perez', NULL, NULL, 'juan321@gmail.com', '$2b$10$opS40GDIYBIKOYD3BGdmLO98wO90DozJ2McShf7JFOMNuZLG4mM0m'),
(3, NULL, NULL, NULL, NULL, 'juan125@gmail.com', '$2b$10$Hz8ErzgFEtxIym8K9.NHdO8UoZpA7.J8szr7eIUJE9nBh0JRzrtPi'),
(4, '1724085869458-Captura de pantalla 2024-04-09 170545.png', 'Kat', NULL, '993425878', 'katy@gmail.com', '$2b$10$uN0ZODbhM6wsd/XdqNVgj.4UL.blZ4RPGM9jrFrJbu0z/XQNMVCDW'),
(5, NULL, NULL, NULL, NULL, 'jose', '$2b$10$/4ZB2rgGaYbN85M3BPqEBO2Zx/Ndf2ZgN.DklSm7tIQD1amnrsW76'),
(6, '1724106213248-usuario-random.jpg', 'Funval', 'Soy funval', '999999999', 'funval2024@gmail.com', '$2b$10$4ziCK.wU0.tn/YrldtYt0e5b.kViiD2aHjTLlfPjhmezjw1TwJ6RO');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `uemail` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
