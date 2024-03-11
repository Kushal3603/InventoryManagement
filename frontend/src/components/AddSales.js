import React, { useState, useEffect } from "react";
import '../App.css'
import Home from "./Home";
import salesService from "../service/sales.service";

const AddSales = () => {
  const [sales, setSales] = useState({
    customerName:"",
    productName:"",
    price:"",
    quantity:"",
    value:"",
  });

  const [msg, setMsg] = useState("");
  const [totalQuantity, setTotalQuantity] = useState(0); 

  useEffect(() => {
    const calculateTotalQuantity = () => {
      const sales = JSON.parse(localStorage.getItem("sales")) || [];
      const total = sales.reduce((acc, curr) => acc + parseInt(curr.quantity), 0);
      setTotalQuantity(total);
    };

    calculateTotalQuantity();
  }, [sales.quantity]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSales({ ...sales, [e.target.name]: value });
  };

  const SalesRegister = (e) => {
    e.preventDefault();
    salesService
      .saveSales(sales)
      .then((res) => {
        console.log("Sales Added Successfully");
        setMsg("Sales Added Successfully");
        setSales({
            customerName:"",
            productName:"",
            price:"",
            quantity:"",
            value:"",
        });
        setTimeout(() => {
          setMsg("");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div>New Sales</div>
            <div className="card" style={{ backgroundColor: "#1d2634", color: '#fff', width: '300%', marginLeft: '220px', marginTop: '13px', boxShadow: '0 6px 7px -3px rgba(0, 0, 0, 0.35)' }}>
              <div className="card-header fs-3 text-center">Add Sales</div>
              {msg && (
                <div>
                  <p style={{ transition: 'opacity 1s', opacity: msg ? 1 : 0 }} className="fs-4 text-center text-success">{msg}</p>
                </div>
              )}

              <div className="card-body">
                <form onSubmit={(e) => SalesRegister(e)}>
                  <div className="mb-3">
                    <label style={{ fontSize: '20px' }}>Enter Customer Name</label>
                    <input
                      type="text"
                      name="customerName"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={sales.customerName}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{ fontSize: '20px' }}>Enter Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={sales.productName}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{ fontSize: '20px' }}>Enter Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={sales.quantity}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{ fontSize: '20px' }}>Enter Price</label>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={sales.price}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{ fontSize: '20px' }}>Enter Value</label>
                    <input
                      type="text"
                      name="value"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={sales.value}
                    />
                  </div>
                  <button style={{ fontSize: '20px' }} className="btn btn-primary col-md-12">Add</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>Total Quantity of Products: {totalQuantity}</p>
    </>
  );

};

export default AddSales;
