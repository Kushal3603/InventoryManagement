import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import salesService from "../service/sales.service";

const SalesList = () => {
  const [salesList, setSalesList] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    salesService
      .getAllSales()
      .then((res) => {
        setSalesList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteSales = (id) => {
    salesService
      .deleteSales(id)
      .then((res) => {
        setMsg("Deleted Sucessfully");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card" style={{width:'200%', left:'-252px', background:'bottom'}}>
              <div className="card-header fs-3 text-center" style={{color:'#fff'}}>
                List of Sales
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>

              <div className="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Value</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesList.map((s, num) => (
                      <tr>
                        <td>{num + 1}</td>
                        <td>{s.customerName}</td>
                        <td>{s.productName}</td>
                        <td>{s.price}</td>
                        <td>{s.quantity}</td>
                        <td>{s.value}</td>
                        <td>
                          <Link to={'/editSales/'+s.id} className="btn btn-sm btn-primary">
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteSales(s.id)}
                            className="btn btn-sm btn-danger ms-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesList;