create table productos 
(
    id int not null auto_increment,
    nombre varchar(60) not null,
    unidades int unsigned not null,
    precio_Por_Unidad float not null,
    fecha_De_Registro datetime not null default current_timestamp,
    primary key (id)
);