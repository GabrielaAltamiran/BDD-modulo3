package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;

public class DetalleVentas {
	private int codigo;
	private Ventas codigoCV;
	private Producto codigoP;
	private int cantidad;
	private BigDecimal precioVenta;
	private BigDecimal subtotal;
	private BigDecimal SubtotalIva;
	public DetalleVentas() {
		super();
	}
	public DetalleVentas(int codigo, Ventas codigoCV, Producto codigoP, int cantidad, BigDecimal precioVneta,
			BigDecimal subtotal, BigDecimal subtotalIva) {
		super();
		this.codigo = codigo;
		this.codigoCV = codigoCV;
		this.codigoP = codigoP;
		this.cantidad = cantidad;
		this.precioVenta = precioVneta;
		this.subtotal = subtotal;
		SubtotalIva = subtotalIva;
	}
	@Override
	public String toString() {
		return "detalleVentas [codigo=" + codigo + ", codigoCV=" + codigoCV + ", codigoP=" + codigoP + ", cantidad="
				+ cantidad + ", precioVneta=" + precioVenta + ", subtotal=" + subtotal + ", SubtotalIva=" + SubtotalIva
				+ "]";
	}
	public int getCodigo() {
		return codigo;
	}
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	public Ventas getCodigoCV() {
		return codigoCV;
	}
	public void setCodigoCV(Ventas codigoCV) {
		this.codigoCV = codigoCV;
	}
	public Producto getCodigoP() {
		return codigoP;
	}
	public void setCodigoP(Producto codigoP) {
		this.codigoP = codigoP;
	}
	public int getCantidad() {
		return cantidad;
	}
	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
	public BigDecimal getPrecioVneta() {
		return precioVenta;
	}
	public void setPrecioVneta(BigDecimal precioVneta) {
		this.precioVenta = precioVneta;
	}
	public BigDecimal getSubtotal() {
		return subtotal;
	}
	public void setSubtotal(BigDecimal subtotal) {
		this.subtotal = subtotal;
	}
	public BigDecimal getSubtotalIva() {
		return SubtotalIva;
	}
	public void setSubtotalIva(BigDecimal subtotalIva) {
		SubtotalIva = subtotalIva;
	}
	
}
