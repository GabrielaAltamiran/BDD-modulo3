package com.krakedev.inventarios.entidades;

public class tipoDocumento {
	private String codigo;
	private String descripccion;
	//--------------CONSTRUCTOR VACIO--------
	public tipoDocumento(){
		
	}
	//-----------CONSTRUCTOR CON PARAMETROS---------
	public tipoDocumento(String codigo, String descripccion) {
		super();
		this.codigo = codigo;
		this.descripccion = descripccion;
	}
	//--------------SOBREESCRIBIR--------
	@Override
	public String toString() {
		return "tipoDocumento [codigo=" + codigo + ", descripccion=" + descripccion + "]";
	}
	//--------------GET Y SET------------
	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getDescripccion() {
		return descripccion;
	}

	public void setDescripccion(String descripccion) {
		this.descripccion = descripccion;
	}
	
	
}
