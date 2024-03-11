package com.example.inventorymanagement.service;

import com.example.inventorymanagement.model.Product;
import com.example.inventorymanagement.model.Sales;
import com.example.inventorymanagement.repository.SalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SalesServiceImpl implements SalesService {
    @Autowired
    private SalesRepository salesRepository;
    @Override
    public Sales saveSales(Sales sales) {
        return salesRepository.save(sales);
    }

    @Override
    public List<Sales> getAllSales() {
        return salesRepository.findAll();
    }

    @Override
    public Sales getSalesById(Integer id) {
        return salesRepository.findById(id).get();
    }

    @Override
    public String deleteSales(Integer id) {
        Sales sales=salesRepository.findById(id).get();
        if(sales!=null)
        {
            salesRepository.delete(sales);
        }
        return "Sales record is not present";
    }

    @Override
    public Sales editSales(Sales sales, Integer id) {
        Sales oldSales=salesRepository.findById(id).get();
        oldSales.setProductName(sales.getProductName());
        oldSales.setCustomerName(sales.getCustomerName());
        oldSales.setQuantity(sales.getQuantity());
        oldSales.setValue(sales.getValue());
        oldSales.setPrice(sales.getPrice());
        return salesRepository.save(oldSales);
    }
}
