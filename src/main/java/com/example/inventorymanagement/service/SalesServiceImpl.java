package com.example.inventorymanagement.service;

import com.example.inventorymanagement.model.Customer;
import com.example.inventorymanagement.model.Sales;
import com.example.inventorymanagement.repository.CustomerRepository;
import com.example.inventorymanagement.repository.SalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalesServiceImpl implements SalesService {
    @Autowired
    private SalesRepository salesRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Sales saveSales(Sales sales) {
        // Retrieve the customer name from the sales record
        String customerName = sales.getCustomerName();

        // Check if customer already exists in the Customer table
        Customer existingCustomer = customerRepository.findByCustomerName(customerName);

        // If customer doesn't exist, create a new customer and save it to the Customer table
        if (existingCustomer == null) {
            existingCustomer = new Customer();
            existingCustomer.setCustomerName(customerName);
            customerRepository.save(existingCustomer);
        }

        // Set the customer to the sales record
        sales.setCustomer(existingCustomer);

        // Save the sales record
        return salesRepository.save(sales);
    }

    @Override
    public List<Sales> getAllSales() {
        return salesRepository.findAll();
    }

    @Override
    public Sales getSalesById(Integer id) {
        return salesRepository.findById(id).orElse(null);
    }

    @Override
    public String deleteSales(Integer id) {
        if (salesRepository.existsById(id)) {
            salesRepository.deleteById(id);
            return "Sales record deleted successfully";
        } else {
            return "Sales record not found";
        }
    }

    @Override
    public Sales editSales(Sales sales, Integer id) {
        if (salesRepository.existsById(id)) {
            sales.setId(id);
            return salesRepository.save(sales);
        } else {
            return null;
        }
    }
}
