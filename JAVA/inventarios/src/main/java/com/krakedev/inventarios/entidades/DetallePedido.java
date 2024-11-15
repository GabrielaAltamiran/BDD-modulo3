package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;

public class DetallePedido {
    private int codigo;
    private Pedido cabeceraPedido;
    private Producto productos;
    private int cantidadSolicitada;
    private BigDecimal subtotal;
    private int cantidadRecibida;

    public DetallePedido() {
        super();
    }

    public DetallePedido(int codigo, Pedido cabeceraPedido, Producto productos, int cantidadSolicitada,
            BigDecimal subtotal, int cantidadRecibida) {
        super();
        this.codigo = codigo;
        this.cabeceraPedido = cabeceraPedido;
        this.productos = productos;
        this.cantidadSolicitada = cantidadSolicitada;
        this.subtotal = subtotal;
        this.cantidadRecibida = cantidadRecibida;
    }

    @Override
    public String toString() {
        return "DetallePedido [codigo=" + codigo + ", cabeceraPedido=" + cabeceraPedido + ", productos=" + productos
                + ", cantidadSolicitada=" + cantidadSolicitada + ", subtotal=" + subtotal + ", cantidadRecibida="
                + cantidadRecibida + "]";
    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public Pedido getCabeceraPedido() {
        return cabeceraPedido;
    }

    public void setCabeceraPedido(Pedido cabeceraPedido) {
        this.cabeceraPedido = cabeceraPedido;
    }

    public Producto getProductos() {
        return productos;
    }

    public void setProductos(Producto productos) {
        this.productos = productos;
    }

    public int getCantidadSolicitada() {
        return cantidadSolicitada;
    }

    public void setCantidadSolicitada(int cantidadSolicitada) {
        this.cantidadSolicitada = cantidadSolicitada;
    }

    public BigDecimal getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(BigDecimal subtotal) {
        this.subtotal = subtotal;
    }

    public int getCantidadRecibida() {
        return cantidadRecibida;
    }

    public void setCantidadRecibida(int cantidadRecibida) {
        this.cantidadRecibida = cantidadRecibida;
    }
}
