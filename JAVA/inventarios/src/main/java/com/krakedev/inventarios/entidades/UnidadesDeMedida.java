package com.krakedev.inventarios.entidades;

public class UnidadesDeMedida {
	private String codigo;
	private String descripccion;
	private CategoriasUDM codigoCatUDM;
	public UnidadesDeMedida() {
		
	}
	public UnidadesDeMedida(String codigo, String descripccion, CategoriasUDM codigoCatUDM) {
		super();
		this.codigo = codigo;
		this.descripccion = descripccion;
		this.codigoCatUDM = codigoCatUDM;
	}
	@Override
	public String toString() {
		return "UnidadesDeMedida [codigo=" + codigo + ", descripccion=" + descripccion + ", codigoCatUDM="
				+ codigoCatUDM + "]";
	}
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
	public CategoriasUDM getCodigoCatUDM() {
		return codigoCatUDM;
	}
	public void setCodigoCatUDM(CategoriasUDM codigoCatUDM) {
		this.codigoCatUDM = codigoCatUDM;
	}
	
}
