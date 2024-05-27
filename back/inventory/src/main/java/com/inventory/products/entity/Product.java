package com.inventory.products.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "products ")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productoid;
    private String nombre;
    private String descripcion;
    private String categoria;
    private Long preciounitario;
    private Long preciomasiva;
    private String codigoventa;
    private int stockactual;

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

    public Long getPreciounitario() {
        return preciounitario;
    }

    public void setPreciounitario(Long preciounitario) {
        this.preciounitario = preciounitario;
    }

    public Long getPreciomasiva() {
        return preciomasiva;
    }

    public void setPreciomasiva(Long preciomasiva) {
        this.preciomasiva = preciomasiva;
    }

    public String getCodigoventa() {
        return codigoventa;
    }

    public void setCodigoventa(String codigoventa) {
        this.codigoventa = codigoventa;
    }

    public int getStockactual() {
        return stockactual;
    }

    public void setStockactual(int stockactual) {
        this.stockactual = stockactual;
    }

    public Product() {
    }
}

