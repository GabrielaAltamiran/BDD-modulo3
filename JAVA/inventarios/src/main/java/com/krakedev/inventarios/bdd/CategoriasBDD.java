package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


import com.krakedev.inventarios.entidades.Categorias;

import com.krakedev.inventarios.exception.Karakedevexception;
import com.krakedev.inventarios.utilis.conexionbdd;

public class CategoriasBDD {

	public void crearCategoria(Categorias categoria) throws Karakedevexception {
		Connection con = null;
		PreparedStatement ps = null;
		try {
			con = conexionbdd.obtenerConexion();
			ps = con.prepareStatement("INSERT INTO categorias( nombre, categoria_padre)VALUES ( ?, ?)");
			ps.setString(1, categoria.getNombre());
			ps.setInt(2, categoria.getCategoriaPadre().getCodigo());
			ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
			throw new Karakedevexception("Error al guardar, crear la categoria. detalle>>>>>>>>> ");
		} catch (Karakedevexception e) {
			e.printStackTrace();
			throw e;
		}

	}

	// ------------------------------ACTUALIZAR CATEGORIA------------------------------
	public void actualizar(Categorias categoria) throws Karakedevexception {
		Connection con = null;
		PreparedStatement psCat = null;

		try {
			con = conexionbdd.obtenerConexion();
			psCat = con.prepareStatement("UPDATE categorias SET nombre = ?, categoria_padre = ? WHERE codigo_cat = ?");
			psCat.setString(1, categoria.getNombre());
			psCat.setInt(2, categoria.getCategoriaPadre().getCodigo());
			psCat.setInt(3, categoria.getCodigo());
			psCat.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
			throw new Karakedevexception("Error al Actualizar, crear la categoria. detalle>>>>>>>>> ");
		} catch (Karakedevexception e) {
			e.printStackTrace();
			throw e;

		}
	}
	// ------------------------------RECUPERAR CATEGORIAS---------------------------
	public ArrayList<Categorias> buscar() throws Karakedevexception {
	    ArrayList<Categorias> categorias = new ArrayList<Categorias>();
	    Connection con = null;
	    PreparedStatement psCatR = null;
	    ResultSet rsCat = null;
	    Categorias categoria = null;
	    Categorias categoriaPadre = null;

	    try {
	        con = conexionbdd.obtenerConexion();
	        psCatR = con.prepareStatement("SELECT codigo_cat, nombre, categoria_padre FROM categorias");
	        rsCat = psCatR.executeQuery();
	        
	        while (rsCat.next()) {
	            int codigo = rsCat.getInt("codigo_cat");
	            String nombre = rsCat.getString("nombre");
	            Integer categoriaPadreCodigo = rsCat.getObject("categoria_padre", Integer.class);  // Usa getObject para manejar valores null
	            
	            categoria = new Categorias();
	            categoria.setCodigo(codigo);
	            categoria.setNombre(nombre);
	            
	            // Si categoria_padre es NULL en la base de datos, asignamos null a categoriaPadre
	            if (categoriaPadreCodigo != null) {
	                categoriaPadre = new Categorias();
	                categoriaPadre.setCodigo(categoriaPadreCodigo);
	                categoria.setCategoriaPadre(categoriaPadre);
	            } else {
	                categoria.setCategoriaPadre(null);  // Si no tiene categoría padre, la dejamos como null
	            }
	            
	            categorias.add(categoria);
	        }
	    } catch (SQLException e) {
	        e.printStackTrace();
	        throw new Karakedevexception("Error al consultar. Detalle: " + e.getMessage());
	    } catch (Karakedevexception e) {
	        e.printStackTrace();
	        throw e;
	    }
	    return categorias;
	}


}
