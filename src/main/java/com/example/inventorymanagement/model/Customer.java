    package com.example.inventorymanagement.model;
    
    import jakarta.persistence.*;
    
    import java.util.List;
    
    @Entity
    @Table(name = "customer")
    public class Customer {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id;
        @Column(name = "customer_name")
        private String customerName;
    
        public Integer getId() {
            return id;
        }
    
        public void setId(Integer id) {
            this.id = id;
        }
    
        public String getCustomerName() {
            return customerName;
        }
    
        public void setCustomerName(String customerName) {
            this.customerName = customerName;
        }
    
    }
