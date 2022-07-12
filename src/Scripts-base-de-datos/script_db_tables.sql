DROP DATABASE IF EXISTS bookshop;
CREATE DATABASE bookshop;
USE bookshop;



DROP TABLE IF EXISTS genres;
CREATE TABLE genres (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(45) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS publishers;
CREATE TABLE publishers (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(45) DEFAULT NULL,
  address varchar(45) DEFAULT NULL,
  email varchar(45)  DEFAULT NULL,
  phone_number int DEFAULT NULL,
  PRIMARY KEY (id)
); 


DROP TABLE IF EXISTS books;
CREATE TABLE books (
  id int NOT NULL AUTO_INCREMENT,
  genre_id int NOT NULL,
  publisher_id int NOT NULL,
  title varchar(500) NOT NULL,
  author varchar(150) NOT NULL,
  second_author varchar(150) NOT NULL,
  description longtext DEFAULT NULL,
  publication_date int DEFAULT NULL,
  price int NOT NULL,
  isbn bigint NOT NULL,
  pages int DEFAULT NULL,
  stock int DEFAULT NULL,
  image longtext DEFAULT NULL,
  translator varchar(100) DEFAULT NULL,
  illustrator varchar(100) DEFAULT NULL,
  language varchar(45) DEFAULT NULL,
  create_time date DEFAULT NULL,
  update_time date DEFAULT NULL,
  active INT DEFAULT "1",
  PRIMARY KEY (id),
  UNIQUE KEY isbn_UNIQUE (isbn),
  KEY fk_book_genre1_idx (genre_id),
  KEY fk_book_publisher1_idx (publisher_id),
  CONSTRAINT fk_book_genre1 FOREIGN KEY (genre_id) REFERENCES genres (id),
  CONSTRAINT fk_book_publisher1 FOREIGN KEY (publisher_id) REFERENCES publishers (id)
);

CREATE TABLE orderscarts (
  id int NOT NULL AUTO_INCREMENT,
  number int NOT NULL,
  total int NOT NULL,
  confirmed int NOT NULL,
  create_time date DEFAULT NULL,
  update_time date DEFAULT NULL,
  PRIMARY KEY (id)
); 

DROP TABLE IF EXISTS ordersCartsBooks;
CREATE TABLE ordersCartsBooks (
  id int NOT NULL AUTO_INCREMENT,
  order_id int NOT NULL,
  book_id int NOT NULL,
  PRIMARY KEY (id),
  KEY fk_order_has_book_book1_idx (book_id),
  KEY fk_order_has_book_order1_idx (order_id),
  CONSTRAINT fk_order_has_book_book1 FOREIGN KEY (book_id) REFERENCES books (id),
  CONSTRAINT fk_order_has_book_order1 FOREIGN KEY (order_id) REFERENCES orderscarts (id)
);


DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  orderCart_id int DEFAULT NULL,
  first_name varchar(100) NOT NULL,
  last_name varchar(45) NOT NULL,
  email varchar(45) NOT NULL,
  password varchar(200) NOT NULL,
  dni int NOT NULL,
  address varchar(100) DEFAULT NULL,
  birth_date date DEFAULT NULL,
  image longtext,
  isAdmin int NOT NULL DEFAULT '0',
  create_time date DEFAULT NULL,
  update_time date DEFAULT NULL,
  active int DEFAULT '0',
  PRIMARY KEY (id),
  UNIQUE KEY dni_UNIQUE (dni),
  KEY fk_user_order_cart_idx (orderCart_id),
  CONSTRAINT fk_user_order_cart FOREIGN KEY (orderCart_id) REFERENCES orderscarts (id)
) ;

