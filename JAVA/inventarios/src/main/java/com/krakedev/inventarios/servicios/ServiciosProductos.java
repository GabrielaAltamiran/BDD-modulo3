package com.krakedev.inventarios.servicios;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.ProductosBDD;
import com.krakedev.inventarios.entidades.Producto;
import com.krakedev.inventarios.exception.Karakedevexception;

@Path("Productos")
public class ServiciosProductos {
	@Path("recuperarProducto/{subcadena}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response recuperarProducto(@PathParam("subcadena") String Subcadena) {
		ProductosBDD producto = new ProductosBDD();
		ArrayList<Producto> prod = null;
		try {
			prod = producto.Recuperar(Subcadena);
			return Response.ok(prod).build();

		} catch (Karakedevexception e) {
			e.printStackTrace();
			return Response.serverError().build();
		}

	}

	@Path("crearProducto")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)

	public Response crearProducto(Producto pro) {
		System.out.println("CREANDO PRODUCTO>>>>>>>>>>>>>>>>>> " + pro);
		ProductosBDD crearProducto = new ProductosBDD();
		try {
			crearProducto.crearProducto(pro);
			return Response.ok().build();
		} catch (Karakedevexception e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
}
