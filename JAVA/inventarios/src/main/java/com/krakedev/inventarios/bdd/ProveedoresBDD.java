package com.krakedev.inventarios.bdd;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;

import com.krakedev.inventarios.entidades.Categorias;
import com.krakedev.inventarios.entidades.CategoriasUDM;
import com.krakedev.inventarios.entidades.DetallePedido;
import com.krakedev.inventarios.entidades.Pedido;
import com.krakedev.inventarios.entidades.Producto;
import com.krakedev.inventarios.entidades.Proveedor;
import com.krakedev.inventarios.entidades.UnidadesDeMedida;
import com.krakedev.inventarios.entidades.tipoDocumento;
import com.krakedev.inventarios.exception.Karakedevexception;
import com.krakedev.inventarios.utilis.conexionbdd;

public class ProveedoresBDD {
	public ArrayList<Proveedor> Buscar(String subcadena) throws Karakedevexception {
		ArrayList<Proveedor> Proveedores = new ArrayList<Proveedor>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		Proveedor Proveedor1 = null;
		try {
			con = conexionbdd.obtenerConexion();
			ps = con.prepareStatement(
					"SELECT prov.indentificacion, prov.tipo_docu,td.descripccion, prov.nombre, prov.telefono, prov.correo, prov.direccion "
							+ "FROM proveedores prov, tipo_documentos td " + "where prov.tipo_docu= td.codigo "
							+ "and upper(nombre) like ?");
			ps.setString(1, "%" + subcadena.toUpperCase() + "%");
			rs = ps.executeQuery();
			while (rs.next()) {
				String indentificacion = rs.getString("indentificacion");
				String tipoDocumento = rs.getString("tipo_docu");
				String descripcionTD = rs.getString("descripccion");
				String nombre = rs.getString("nombre");
				String telefono = rs.getString("telefono");
				String correo = rs.getString("correo");
				String direccion = rs.getString("direccion");
				tipoDocumento td = new tipoDocumento(tipoDocumento, descripcionTD);
				Proveedor1 = new Proveedor(indentificacion, td, nombre, telefono, correo, direccion);
				Proveedores.add(Proveedor1);
			}
		} catch (Karakedevexception e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new Karakedevexception("Error al consultar. Detalle: " + e.getMessage());
		} finally {
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}

		return Proveedores;
	}

	public void insertar(Proveedor prov) throws Karakedevexception {
		Connection con = null;
		PreparedStatement ps = null;
		try {
			con = conexionbdd.obtenerConexion();
			ps = con.prepareStatement(
					"INSERT INTO proveedores (indentificacion, tipo_docu, nombre, telefono, correo, direccion) "
							+ "VALUES (?, ?, ?, ?, ?, ?)");
			ps.setString(1, prov.getIndentificacion());
			ps.setString(2, prov.getTipoDocumento().getCodigo());
			ps.setString(3, prov.getNombre());
			ps.setString(4, prov.getTelefono());
			ps.setString(5, prov.getCorreo());
			ps.setString(6, prov.getDireccion());
			ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
			throw new Karakedevexception("Error al insertar proveedor. Detalle: " + e.getMessage());
		} catch (Karakedevexception e) {
			throw e;
		} finally {
			try {
				if (ps != null)
					ps.close();
				if (con != null)
					con.close();
			} catch (SQLException e) {
				throw new Karakedevexception("Error al cerrar los recursos. Detalle: " + e.getMessage());
			}
		}
	}

	public ArrayList<Producto> buscarProducto(String subcadena) throws Karakedevexception {
		ArrayList<Producto> productos = new ArrayList<Producto>();
		Connection con = null;
		PreparedStatement psBuscarPro = null;
		ResultSet rsBuscarPro = null;
		Producto producto;
		Categorias categoria;
		UnidadesDeMedida udm;
		

		try {
			con = conexionbdd.obtenerConexion();
			psBuscarPro = con.prepareStatement(
					"SELECT prov.codigo_pr, prov.nombre_pr AS nombre_producto, udm.codigo_udm AS nombre_udm, udm.descripccion AS descripccion_UDM, "
							+ "CAST(prov.precio_venta AS DECIMAL(6,2)) AS precio_venta, prov.iva, "
							+ "CAST(prov.coste AS DECIMAL(5,4)) AS coste, prov.codigo_categoria, "
							+ "prov.codigo_categoria AS nombre_categoria, prov.stock "
							+ "FROM producto prov, unidades_de_medidas udm, categorias cat "
							+ "WHERE prov.udm = udm.codigo_udm " + "AND prov.codigo_categoria = cat.codigo_cat "
							+ "AND UPPER(prov.nombre_pr) LIKE ?");
			psBuscarPro.setString(1, "%" + subcadena.toUpperCase() + "%");
			rsBuscarPro = psBuscarPro.executeQuery();
			while (rsBuscarPro.next()) {
                String codigo = rsBuscarPro.getString("codigo_pr");  
                String nombreProducto = rsBuscarPro.getString("nombre_producto");
                String nombreUnidadM = rsBuscarPro.getString("nombre_udm");
                String descripccionUDM = rsBuscarPro.getString("descripccion_UDM");
                BigDecimal precioVt = rsBuscarPro.getBigDecimal("precio_venta");
                boolean tieneIva = rsBuscarPro.getBoolean("iva");
                BigDecimal coste = rsBuscarPro.getBigDecimal("coste");
                int codigoCategorias = rsBuscarPro.getInt("nombre_categoria");  
                int stock = rsBuscarPro.getInt("stock");

                
                udm = new UnidadesDeMedida();
                udm.setCodigo(nombreUnidadM);
                udm.setDescripccion(descripccionUDM);
                
                categoria = new Categorias();
                categoria.setCodigo(codigoCategorias);  
                categoria.setNombre(rsBuscarPro.getString("nombre_categoria"));
                
              
                producto= new Producto();
                producto.setCodigoProducto(codigo);
                producto.setNombreProducto(nombreProducto);
                producto.setUDM(udm);
                producto.setPrecioVenta(precioVt);
                producto.setTieneIva(tieneIva);
                producto.setCoste(coste);
                producto.setCodigoCategoria(categoria);
                producto.setStock(stock);

                
                productos.add(producto);  
            }
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new Karakedevexception("Error al buscar Producto. Detalle>>>>>>>>");
		} catch (Karakedevexception e) {
			e.printStackTrace();
			throw e;
		}
		return productos;

	}
	public void crearProducto(Producto prod) throws Karakedevexception {
	    Connection con = null;
	    PreparedStatement ps = null;
	    try {
	        con = conexionbdd.obtenerConexion();
	        ps = con.prepareStatement(
	            "INSERT INTO producto("
	            + "	codigo_pr, nombre_pr, udm, precio_venta, iva, coste, codigo_categoria, stock) "
	            + "	VALUES (?, ?, ?, ?, ?, ?, ?, ?);"
	        );
	        ps.setString(1, prod.getCodigoProducto());
	        ps.setString(2, prod.getNombreProducto());
	        ps.setString(3, prod.getUDM().getCodigo());
	        ps.setBigDecimal(4, prod.getPrecioVenta());
	        ps.setBoolean(5, true);
	        ps.setBigDecimal(6, prod.getCoste());
	        ps.setInt(7, prod.getCodigoCategoria().getCodigo());
	        ps.setInt(8, prod.getStock());
	        
	        ps.executeUpdate();
	    } catch (SQLException e) {
	        e.printStackTrace();
	        throw new Karakedevexception("Error al crear Producto. Detalle: " + e.getMessage());
	    } catch (Karakedevexception e) {
	        throw e;
	    } finally {
	        try {
	            if (ps != null) ps.close();
	            if (con != null) con.close();
	        } catch (SQLException e) {
	        	throw new Karakedevexception("Error al crear Producto. Detalle: " + e.getMessage());
	        }
	    }
	}
	public void insertar(Pedido pedido) throws Karakedevexception {
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rsclave = null;
		Date fechaActual = new Date();
		PreparedStatement psDet = null;
		int codigoCabecera = 0;
		java.sql.Date fechaSql = new java.sql.Date(fechaActual.getTime());

		try {
			con = conexionbdd.obtenerConexion();
			ps = con.prepareStatement("insert into cabecera_pedidos (proveedor, fecha, estado) values(?, ?, ?);",
					Statement.RETURN_GENERATED_KEYS);
			ps.setString(1, pedido.getProveedor().getIndentificacion());
			ps.setDate(2, fechaSql);
			ps.setString(3, "S");

			ps.executeUpdate();

			rsclave = ps.getGeneratedKeys();
			if (rsclave.next()) {
				codigoCabecera = rsclave.getInt(1);
			}
			ArrayList<DetallePedido> detallesPediddos = pedido.getDetalles();
			DetallePedido det;
			for (int i = 0; i < detallesPediddos.size(); i++) {
				det = detallesPediddos.get(i);
				psDet = con.prepareStatement("INSERT INTO detalle_pedidos"
						+ "	( cabecera_pedido, codigo_pro, cantidad_solicitada, subtotal, cantidad_recibida)"
						+ "	VALUES ( ?, ?, ?, ?, ?);");
				psDet.setInt(1, codigoCabecera);
				psDet.setString(2, det.getProductos().getCodigoProducto());
				psDet.setInt(3, det.getCantidadSolicitada());
				psDet.setInt(5, 0); // NO ES NECESARIO QUE LLEGUE LA ANTIDAD RECIBIDA
				BigDecimal pv = det.getProductos().getPrecioVenta();
				BigDecimal cantidad = new BigDecimal(det.getCantidadSolicitada());
				BigDecimal total = pv.multiply(cantidad);
				psDet.setBigDecimal(4, total);
				psDet.executeUpdate();

			}

		} catch (Karakedevexception e) {
			e.printStackTrace();
			throw e;

		} catch (SQLException e) {
			e.printStackTrace();
			throw new Karakedevexception("Error al insertar pedido. Detalle: " + e.getMessage());

		} finally {
			try {
				if (rsclave != null)
					rsclave.close();
				if (ps != null)
					ps.close();
				if (con != null)
					con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	public void recibirPedido(Pedido pedido) throws Karakedevexception {
		Connection con = null;
		PreparedStatement psCabecera = null;
		PreparedStatement psDetalle = null;
		PreparedStatement psHistorial = null;
		Date fechaActual = new Date();
		Timestamp fechaHoraActual = new Timestamp(fechaActual.getTime());

		try {
			con = conexionbdd.obtenerConexion();
			psCabecera = con.prepareStatement("update cabecera_pedidos set estado=? where numero=? ",
					Statement.RETURN_GENERATED_KEYS);
			psCabecera.setString(1, "R");
			psCabecera.setInt(2, pedido.getCodigo());
			
			psCabecera.executeUpdate();
			// ACTUALIZAR CANTIDAD RECIBIDA Y SUBTOTAL DEL DETALLE
			ArrayList<DetallePedido> detallesPedidos = pedido.getDetalles();

			for (int i = 0; i < detallesPedidos.size(); i++) {
				DetallePedido detalle = detallesPedidos.get(i);
				psDetalle = con.prepareStatement(
						"UPDATE detalle_pedidos SET subtotal = ?, cantidad_recibida = ? WHERE codigo = ?",
						Statement.RETURN_GENERATED_KEYS);
				BigDecimal precioV = detalle.getProductos().getPrecioVenta();
				BigDecimal subtotal = precioV.multiply(new BigDecimal(detalle.getCantidadRecibida()));
				psDetalle.setBigDecimal(1, subtotal);
				psDetalle.setInt(2, detalle.getCantidadRecibida());
				psDetalle.setInt(3, Integer.parseInt(detalle.getProductos().getCodigoProducto()));
				psDetalle.executeUpdate();
				
				psHistorial = con.prepareStatement(
						"INSERT INTO public.historial_stock(fecha, referencia, codigo_pro, cantidad) VALUES (?, ?, ?, ?)");
				psHistorial.setTimestamp(1, fechaHoraActual);
				psHistorial.setString(2, "PEDIDO " + pedido.getCodigo());
				psHistorial.setString(3, detalle.getProductos().getCodigoProducto());
				psHistorial.setInt(4, detalle.getCantidadRecibida());
				psHistorial.executeUpdate();

				// GUARDA EL HISTORIAL DE STOCK
				generarHistorialStock(detalle);
				
			}

		} catch (SQLException e) {
			e.printStackTrace();
			throw new Karakedevexception("Error al actualizar pedido. Detalle: " + e.getMessage());
		} finally {
			try {
				if (psCabecera != null)
					psCabecera.close();
				if (psDetalle != null)
					psDetalle.close();
				if (con != null)
					con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	private void generarHistorialStock(DetallePedido detallePedidos) throws Karakedevexception {
		Connection con = null;
		PreparedStatement psHistorial = null;
		Date fechaActual = new Date();
		Timestamp fechaHoraActual = new Timestamp(fechaActual.getTime());
		try {
			con = conexionbdd.obtenerConexion();
			psHistorial = con.prepareStatement(
					"INSERT INTO public.historial_stock(fecha, referencia, codigo_pro, cantidad) VALUES (?, ?, ?, ?)");
			psHistorial.setTimestamp(1, fechaHoraActual);
			psHistorial.setString(2, "PEDIDO " + detallePedidos.getCodigo());
			psHistorial.setString(3, detallePedidos.getProductos().getCodigoProducto());
			psHistorial.setInt(4, detallePedidos.getCantidadRecibida());
			psHistorial.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
			throw new Karakedevexception("Error al guardar el historial de stock");
			
		} catch (Karakedevexception e) {
			e.printStackTrace();
			throw e;
		}
		
	}
	public Proveedor buscarPorProveedor(String identificadorProveedor) throws Karakedevexception {
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		Proveedor proveedor = null;
		tipoDocumento tipoDocumento = new tipoDocumento();
		
		try {
			con = conexionbdd.obtenerConexion();
			ps = con.prepareStatement("SELECT prov.indentificacion, prov.tipo_docu, prov.nombre, prov.telefono,prov.correo, prov.direccion\r\n"
					+ "	FROM proveedores as prov where prov.indentificacion = ?");
			ps.setString(1, identificadorProveedor);
			rs = ps.executeQuery();
			while (rs.next()) {
				String identificador = rs.getString("indentificacion");
				tipoDocumento.setCodigo(rs.getString("tipo_docu"));
				String nombre = rs.getString("nombre");
				String telefono = rs.getString("telefono");
				String correo = rs.getString("correo");
				String direccion = rs.getString("direccion");
				proveedor = new Proveedor();
				proveedor.setIndentificacion(identificador);
				proveedor.setTipoDocumento(tipoDocumento);
				proveedor.setNombre(nombre);
				proveedor.setTelefono(telefono);
				proveedor.setCorreo(correo);
				proveedor.setDireccion(direccion);
			}
		} catch (SQLException e) {
			e.printStackTrace();
			throw new Karakedevexception("Error al consultar el proveedor: " + e.getMessage());
			
		} catch (Karakedevexception e) {
			e.printStackTrace();
			throw e;
		}
		return proveedor;
	}	
	

}
