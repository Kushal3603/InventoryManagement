import React, { useEffect, useState } from 'react'
import {Link,useNavigate, useParams } from 'react-router-dom';
import salesService from '../service/sales.service';



const EditSales = () => {
  const [sales, setSales] = useState({
    id:"",
    customerName:"",
    productName:"",
    price:"",
    quantity:"",
    value:"",
  });

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const [msg, setMsg] = useState("");

  useEffect(() => {
    salesService
      .getSalesById(id)
      .then((res) => {
        setSales(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setSales({ ...sales, [e.target.name]: value });
  };

  const SalesUpdate = (e) => {
    e.preventDefault();

    salesService
      .editSales(sales)
      .then((res) => {
        navigate("/sales");
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
            <div className="card" style={{backgroundColor:'#1d2634', width:'300%', marginLeft:'220px', marginTop:'13px', boxShadow:'0 6px 7px -3px rgba(0, 0, 0, 0.35)'}}>
              <div className="card-header fs-3 text-center" style={{color:'#fff'}}>Edit Sales</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(e) =>{ 
                  SalesUpdate(e)
                  }}>
                  <div className="mb-3">
                    <label style={{fontSize:'20px', color:'#fff'}}>Enter Customer Name</label>
                    <input
                      type="text"
                      name="customerName"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={sales.customerName}
                    />
                  </div>

                  <div className="mb-3">
                    <label style={{fontSize:'20px',color:'#fff'}}>Enter Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={sales.productName}
                    />
                    
                    <div className="mb-3">
                    <label style={{fontSize:'20px',color:'#fff'}}>Enter Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={sales.quantity}
                    />
                  </div>
            
                  <div className="mb-3">
                    <label style={{fontSize:'20px',color:'#fff'}}>Enter Price</label>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={sales.price}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{fontSize:'20px',color:'#fff'}}>Enter Value</label>
                    <input
                      type="text"
                      name="value"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={sales.value}
                    />
                  </div>
                  
                  </div>
                  <button style={{fontSize:'20px',color:'#fff'}} className="btn btn-primary col-md-12">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditSales