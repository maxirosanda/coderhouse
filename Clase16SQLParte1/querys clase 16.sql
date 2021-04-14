
--    CLASE 17 --------  DESAFIO GENERICO 1

-- create database mibase;
-- use mibase;
-- create table usuarios (nombre varchar(30) not null, apellido VARCHAR(30) not null, edad INTEGER unsigned, email varchar(100) not null, id integer unsigned primary key auto_increment );
-- INSERT INTO usuarios (nombre, apellido, edad, email) VALUES ("juan", "perez", 23, "jp@gmail.com"), ("Pedro", "Mei", 21, "pm@gmail.com"), ("Juana", "Suarez", 25, "js@gmail.com");
-- select * from usuarios;
-- delete from usuarios where id = 2;

-- update usuarios set edad = 24 where id = 1;
INSERT INTO usuarios (nombre, apellido, edad, email) VALUES ("juan", "perez", 23, "jp@gmail.com"), ("Pedro", "Mei", 21, "pm@gmail.com"), ("Juana", "Suarez", 25, "js@gmail.com");
select * from usuarios;





