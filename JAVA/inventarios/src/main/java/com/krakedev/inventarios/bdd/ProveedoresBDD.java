package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.entidades.Proveedor;
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
			ps = con.prepareStatement("SELECT indentificacion, tipo_docu, nombre, telefono, correo, direccion "
					+ "FROM proveedores " + "WHERE upper(nombre) LIKE ?");
			ps.setString(1, "%" + subcadena.toUpperCase() + "%");
			rs = ps.executeQuery();
			while (rs.next()) {
				String indentificacion = rs.getString("indentificacion");
				String tipoDocumento = rs.getString("tipo_docu");
				String nombre = rs.getString("nombre");
				String telefono = rs.getString("telefono");
				String correo = rs.getString("correo");
				String direccion = rs.getString("direccion");
				Proveedor1 = new Proveedor(indentificacion, tipoDocumento, nombre, telefono, correo, direccion);
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

	public ArrayList<tipoDocumento> BuscarTipoDocumento(String subcadena) throws Karakedevexception {
		ArrayList<tipoDocumento> tipoDocumentos = new ArrayList<tipoDocumento>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		tipoDocumento tipoDocu = null;
		try {
			con = conexionbdd.obtenerConexion();
			ps = con.prepareStatement(
					"SELECT codigo, descripccion from tipo_documentos where upper(descripccion) like ?");
			ps.setString(1, "%" + subcadena.toUpperCase() + "%");
			rs = ps.executeQuery();
			while (rs.next()) {
				String codigo = rs.getString("codigo");
				String descripccion = rs.getString("descripccion");
				tipoDocu = new tipoDocumento(codigo, descripccion);
				tipoDocumentos.add(tipoDocu);
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

		return tipoDocumentos;
	}
}
