package com.krakedev.inventarios.servicios;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.PedidosBDD;
import com.krakedev.inventarios.entidades.Pedido;
import com.krakedev.inventarios.exception.Karakedevexception;

@Path("Pedidos")
public class ServicosPedidos {
	@Path("crearPedido")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response crear(Pedido pedidos) {
		PedidosBDD pedidobdd = new PedidosBDD();
		try {
			pedidobdd.insertar(pedidos);
			return Response.ok().build();
		} catch (Karakedevexception e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	@Path("recibir")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	
	public Response recibir(Pedido pedido) {
		System.out.println("Actualizando Pedido>>>>>>>>>>>>>>> "+pedido);
		PedidosBDD actualizar = new PedidosBDD();
		try {
			actualizar.actualizarPedido(pedido);
			return Response.ok().build();
		
		} catch (Karakedevexception e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
}
