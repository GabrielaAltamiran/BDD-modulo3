package com.krakedev.inventarios.bdd;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.entidades.Categorias;
import com.krakedev.inventarios.entidades.Producto;
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
            // Obtener la conexión
            con = conexionbdd.obtenerConexion();

            // Preparar la consulta SQL con el parámetro
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

            // Establecer el valor del parámetro
            ps.setString(1, "%" + subcadena.toUpperCase() + "%");

            // Ejecutar la consulta
            rs = ps.executeQuery();

            // Procesar los resultados
            while (rs.next()) {
                // Obtener los valores de las columnas
                String codigo = rs.getString("codigo_pr");  // Corregir nombre de columna
                String nombreProducto = rs.getString("nombre_producto");
                String nombreUnidadM = rs.getString("nombre_udm");
                String descripccionUDM = rs.getString("descripccion_UDM");
                BigDecimal precioVt = rs.getBigDecimal("precio_venta");
                boolean tieneIva = rs.getBoolean("iva");
                BigDecimal coste = rs.getBigDecimal("coste");
                int codigoCategorias = rs.getInt("nombre_categoria");  // Corregir nombre de columna
                int stock = rs.getInt("stock");

                // Crear los objetos correspondientes
                UnidadesDeMedida udm = new UnidadesDeMedida();
                udm.setCodigo(nombreUnidadM);
                udm.setDescripccion(descripccionUDM);
                
                Categorias categoria = new Categorias();
                categoria.setCodigo(codigoCategorias);  // Corregir tipo de dato si es necesario
                categoria.setNombre(rs.getString("nombre_categoria")); // Corregir nombre de columna
                
                // Crear el producto y asignar los valores
                Producto prod = new Producto();
                prod.setCodigoProducto(codigo);
                prod.setNombreProducto(nombreProducto);
                prod.setUDM(udm);
                prod.setPrecioVenta(precioVt);
                prod.setTieneIva(tieneIva);
                prod.setCoste(coste);
                prod.setCodigoCategoria(categoria);
                prod.setStock(stock);

                // Agregar el producto a la lista
                pro.add(prod);  // Corregir el nombre de la variable
            }
        } catch (Karakedevexception e) {
            e.printStackTrace();
            throw e;
        } catch (SQLException e) {
            e.printStackTrace();
            throw new Karakedevexception("Error al recuperar. Detalle: " + e.getMessage());
        } finally {
            // Cerrar recursos
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
}
