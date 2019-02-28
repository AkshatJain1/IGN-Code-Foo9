# IGN-Code-Foo9
Repository for IGN's Code Foo 9 Internship

CREATE DATABASE `code_foo_backend` /*!40100 DEFAULT CHARACTER SET utf8 */;
CREATE TABLE `articles` (
  `article_id` int(11) NOT NULL AUTO_INCREMENT,
  `headline` varchar(100) NOT NULL,
  `author_id` int(11) NOT NULL,
  PRIMARY KEY (`article_id`),
  UNIQUE KEY `article_id_UNIQUE` (`article_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `authors` (
  `author_id` int(11) NOT NULL AUTO_INCREMENT,
  `author_1` varchar(45) NOT NULL,
  `author_2` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`author_id`),
  UNIQUE KEY `author_id_UNIQUE` (`author_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `content` (
  `content_id` varchar(40) NOT NULL,
  `content_type` varchar(20) NOT NULL,
  `type_id` int(11) NOT NULL,
  `description` longtext NOT NULL,
  `publish_date` varchar(40) NOT NULL,
  `slug` longtext NOT NULL,
  `state` varchar(20) NOT NULL,
  `tag_id` int(11) NOT NULL,
  `thumbnail_id` int(11) NOT NULL,
  PRIMARY KEY (`content_id`),
  UNIQUE KEY `content_id_UNIQUE` (`content_id`),
  UNIQUE KEY `type_id_UNIQUE` (`type_id`),
  UNIQUE KEY `thumbnails_id_UNIQUE` (`thumbnail_id`),
  UNIQUE KEY `tags_id_UNIQUE` (`tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `tags` (
  `tag_id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_1` varchar(45) DEFAULT NULL,
  `tag_2` varchar(45) DEFAULT NULL,
  `tag_3` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`tag_id`),
  UNIQUE KEY `tag_id_UNIQUE` (`tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `thumbnails` (
  `thumbnail_id` int(11) NOT NULL AUTO_INCREMENT,
  `thumbnail_1_URL` varchar(100) DEFAULT NULL,
  `thumbnail_1_size` varchar(45) DEFAULT NULL,
  `thumbnail_1_width` int(11) DEFAULT NULL,
  `thumbnail_1_height` int(11) DEFAULT NULL,
  `thumbnail_2_URL` varchar(100) DEFAULT NULL,
  `thumbnail_2_size` varchar(45) DEFAULT NULL,
  `thumbnail_2_width` int(11) DEFAULT NULL,
  `thumbnail_2_height` int(11) DEFAULT NULL,
  `thumbnail_3_URL` varchar(100) DEFAULT NULL,
  `thumbnail_3_size` varchar(45) DEFAULT NULL,
  `thumbnail_3_width` int(11) DEFAULT NULL,
  `thumbnail_3_height` int(11) DEFAULT NULL,
  PRIMARY KEY (`thumbnail_id`),
  UNIQUE KEY `thumbnail_id_UNIQUE` (`thumbnail_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `thumbnails` (
  `thumbnail_id` int(11) NOT NULL AUTO_INCREMENT,
  `thumbnail_1_URL` varchar(100) DEFAULT NULL,
  `thumbnail_1_size` varchar(45) DEFAULT NULL,
  `thumbnail_1_width` int(11) DEFAULT NULL,
  `thumbnail_1_height` int(11) DEFAULT NULL,
  `thumbnail_2_URL` varchar(100) DEFAULT NULL,
  `thumbnail_2_size` varchar(45) DEFAULT NULL,
  `thumbnail_2_width` int(11) DEFAULT NULL,
  `thumbnail_2_height` int(11) DEFAULT NULL,
  `thumbnail_3_URL` varchar(100) DEFAULT NULL,
  `thumbnail_3_size` varchar(45) DEFAULT NULL,
  `thumbnail_3_width` int(11) DEFAULT NULL,
  `thumbnail_3_height` int(11) DEFAULT NULL,
  PRIMARY KEY (`thumbnail_id`),
  UNIQUE KEY `thumbnail_id_UNIQUE` (`thumbnail_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;