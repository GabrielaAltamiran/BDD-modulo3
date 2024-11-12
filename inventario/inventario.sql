--------------ELIMINAR TABLAS----------------------
drop table if exists categorias;
drop table if exists categorias_unidadMedidas;
drop table if exists unidades_de_medidas;
drop table if exists producto;
drop table if exists tipo_documentos;
drop table if exists proveedores;
drop table if exists estado_pedidos;
drop table if exists cabecera_pedidos;
drop table if exists detalle_pedidos;
drop table if exists cabecera_ventas;
drop table if exists detalle_ventas;
drop table if exists historial_stock;
--------------CREAR TABLAS----------------------
create table categorias(
	codigo_cat serial not null,
	nombre varchar(100) not null,
	categoria_padre int,
	constraint categorias_pk primary key (codigo_cat),
	constraint contegorias_fk foreign key (categoria_padre) references categorias (codigo_cat)
);
-------------------------------------
insert into categorias (nombre,categoria_padre)
values('Materia Prima',null);
-------------------------------------
insert into categorias (nombre,categoria_padre)
values('Proteina',1);
-------------------------------------
insert into categorias (nombre,categoria_padre)
values('Salsas',1);
-------------------------------------
insert into categorias (nombre,categoria_padre)
values('Punto de venta',null);
-------------------------------------
insert into categorias (nombre,categoria_padre)
values('Bebidas',4);
-------------------------------------
insert into categorias (nombre,categoria_padre)
values('Con alcohol',5);
-------------------------------------
insert into categorias (nombre,categoria_padre)
values('Sin alcohol',5);
-------------------------------------
--select * from categorias
-------------------------------------
create table categorias_unidadMedidas(
	codigoUDM char(1) not null,
	nombre varchar(100) not null,
	constraint categorias_unidadMedidas_pk primary key (codigoUDM)	
);
-------------------------------------
insert into categorias_unidadMedidas (codigoUDM,nombre)
values('U','Unidades');
-------------------------------------
insert into categorias_unidadMedidas (codigoUDM,nombre)
values('V','Volumen');
-------------------------------------
insert into categorias_unidadMedidas (codigoUDM,nombre)
values('P','Peso');
-------------------------------------
--select * from categorias_unidadMedidas
------------------------------------
create table unidades_de_medidas(
	codigo_udm char(2) not null,
	descripccion varchar(100) not null,
	categoria_UDM char(1) not null,
	constraint unidades_de_medidas_pk primary key(codigo_udm),  
	constraint unidades_de_medidas_fk foreign key (categoria_UDM) references categorias_unidadMedidas (codigoUDM)
);
------------------------------------
insert into unidades_de_medidas(codigo_udm,descripccion,categoria_UDM)
values('ml','Mililitros','V');
------------------------------------
insert into unidades_de_medidas(codigo_udm,descripccion,categoria_UDM)
values('L','Litros','V');
------------------------------------
insert into unidades_de_medidas(codigo_udm,descripccion,categoria_UDM)
values('u','Unidad','U');
------------------------------------
insert into unidades_de_medidas(codigo_udm,descripccion,categoria_UDM)
values('d','Docena','U');
------------------------------------
insert into unidades_de_medidas(codigo_udm,descripccion,categoria_UDM)
values('g','Gramos','P');
------------------------------------
insert into unidades_de_medidas(codigo_udm,descripccion,categoria_UDM)
values('kg','Kilogramos','P');
------------------------------------
insert into unidades_de_medidas(codigo_udm,descripccion,categoria_UDM)
values('lb','Libras','P');
------------------------------------
--select * from unidades_de_medidas
------------------------------------
create table producto (
	codigo_pr char(1) not null,
	nombre_pr varchar(100) not null,
	udm char(2) not null,
	precio_venta money not null,
	iva boolean not null,
	coste money not null,
	codigo_categoria serial not null,
	stock int not null,
	constraint producto_pk primary key (codigo_pr),
	constraint producto_fk foreign key (codigo_categoria) references categorias(codigo_cat)
);
------------------------------------
insert into producto (codigo_pr,nombre_pr,udm,precio_venta,iva,coste,codigo_categoria,stock)
values('1','Coca Cola Pequeña','u',0.5804,true,0.3729,7,105);
------------------------------------
insert into producto (codigo_pr,nombre_pr,udm,precio_venta,iva,coste,codigo_categoria,stock)
values('2','Salsa De Tomate','kg',0.95,true,0.8736,3,0);
------------------------------------
insert into producto (codigo_pr,nombre_pr,udm,precio_venta,iva,coste,codigo_categoria,stock)
values('3','Mostaza','kg',0.89,true,0.8736,3,0);
------------------------------------
insert into producto (codigo_pr,nombre_pr,udm,precio_venta,iva,coste,codigo_categoria,stock)
values('4','Fuze tea','u',0.876,true,0.679,7,49);
------------------------------------
--select * from producto
------------------------------------
create table tipo_documentos(
	codigo char(1) not null,
	descripccion varchar(100),
	constraint tipo_documentos_pk primary key (codigo)
);
------------------------------------
insert into tipo_documentos (codigo,descripccion)
values ('R','RUC');
------------------------------------
insert into tipo_documentos (codigo,descripccion)
values ('C','Cedula');
------------------------------------
--select * from tipo_documentos
------------------------------------
create table proveedores (
	indentificacion varchar(12) not null,
	tipo_docu char(1) not null,
	nombre varchar(100) not null,
	telefono varchar(10) not null,
	correo varchar(100) not null,
	direccion varchar(100) not null,
	constraint proveedores_pk primary key (indentificacion),
	constraint proveedores_fk foreign key (tipo_docu) references tipo_documentos(codigo)
);
------------------------------------
insert into proveedores (indentificacion, tipo_docu, nombre, telefono, correo, direccion)
values ('85381254100', 'R', 'Karen Mendez', '3217708848', 'karenmendez3@gmail.com', 'Bogota');

------------------------------------
insert into proveedores (indentificacion, tipo_docu, nombre, telefono, correo, direccion)
values ('1755841002', 'C', 'Gabriela Altamirano', '0984654995', 'nietogabriela353@gmail.com', 'Sangolqui');



------------------------------------
select * from proveedores
------------------------------------
create table estado_pedidos(
	codigo char(1) not null,
	descripcion varchar(100),
	constraint estado_pedidos_pk primary key(codigo)
);
------------------------------------
insert into estado_pedidos (codigo,descripcion)
values ('R','Recibido');
------------------------------------
insert into estado_pedidos (codigo,descripcion)
values ('S','Solicitado');
------------------------------------
--select * from estado_pedidos
------------------------------------
create table cabecera_pedidos(
	numero char(1) not null,
	proveedor varchar(12) not null,
	fecha timestamp not null,
	estado char(1) not null,
	constraint cabecera_pedidos_pk primary key (numero),
	constraint cabecera_pedidos_fk foreign key (proveedor) references proveedores(indentificacion),
	constraint cabecera_pedidos_fk1 foreign key (estado) references estado_pedidos(codigo)	
);
------------------------------------
insert into cabecera_pedidos (numero,proveedor,fecha,estado)
values('1','85381254100','2024-07-29 10:41:05','R');
------------------------------------
insert into cabecera_pedidos (numero,proveedor,fecha,estado)
values('2','85381254100','2024-07-30 11:30:15','S');
------------------------------------
--select * from cabecera_pedidos
------------------------------------

create table detalle_pedidos(
	codigo serial not null,
	cabecera_pedido char(1),
	codigo_pro char(1),
	cantidad_solicitada int not null,
	subtotal decimal(10,2) not null,
	cantidad_recibida int not null,
	constraint detalle_pedidos_pk primary key (codigo),
	constraint detalle_pedidos_fk1 foreign key (cabecera_pedido) references cabecera_pedidos(numero), 
	constraint detalle_pedidos_fk2 foreign key (codigo_pro) references producto(codigo_pr)
);
------------------------------------
insert into detalle_pedidos(cabecera_pedido,codigo_pro,cantidad_solicitada,subtotal,cantidad_recibida)
values('1','1',100,37.29,100);
------------------------------------
insert into detalle_pedidos(cabecera_pedido,codigo_pro,cantidad_solicitada,subtotal,cantidad_recibida)
values('1','4',50,11.8,50);
------------------------------------
insert into detalle_pedidos(cabecera_pedido,codigo_pro,cantidad_solicitada,subtotal,cantidad_recibida)
values('2','1',10,3.73,10);
------------------------------------
--select * from detalle_pedidos
------------------------------------
create table cabecera_ventas(
	codigo char(1) not null,
	fecha timestamp not null,
	total_sin_iva money not null,
	iva decimal(10,2) not null,
	total money not null,
	constraint cabecera_ventas_pk primary key(codigo)
);
------------------------------------
insert into cabecera_ventas(codigo,fecha,total_sin_iva,iva,total)
values('1','2024-10-23 20:30:19',3.26,0.39,3.65);
------------------------------------
--select * from cabecera_ventas
------------------------------------
create table detalle_ventas(
	codigo serial not null,
	codigo_CV char(1) not null,
	codigo_pro char(1) not null,
	cantidad int not null,
	precio_venta money not null,
	subtotal decimal(10,2) not null,
	subtotal_iva decimal(10,2) not null,
	constraint detalle_ventas_pk primary key (codigo),
	constraint detalle_ventas_fk foreign key (codigo_CV) references cabecera_ventas (codigo)
);
------------------------------------
insert into  detalle_ventas(codigo_CV,codigo_pro,cantidad,precio_venta,subtotal,subtotal_iva)
values('1','1',5,0.58,2.9,3.25);
------------------------------------
insert into  detalle_ventas(codigo_CV,codigo_pro,cantidad,precio_venta,subtotal,subtotal_iva)
values('1','4',5,0.36,0.36,0.40);
------------------------------------
--select * from detalle_ventas
------------------------------------
create table historial_stock (
	codigo serial not null,
	fecha timestamp not null,
	codigo_pro char(1) not null,
	cantidad int not null,
	constraint historial_stock_pk primary key (codigo),
	constraint historial_stock_fk1 foreign key(codigo_pro) references producto(codigo_pr)
);
------------------------------------
insert into historial_stock(fecha,codigo_pro,cantidad)
values('2024-11-7 13:09:14','1',100);
------------------------------------
insert into historial_stock(fecha,codigo_pro,cantidad)
values('2024-11-7 13:09:14','4',50);
------------------------------------
insert into historial_stock(fecha,codigo_pro,cantidad)
values('2024-11-09 20:39:09','1',10);
------------------------------------
insert into historial_stock(fecha,codigo_pro,cantidad)
values('2024-11-09 21:19:54','1',-5);
------------------------------------
insert into historial_stock(fecha,codigo_pro,cantidad)
values('2024-11-09 21:39:09','4',-1)
------------------------------------
--select * from historial_stock
------------------------------------