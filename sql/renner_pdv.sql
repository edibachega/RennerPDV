-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tempo de Geração: 21/11/2016 às 20:16
-- Versão do servidor: 5.5.38-0ubuntu0.14.04.1
-- Versão do PHP: 5.5.9-1ubuntu4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de dados: `renner_pdv`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` varchar(12) NOT NULL,
  `nome` varchar(40) NOT NULL,
  `marca` varchar(40) NOT NULL,
  `preco` decimal(6,2) NOT NULL,
  `quantidade` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Fazendo dump de dados para tabela `produtos`
--

INSERT INTO `produtos` (`id`, `codigo`, `nome`, `marca`, `preco`, `quantidade`) VALUES
(1, '123123', 'Calça', 'Levis', 32.90, 5),
(2, '432123', 'Jaqueta', 'Renner', 234.70, 3),
(3, '121W34', 'Camiseta', 'Nike', 76.90, 10),
(4, '3245234', 'rewrwer', 'Levis', 423.67, 4324234),
(5, '12890012', 'Tenis', 'Nike', 245.00, 4),
(6, '432432', 'sdfsdfsd', 'Hering', 9999.99, 432432),
(7, '432432', 'sdfsdfsd', 'Hering', 9999.99, 432432),
(8, '1222222', 'sdfdsfdsfds', '0', 32.00, 232),
(9, '', '', '0', 0.00, 0),
(10, '', '', '', 0.00, 0),
(11, '', '', '', 0.00, 0),
(12, '', '', '', 0.00, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
