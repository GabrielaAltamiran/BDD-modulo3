package com.krakedev.inventarios.servicios;

import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.ProveedoresBDD;
import com.krakedev.inventarios.bdd.tipoDocumentobdd;
import com.krakedev.inventarios.entidades.Proveedor;
import com.krakedev.inventarios.entidades.tipoDocumento;
import com.krakedev.inventarios.exception.Karakedevexception;

@Path("proveedores")

public class ServicosProveedores {
	
	@Path("buscar/{subcadena}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscar(@PathParam("subcadena") String subcadena) {
		ProveedoresBDD pro = new ProveedoresBDD();
		ArrayList<Proveedor> provedor1 = null;
		try {
			provedor1 = pro.Buscar(subcadena);
			return Response.ok(provedor1).build();
		} catch (Karakedevexception e) {
			return Response.serverError().build();
		}
	}
	@Path("buscarTipoDocumento/{subcadena}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarTipoDocumento(@PathParam("subcadena") String subcadena) {
		tipoDocumentobdd documentoTipo = new tipoDocumentobdd();
		ArrayList<tipoDocumento> documento = null;
		try {
			documento = documentoTipo.BuscarTipoDocumento(subcadena);
			return Response.ok(documento).build();
		} catch (Karakedevexception e) {
			return Response.serverError().build();
		}
	}
	
}
