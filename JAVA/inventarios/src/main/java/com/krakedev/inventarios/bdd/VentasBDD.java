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

import com.krakedev.inventarios.entidades.DetalleVentas;
import com.krakedev.inventarios.entidades.Ventas;
import com.krakedev.inventarios.exception.Karakedevexception;
import com.krakedev.inventarios.utilis.conexionbdd;

public class VentasBDD {

	public void insertar(Ventas venta) throws Karakedevexception {
		Connection con = null;
		PreparedStatement ps = null;
		PreparedStatement psDetalleCV = null;
		PreparedStatement psCab = null;
		PreparedStatement psHist = null;
		ResultSet rsCodigoCV = null;
		Date fechaActual = new Date();
		int codigoCabeceraVentas = 0;
		Timestamp fechaHoraActual = new Timestamp(fechaActual.getTime());
		BigDecimal totalSinIva = new BigDecimal("0");
		BigDecimal totalIva = new BigDecimal("0");
		

		try {
			con = conexionbdd.obtenerConexion();
			ps = con.prepareStatement(
					"INSERT INTO cabecera_ventas(fecha, total_sin_iva, iva, total) VALUES (?, ?, ?, ?)",
					Statement.RETURN_GENERATED_KEYS);
			ps.setTimestamp(1, fechaHoraActual);

			BigDecimal nulo = new BigDecimal(0);
			ps.setBigDecimal(2, nulo);
			ps.setBigDecimal(3, nulo);
			ps.setBigDecimal(4, nulo);
			ps.executeUpdate();
			// RECUPERAR EL CODIGO AUTOGENERADO
			rsCodigoCV = ps.getGeneratedKeys();
			if (rsCodigoCV.next()) {
				codigoCabeceraVentas = rsCodigoCV.getInt(1);
			}
			// ARRAYLIST PARA DETALLE VENTAS
			ArrayList<DetalleVentas> detallesVentas = venta.getDetalleVenta();
			DetalleVentas detalle;
			for (int i = 0; i < detallesVentas.size(); i++) {
				detalle = detallesVentas.get(i);

				psDetalleCV = con.prepareStatement(
						"INSERT INTO detalle_ventas(codigo_cv, codigo_pro, cantidad, precio_venta, subtotal, subtotal_iva) VALUES (?, ?, ?, ?, ?, ?)");
				psDetalleCV.setInt(1, codigoCabeceraVentas);
				psDetalleCV.setString(2, detalle.getCodigoP().getCodigoProducto());
				psDetalleCV.setInt(3, detalle.getCantidad());
				psDetalleCV.setBigDecimal(4, detalle.getCodigoP().getPrecioVenta());
				BigDecimal precioV = detalle.getCodigoP().getPrecioVenta();
				BigDecimal cantidad = new BigDecimal(detalle.getCantidad());
				BigDecimal subtotal = precioV.multiply(cantidad);
				totalSinIva = totalSinIva.add(subtotal);
				psDetalleCV.setBigDecimal(5, subtotal);
				// CALCULAR EL IVA
				BigDecimal iva = new BigDecimal(1.12 / 100);
				BigDecimal subtotalConIva = ((precioV.multiply(iva)).add(precioV).multiply(cantidad));
				// VALIDAR QUE SOLO SI TIENE IVA SE SUMA EL IVA AL SUBTOTAL
				if (detalle.getCodigoP().isTieneIva() == true) {
					psDetalleCV.setBigDecimal(6, subtotalConIva);
					totalIva = totalIva.add(subtotalConIva.subtract(subtotal));
				} else {
					psDetalleCV.setBigDecimal(6, subtotal);
				}
				psDetalleCV.executeUpdate();
				// HISTORIAL INSETAR LA ACTUALIZACION
				psHist = con.prepareStatement(
						"INSERT INTO historial_stock(fecha, referencia, codigo_pro, cantidad) VALUES (?, ?, ?, ?)");
				psHist.setTimestamp(1, fechaHoraActual);
				psHist.setString(2, "VENTA " + codigoCabeceraVentas);
				psHist.setString(3, detalle.getCodigoP().getCodigoProducto());
				psHist.setInt(4, detalle.getCantidad() * (-1));
				psHist.executeUpdate();
			}
			// ACTUALIZAR CABECERA VENTAS
			psCab = con.prepareStatement("UPDATE cabecera_ventas SET total_sin_iva=?, iva=?, total=? WHERE codigo=?",
					Statement.RETURN_GENERATED_KEYS);
			psCab.setBigDecimal(1, totalSinIva);
			psCab.setBigDecimal(2, totalIva);
			psCab.setBigDecimal(3, totalSinIva.add(totalIva));
			psCab.setInt(4, codigoCabeceraVentas);
			psCab.executeUpdate();

		} catch (Karakedevexception e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new Karakedevexception("Error al actualizar ventas. Detalle>>>>>>>>>>>> " + e.getMessage());
		} finally {
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}
}
