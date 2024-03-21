import React, { useState, useEffect } from 'react';
import customerService from '../service/customer.service';

const Customers = () => {
 
  const [customers, setCustomers] = useState([]);


  useEffect(() => {
    fetchCustomers();
  }, []);


  const fetchCustomers = () => {
    customerService.getAllProducts() 
      .then(response => {
        setCustomers(response.data); 
      })
      .catch(error => {
        console.error('Error fetching customers:', error);
      });
  };

  return (
    <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card" style={{color:'#fff', background:'transparent',marginLeft:'440px',width:'373px'}}>
              <div className="card-header fs-3 text-center">
                List of Customers
              </div>

              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col"><center>Customer Name</center></th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map(customer => (
                      <tr key={customer.id}>
                        <td><center>{customer.customerName}</center></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Customers;
