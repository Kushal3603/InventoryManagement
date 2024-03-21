import React, { useState, useEffect } from "react";
import productService from '../service/product.service'
import '../App.css'
import Home from "./Home";

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: "",
    quantity: "",
    value:""
  });

  const [msg, setMsg] = useState("");
  const [totalQuantity, setTotalQuantity] = useState(0); 

  useEffect(() => {
    const calculateTotalQuantity = () => {
      const products = JSON.parse(localStorage.getItem("products")) || [];
      const total = products.reduce((acc, curr) => acc + parseInt(curr.quantity), 0);
      setTotalQuantity(total);
    };

    calculateTotalQuantity();
  }, [product.quantity]);

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegister = (e) => {
    e.preventDefault();
    productService
      .saveProduct(product)
      .then((res) => {
        console.log("Product Added Successfully");
        setMsg("Product Added Successfully");
        setProduct({
          productName: "",
          description: "",
          price: "",
          status: "",
          quantity: "",
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
            <div className="card" style={{ backgroundColor: "#1d2634", color: '#fff', width: '300%', marginLeft: '220px', marginTop: '13px', boxShadow: '0 6px 7px -3px rgba(0, 0, 0, 0.35)' }}>
              <div className="card-header fs-3 text-center">Add Product</div>
              {msg && (
                <div>
                  <p style={{ transition: 'opacity 1s', opacity: msg ? 1 : 0 }} className="fs-4 text-center text-success">{msg}</p>
                </div>
              )}

              <div className="card-body">
                <form onSubmit={(e) => ProductRegister(e)}>
                  <div className="mb-3">
                    <label style={{ fontSize: '20px' }}>Enter Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.productName}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{ fontSize: '20px' }}>Enter Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.quantity}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{ fontSize: '20px' }}>Enter Description</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.description}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{ fontSize: '20px' }}>Enter Price</label>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.price}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label style={{ fontSize: '20px' }}>Enter Value</label>
                    <input
                      type="text"
                      name="value"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.value}
                    />
                  </div>
                  <button style={{ fontSize: '20px' }} className="btn btn-primary col-md-12">Add</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default AddProduct;
