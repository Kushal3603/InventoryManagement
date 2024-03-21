import React from 'react'
import { Link } from 'react-router-dom'
import ProductList from './ProductList'

function Products() {
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
            <Link to="/addProduct" class="nav-link"style={{color:'#fff'}} href="#">Add Product</Link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  </div>
  <div>
    <ProductList/>
  </div>
  </>
  )
  
}
export default Products