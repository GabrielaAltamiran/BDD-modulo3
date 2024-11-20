package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;

public class Producto {
	private String codigoProducto;
	private String nombreProducto;
	private UnidadesDeMedida UDM;
	private BigDecimal precioVenta;
	private boolean tieneIva;
	private BigDecimal coste;
	private Categorias codigoCategoria;
	private int stock;
	public Producto() {
		
	}
	public Producto(String codigoProducto, String nombreProducto, UnidadesDeMedida uDM, BigDecimal precioVenta,
			boolean tieneIva, BigDecimal coste, Categorias codigoCategoria, int stock) {
		super();
		this.codigoProducto = codigoProducto;
		this.nombreProducto = nombreProducto;
		UDM = uDM;
		this.precioVenta = precioVenta;
		this.tieneIva = tieneIva;
		this.coste = coste;
		this.codigoCategoria = codigoCategoria;
		this.stock = stock;
	}
	@Override
	public String toString() {
		return "Producto [codigoProducto=" + codigoProducto + ", nombreProducto=" + nombreProducto + ", UDM=" + UDM
				+ ", precioVenta=" + precioVenta + ", tieneIva=" + tieneIva + ", coste=" + coste + ", codigoCategoria="
				+ codigoCategoria + ", stock=" + stock + "]";
	}
	public String getCodigoProducto() {
		return codigoProducto;
	}
	public void setCodigoProducto(String codigoProducto) {
		this.codigoProducto = codigoProducto;
	}
	public String getNombreProducto() {
		return nombreProducto;
	}
	public void setNombreProducto(String nombreProducto) {
		this.nombreProducto = nombreProducto;
	}
	public UnidadesDeMedida getUDM() {
		return UDM;
	}
	public void setUDM(UnidadesDeMedida uDM) {
		UDM = uDM;
	}
	public BigDecimal getPrecioVenta() {
		return precioVenta;
	}
	public void setPrecioVenta(BigDecimal precioVenta) {
		this.precioVenta = precioVenta;
	}
	public boolean isTieneIva() {
		return tieneIva;
	}
	public void setTieneIva(boolean tieneIva) {
		this.tieneIva = tieneIva;
	}
	public BigDecimal getCoste() {
		return coste;
	}
	public void setCoste(BigDecimal coste) {
		this.coste = coste;
	}
	public Categorias getCodigoCategoria() {
		return codigoCategoria;
	}
	public void setCodigoCategoria(Categorias codigoCategoria) {
		this.codigoCategoria = codigoCategoria;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	
	
}
