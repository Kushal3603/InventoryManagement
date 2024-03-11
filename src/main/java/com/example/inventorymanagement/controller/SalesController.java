package com.example.inventorymanagement.controller;
import com.example.inventorymanagement.model.Sales;
import com.example.inventorymanagement.service.SalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class SalesController {
    @Autowired
    public SalesService salesService;

    @PostMapping("/saveSales")
    public ResponseEntity<?> saveSales(@RequestBody Sales sales){
        return new ResponseEntity<>(salesService.saveSales(sales), HttpStatus.CREATED);
    }
    @GetMapping("/getAllSales")
    public ResponseEntity<?> getAllSales() {
        return new ResponseEntity<>(salesService.getAllSales(), HttpStatus.OK);
    }

    @GetMapping("/getSalesById/{id}")
    public ResponseEntity<?> getSalesById(@PathVariable Integer id) {
        return new ResponseEntity<>(salesService.getSalesById(id), HttpStatus.OK);
    }

    @GetMapping("/deleteSales/{id}")
    public ResponseEntity<?> deleteSales(@PathVariable Integer id) {
        return new ResponseEntity<>(salesService.deleteSales(id), HttpStatus.OK);
    }

    @PostMapping("/editSales/{id}")
    public ResponseEntity<?> editSales(@RequestBody Sales sales, @PathVariable Integer id) {
        return new ResponseEntity<>(salesService.editSales(sales, id), HttpStatus.CREATED);
    }
}
