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
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" style={{color:'#fff'}}href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" style={{color:'#9e9ea4'}} href="#">Action</a></li>
              <li><a class="dropdown-item"style={{color:'#9e9ea4'}} href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item"style={{color:'#9e9ea4'}} href="#">Something else here</a></li>
            </ul>
          </li>
          
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" style={{color:'#fff'}}type="submit">Search</button>
        </form>
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