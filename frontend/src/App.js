import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Sidebar from './components/SideBar';
import Products from './components/Products';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Sales from './components/Sales';
import AddSales from './components/AddSales';
import EditSales from './components/EditSales';
import Customers from './components/Customers';



function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <BrowserRouter>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Home />} />
          
          <Route path='/products' element={<Products />} />
          <Route path='/addProduct' element={<AddProduct/>}></Route>
          <Route path='/editProduct/:id' element={<EditProduct />}></Route>
          <Route path='/sales' element={<Sales/>}></Route>
          <Route path='/addSales' element={<AddSales/>}></Route>
          <Route path='/editSales/:id' element={<EditSales/>}></Route>
          <Route path='/customers' element={<Customers/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
