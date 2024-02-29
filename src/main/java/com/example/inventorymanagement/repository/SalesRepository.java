package com.example.inventorymanagement.repository;

import com.example.inventorymanagement.model.Sales;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SalesRepository extends JpaRepository<Sales,Integer> {
}
