package com.inventory.products.controller;

import com.inventory.products.dto.ProductosDTO;
import com.inventory.products.entity.Product;
import com.inventory.products.services.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Products")
public class ProductsController {
    @Autowired
    private ProductsService productsService;
    @PostMapping
    public Product createProducts(@RequestBody ProductosDTO product) {
        return productsService.createProducts(product);
    }
    @GetMapping
    public List<Product> getAllProduct() {return productsService.getProducts();}
    @GetMapping("/{productoid}")
    public Optional<Product> getProductById(@PathVariable Long productoid) {
        return productsService.getProductById(productoid);
    }
}
