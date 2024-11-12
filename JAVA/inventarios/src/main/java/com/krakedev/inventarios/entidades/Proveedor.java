package com.krakedev.inventarios.entidades;

public class Proveedor {
	private String indentificacion;
	private tipoDocumento tipoDocumento;
	private String nombre;
	private String telefono;
	private String correo;
	private String direccion;
	//--------------CONSTRUCTOR VACIO--------
	public Proveedor() {
		
	}
	@Override
	public String toString() {
		return "Proveedor [indentificacion=" + indentificacion + ", tipoDocumento=" + tipoDocumento + ", nombre="
				+ nombre + ", telefono=" + telefono + ", correo=" + correo + ", direccion=" + direccion + "]";
	}
	public Proveedor(String indentificacion, com.krakedev.inventarios.entidades.tipoDocumento tipoDocumento,
			String nombre, String telefono, String correo, String direccion) {
		super();
		this.indentificacion = indentificacion;
		this.tipoDocumento = tipoDocumento;
		this.nombre = nombre;
		this.telefono = telefono;
		this.correo = correo;
		this.direccion = direccion;
	}
	public String getIndentificacion() {
		return indentificacion;
	}
	public void setIndentificacion(String indentificacion) {
		this.indentificacion = indentificacion;
	}
	public tipoDocumento getTipoDocumento() {
		return tipoDocumento;
	}
	public void setTipoDocumento(tipoDocumento tipoDocumento) {
		this.tipoDocumento = tipoDocumento;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getTelefono() {
		return telefono;
	}
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	
	
}
