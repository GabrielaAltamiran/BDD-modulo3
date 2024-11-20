package com.krakedev.inventarios.servicios;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;

import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import com.krakedev.inventarios.bdd.VentasBDD;
import com.krakedev.inventarios.entidades.Ventas;
import com.krakedev.inventarios.exception.Karakedevexception;

@Path("ventas")
public class ServiciosVentas {
	@Path("guardar")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response guardar(Ventas venta) {
		VentasBDD crear = new VentasBDD();

		try {
			crear.insertar(venta);
			return Response.ok().build();
		} catch (Karakedevexception e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
}
