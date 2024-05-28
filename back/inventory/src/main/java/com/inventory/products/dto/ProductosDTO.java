package com.inventory.products.dto;

public class ProductosDTO {
    private Long productoid;
    private String nombre;
    private String descripcion;
    private String categoria;
    private String preciounitario;
    private String preciomasiva;
    private String codigoventa;
    private String stockactual;

    public Long getProductoid() {
        return productoid;
    }

    public void setProductoid(Long productoid) {
        this.productoid = productoid;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getPreciounitario() {
        return preciounitario;
    }

    public void setPreciounitario(String preciounitario) {
        this.preciounitario = preciounitario;
    }

    public String getPreciomasiva() {
        return preciomasiva;
    }

    public void setPreciomasiva(String preciomasiva) {
        this.preciomasiva = preciomasiva;
    }

    public String getCodigoventa() {
        return codigoventa;
    }

    public void setCodigoventa(String codigoventa) {
        this.codigoventa = codigoventa;
    }

    public String getStockactual() {
        return stockactual;
    }

    public void setStockactual(String stockactual) {
        this.stockactual = stockactual;
    }
}
