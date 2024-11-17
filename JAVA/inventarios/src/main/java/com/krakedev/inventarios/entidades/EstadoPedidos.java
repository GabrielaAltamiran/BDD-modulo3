package com.krakedev.inventarios.entidades;

public class EstadoPedidos {
    private String codigoEstadoP;
    private String descripcionP;

    public EstadoPedidos() {
    }

    public EstadoPedidos(String codigoEstadoP, String descripcionP) {
        this.codigoEstadoP = codigoEstadoP;
        this.descripcionP = descripcionP;
    }

    @Override
    public String toString() {
        return "EstadoPedidos [codigoEstadoP=" + codigoEstadoP + ", descripcionP=" + descripcionP + "]";
    }

    public String getCodigoEstadoP() {
        return codigoEstadoP;
    }

    public void setCodigoEstadoP(String codigoEstadoP) {
        this.codigoEstadoP = codigoEstadoP;
    }

    public String getDescripcionP() {
        return descripcionP;
    }

    public void setDescripcionP(String descripcionP) {
        this.descripcionP = descripcionP;
    }
}
