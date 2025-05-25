CREATE DATABASE CRUD_NODE_MYSQL;
USE CRUD_NODE_MYSQL;
CREATE TABLE personas(
  id int primary key auto_increment,
  nombre varchar(50) NOT NULL,
  apellido varchar(50) NOT NULL,
  edad int);