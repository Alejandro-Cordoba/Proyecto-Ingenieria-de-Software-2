package com.inventory.products.services;

import com.inventory.products.dto.ProductosDTO;
import com.inventory.products.entity.Product;
import com.inventory.products.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductsService {
    @Autowired
    private ProductRepository productRepository;

    public Product createProducts(ProductosDTO product) {
        Product productEntity = new Product();
        productEntity.setNombre(product.getNombre());
        productEntity.setDescripcion(product.getDescripcion());
        productEntity.setCategoria(product.getCategoria());
        productEntity.setPreciounitario(Long.parseLong(product.getPreciounitario()));
        productEntity.setPreciomasiva(Long.parseLong(product.getPreciomasiva()));
        productEntity.setCodigoventa(String.valueOf(Integer.parseInt(product.getCodigoventa())));
        productEntity.setStockactual(Integer.parseInt(product.getStockactual()));
        return productRepository.save(productEntity);}
    public List<Product> getProducts() {
        return productRepository.findAll();
    }
    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }
}
