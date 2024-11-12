package com.krakedev.inventarios.entidades;

public class Proveedor {
	private String identificacion;
	private String tipoDodumento;
	private String nombre;
	private String telefono;
	private String correo;
	private String direccion;
	//--------------CONSTRUCTOR VACIO--------
	public Proveedor() {
		
	}
	//--------------SOBREESCRIBIR--------
	@Override
	public String toString() {
		return "Proveedor [identificacion=" + identificacion + ", tipoDodumento=" + tipoDodumento + ", nombre=" + nombre
				+ ", telefono=" + telefono + ", correo=" + correo + ", direccion=" + direccion + "]";
	}

	//-----------CONSTRUCTOR CON PARAMETROS---------
	public Proveedor(String identificacion, String tipoDodumento, String nombre, String telefono, String correo,
			String direccion) {
		super();
		this.identificacion = identificacion;
		this.tipoDodumento = tipoDodumento;
		this.nombre = nombre;
		this.telefono = telefono;
		this.correo = correo;
		this.direccion = direccion;
	}
	//--------------GET Y SET------------
	public String getIdentificacion() {
		return identificacion;
	}
	public void setIdentificacion(String identificacion) {
		this.identificacion = identificacion;
	}
	public String getTipoDodumento() {
		return tipoDodumento;
	}
	public void setTipoDodumento(String tipoDodumento) {
		this.tipoDodumento = tipoDodumento;
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
