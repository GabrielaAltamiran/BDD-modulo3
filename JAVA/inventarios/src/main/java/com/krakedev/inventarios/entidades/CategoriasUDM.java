package com.krakedev.inventarios.entidades;

public class CategoriasUDM {
	private String codigo;
	private String nombre;
	
	public CategoriasUDM() {
		
	}

	public CategoriasUDM(String codigo, String nombre) {
		super();
		this.codigo = codigo;
		this.nombre = nombre;
	}

	@Override
	public String toString() {
		return "CategoriasUDM [codigo=" + codigo + ", nombre=" + nombre + "]";
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
}
