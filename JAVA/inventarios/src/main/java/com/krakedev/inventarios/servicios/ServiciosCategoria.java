package com.krakedev.inventarios.servicios;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.CategoriasBDD;
import com.krakedev.inventarios.entidades.Categorias;
import com.krakedev.inventarios.exception.Karakedevexception;

@Path("categorias")
public class ServiciosCategoria {
	@Path("crearCat")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response crearCat(Categorias categoria) {
		System.out.println("Categoria creada: " + categoria);
		CategoriasBDD categoriabdd = new CategoriasBDD();
		try {
			categoriabdd.crearCategoria(categoria);
			return Response.ok().build();
		} catch (Karakedevexception e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}

	@Path("actualizarCat")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response actualizarCat(Categorias categoria) {
		System.out.println("Categoria actualizada: " + categoria);
		CategoriasBDD categoriaAc = new CategoriasBDD();
		try {
			categoriaAc.actualizar(categoria);
			return Response.ok().build();
		} catch (Karakedevexception e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	@Path("buscarCat")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarCat() {
		CategoriasBDD cat = new CategoriasBDD();
		List<Categorias> categoriasBus = new ArrayList<Categorias>();
		try {
			categoriasBus = cat.buscar();
			return Response.ok(categoriasBus).build();
		} catch (Karakedevexception e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}

}
