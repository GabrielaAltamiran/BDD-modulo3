package com.krakedev.inventarios.servicios;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.ProveedoresBDD;
import com.krakedev.inventarios.entidades.Pedido;
import com.krakedev.inventarios.entidades.Producto;
import com.krakedev.inventarios.entidades.Proveedor;
import com.krakedev.inventarios.exception.Karakedevexception;

@Path("Proveedores")

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

	@Path("insertarNuevoProveedor")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response insertarProv(Proveedor pro) {
		System.out.println("INSERTANDO PROVEEDOR>>>>>>>>>>>>>>>>>>>> " + pro);
		ProveedoresBDD proveedoresNuevo = new ProveedoresBDD();
		try {
			proveedoresNuevo.insertar(pro);
			return Response.ok().build();
		} catch (Karakedevexception e) {

			e.printStackTrace();
			return Response.serverError().build();
		}

	}
	// ------------BUCAR PRODUCTO---------

	@Path("buscarproducto/{subcadena}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarProducto(@PathParam("subcadena") String subcadena) {
		ProveedoresBDD pro = new ProveedoresBDD();
		ArrayList<Producto> productos = new ArrayList<Producto>();
		try {
			productos = pro.buscarProducto(subcadena);
			return Response.ok(productos).build();
		} catch (Karakedevexception e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	// -------------CREAR PRODUCTO--------

	@Path("crearproducto")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response crear(Producto producto) {
		System.out.println("Proveedor creado: " + producto);
		ProveedoresBDD pro = new ProveedoresBDD();
		try {
			pro.crearProducto(producto);
			return Response.ok().build();
		} catch (Karakedevexception e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}

	// ----------CREAR PEDIDO-----------
	@Path("crearpedido")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response crearPedido(Pedido cabeceraPedido) {
		System.out.println("Cabecera Pedido creada: " + cabeceraPedido);
		ProveedoresBDD pro = new ProveedoresBDD();
		try {
			pro.insertar(cabeceraPedido);
			return Response.ok().build();
		} catch (Karakedevexception e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}

	// -------------RECIBIR PEDIDO----------------
	@Path("recibirpedido")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response recibirPedido(Pedido pedido) {
		System.out.println("Cliente actualizado: " + pedido);
		ProveedoresBDD cli = new ProveedoresBDD();
		try {
			cli.recibirPedido(pedido);
			return Response.ok().build();
		} catch (Karakedevexception e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	//------------------BUSCAR PROVEEDOR----------

	@Path("buscarproveedor/{identificador}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarProveedor(@PathParam("identificador") String identificador) {
		ProveedoresBDD pro = new ProveedoresBDD();
		Proveedor proveedor = new Proveedor();
		try {
			proveedor = pro.buscarPorProveedor(identificador);
			return Response.ok(proveedor).build();
		} catch (Karakedevexception e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
}
