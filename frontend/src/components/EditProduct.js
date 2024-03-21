import React, { useEffect, useState } from 'react'
import {Link,useNavigate, useParams } from 'react-router-dom';
import productService from '../service/product.service';


const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    description: "",
    price: "",
    quantity: "",
    value:""
  });

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const [msg, setMsg] = useState("");

  useEffect(() => {
    productService
      .getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductUpdate = (e) => {
    e.preventDefault();

    productService
      .editProduct(product)
      .then((res) => {
        navigate("/products");
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
            <div className="card" style={{backgroundColor:'#1d2634', width:'300%', marginLeft:'220px', marginTop:'13px', boxShadow:'0 6px 7px -3px rgba(0, 0, 0, 0.35)',color:'#fff'}}>
              <div className="card-header fs-3 text-center" style={{color:'#fff'}}>Edit Product</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(e) =>{ 
                  ProductUpdate(e)
                  }}>
                  <div className="mb-3">
                    <label style={{fontSize:'20px'}}>Enter Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.productName}
                    />
                  </div>

                  <div className="mb-3">
                    <label style={{fontSize:'20px'}}>Enter Description</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.description}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{fontSize:'20px'}}>Enter Price</label>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.price}
                    />
                  </div>

                  <div className="mb-3">
                    <label style={{fontSize:'20px'}}>Enter Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.quantity}
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
                  <button style={{fontSize:'20px'}} className="btn btn-primary col-md-12">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProduct