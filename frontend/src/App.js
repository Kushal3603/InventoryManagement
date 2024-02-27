import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Sidebar from './components/SideBar';
import Products from './components/Products';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AddProduct from './components/AddProduct';

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
