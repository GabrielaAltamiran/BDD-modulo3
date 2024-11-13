package com.krakedev.inventarios.entidades;

public class Categorias {
	private int codigo;
	private String nombre;
	private Categorias categoriaPadre ;
	
	public Categorias() {
		
	}

	public Categorias(int codigo, String nombre, Categorias categoriaPadre) {
		super();
		this.codigo = codigo;
		this.nombre = nombre;
		this.categoriaPadre = categoriaPadre;
	}

	@Override
	public String toString() {
		return "Categorias [codigo=" + codigo + ", nombre=" + nombre + ", categoriaPadre=" + categoriaPadre + "]";
	}

	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Categorias getCategoriaPadre() {
		return categoriaPadre;
	}

	public void setCategoriaPadre(Categorias categoriaPadre) {
		this.categoriaPadre = categoriaPadre;
	}
	
	

	
	
}
