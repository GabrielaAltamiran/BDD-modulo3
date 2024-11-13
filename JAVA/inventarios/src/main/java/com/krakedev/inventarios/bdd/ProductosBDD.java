package com.krakedev.inventarios.bdd;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.entidades.Categorias;
import com.krakedev.inventarios.entidades.Producto;
import com.krakedev.inventarios.entidades.Proveedor;
import com.krakedev.inventarios.entidades.UnidadesDeMedida;
import com.krakedev.inventarios.exception.Karakedevexception;
import com.krakedev.inventarios.utilis.conexionbdd;

public class ProductosBDD {
    public ArrayList<Producto> Recuperar(String subcadena) throws Karakedevexception {
        ArrayList<Producto> pro = new ArrayList<Producto>();
        Connection con = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        
        try {
            con = conexionbdd.obtenerConexion();
            ps = con.prepareStatement(
                "SELECT prov.codigo_pr, prov.nombre_pr AS nombre_producto, " +
                "udm.codigo_udm AS nombre_udm, udm.descripccion AS descripccion_UDM, " +
                "CAST(prov.precio_venta AS DECIMAL(6,2)) AS precio_venta, prov.iva, " +
                "CAST(prov.coste AS DECIMAL(5,4)) AS coste, prov.codigo_categoria, " +
                "prov.codigo_categoria AS nombre_categoria, prov.stock " +
                "FROM producto prov, unidades_de_medidas udm, categorias cat " +
                "WHERE prov.udm = udm.codigo_udm " +
                "AND prov.codigo_categoria = cat.codigo_cat " +
                "AND UPPER(prov.nombre_pr) LIKE ?"
            );

            ps.setString(1, "%" + subcadena.toUpperCase() + "%");

            rs = ps.executeQuery();
            while (rs.next()) {
                String codigo = rs.getString("codigo_pr");  
                String nombreProducto = rs.getString("nombre_producto");
                String nombreUnidadM = rs.getString("nombre_udm");
                String descripccionUDM = rs.getString("descripccion_UDM");
                BigDecimal precioVt = rs.getBigDecimal("precio_venta");
                boolean tieneIva = rs.getBoolean("iva");
                BigDecimal coste = rs.getBigDecimal("coste");
                int codigoCategorias = rs.getInt("nombre_categoria");  
                int stock = rs.getInt("stock");

                
                UnidadesDeMedida udm = new UnidadesDeMedida();
                udm.setCodigo(nombreUnidadM);
                udm.setDescripccion(descripccionUDM);
                
                Categorias categoria = new Categorias();
                categoria.setCodigo(codigoCategorias);  
                categoria.setNombre(rs.getString("nombre_categoria"));
                
              
                Producto prod = new Producto();
                prod.setCodigoProducto(codigo);
                prod.setNombreProducto(nombreProducto);
                prod.setUDM(udm);
                prod.setPrecioVenta(precioVt);
                prod.setTieneIva(tieneIva);
                prod.setCoste(coste);
                prod.setCodigoCategoria(categoria);
                prod.setStock(stock);

                
                pro.add(prod);  
            }
        } catch (Karakedevexception e) {
            e.printStackTrace();
            throw e;
        } catch (SQLException e) {
            e.printStackTrace();
            throw new Karakedevexception("Error al recuperar. Detalle: " + e.getMessage());
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
                if (ps != null) {
                    ps.close();
                }
                if (con != null) {
                    con.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return pro;
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
	
    
}
