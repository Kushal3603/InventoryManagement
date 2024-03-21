import React from 'react'
import { Link } from 'react-router-dom'
import SalesList from './SalesList'

function Sales() {
  return (
    <>
    <div><nav class="navbar navbar-expand-lg " style={{width:'300%',marginTop: '-58px', backgroundColor:'#1d2634'}}>
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li class="nav-item">
            <Link to="/addSales" class="nav-link"style={{color:'#fff'}} href="#">Add Sales</Link>
          </li>
          
        </ul>
       
      </div>
    </div>
  </nav>
  </div>
  <div>
    <SalesList/>
  </div>
  </>
  )
  
}
export default Sales