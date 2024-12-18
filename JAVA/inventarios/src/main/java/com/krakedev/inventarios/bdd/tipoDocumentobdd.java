package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.entidades.tipoDocumento;
import com.krakedev.inventarios.exception.Karakedevexception;
import com.krakedev.inventarios.utilis.conexionbdd;

public class tipoDocumentobdd {
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

//-------------------------RECUPERAR-----------------------------
	public ArrayList<tipoDocumento> recuperarTipoDocumento() throws Karakedevexception {
		ArrayList<tipoDocumento> tipoDocumentos = new ArrayList<tipoDocumento>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		tipoDocumento tipoDocu = null;

		try {
			con = conexionbdd.obtenerConexion();
			String query = "SELECT codigo, descripccion FROM tipo_documentos;";
			ps = con.prepareStatement(query);
			rs = ps.executeQuery();
			while (rs.next()) {
				String codigo = rs.getString("codigo");
				String descripccion = rs.getString("descripccion");
				tipoDocu = new tipoDocumento(codigo, descripccion);
				tipoDocumentos.add(tipoDocu);
			}
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

	// -------------------------INSERTAR-----------------------------
	public void insertarTipoDocumento(tipoDocumento tipoDocu) throws Karakedevexception {
		Connection con = null;
		PreparedStatement ps = null;

		try {
			con = conexionbdd.obtenerConexion();
			ps = con.prepareStatement("INSERT INTO tipo_documentos(codigo, descripccion)VALUES (?, ?)");
			ps.setString(1, tipoDocu.getCodigo());
			ps.setString(2, tipoDocu.getDescripccion());
			ps.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
			throw new Karakedevexception("Error al insertar Tipo De Documento. Detalle: " + e.getMessage());
		} catch (Karakedevexception e) {
			e.printStackTrace();
			throw e;

		}
	}

}
