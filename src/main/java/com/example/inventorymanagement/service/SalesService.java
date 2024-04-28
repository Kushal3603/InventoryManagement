package com.example.inventorymanagement.service;

import com.example.inventorymanagement.model.Sales;
import java.util.List;

public interface SalesService {
    public Sales saveSales(Sales sales);
    public List<Sales> getAllSales();
    public Sales getSalesById(Integer id);
    public String deleteSales(Integer id);
    public Sales editSales(Sales sales, Integer id);
}
