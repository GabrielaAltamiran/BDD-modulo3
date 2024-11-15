package com.krakedev.inventarios.entidades;

public class EstadoPedidos {
	private String codifoEsatdoP;
	private String descripccionP;
	public EstadoPedidos() {
		
	}
	public EstadoPedidos(String codifoEsatdoP, String descripccionP) {
		super();
		this.codifoEsatdoP = codifoEsatdoP;
		this.descripccionP = descripccionP;
	}
	@Override
	public String toString() {
		return "EstadoPedidos [codifoEsatdoP=" + codifoEsatdoP + ", descripccionP=" + descripccionP + "]";
	}
	public String getCodifoEsatdoP() {
		return codifoEsatdoP;
	}
	public void setCodifoEsatdoP(String codifoEsatdoP) {
		this.codifoEsatdoP = codifoEsatdoP;
	}
	public String getDescripccionP() {
		return descripccionP;
	}
	public void setDescripccionP(String descripccionP) {
		this.descripccionP = descripccionP;
	}
	
}
