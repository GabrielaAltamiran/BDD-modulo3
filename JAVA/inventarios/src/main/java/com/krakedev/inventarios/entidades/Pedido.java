package com.krakedev.inventarios.entidades;

import java.util.ArrayList;
import java.util.Date;

public class Pedido {
    private int codigo;
    private Proveedor proveedor;
    private Date fecha;
    private EstadoPedidos estado;
    private ArrayList<DetallePedido> detalles;

    public Pedido() {
        this.detalles = new ArrayList<>();
    }

    public Pedido(int codigo, Proveedor proveedor, Date fecha, EstadoPedidos estado) {
        this.codigo = codigo;
        this.proveedor = proveedor;
        this.fecha = fecha;
        this.estado = estado;
        this.detalles = new ArrayList<>();
    }

    @Override
    public String toString() {
        return "Pedido [codigo=" + codigo + ", proveedor=" + proveedor + ", fecha=" + fecha + ", estado=" + estado
                + ", detalles=" + detalles + "]";
    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        if (codigo < 0) {
            throw new IllegalArgumentException("El código no puede ser negativo");
        }
        this.codigo = codigo;
    }

    public Proveedor getProveedor() {
        return proveedor;
    }

    public void setProveedor(Proveedor proveedor) {
        this.proveedor = proveedor;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public EstadoPedidos getEstado() {
        return estado;
    }

    public void setEstado(EstadoPedidos estado) {
        if (estado == null) {
            throw new IllegalArgumentException("El estado no puede ser null");
        }
        this.estado = estado;
    }

    public ArrayList<DetallePedido> getDetalles() {
        return detalles;
    }

    public void setDetalles(ArrayList<DetallePedido> detalles) {
        if (detalles == null) {
            throw new IllegalArgumentException("La lista de detalles no puede ser null");
        }
        this.detalles = detalles;
    }
}
