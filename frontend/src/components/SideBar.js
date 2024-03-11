import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { BiSolidPurchaseTag } from "react-icons/bi";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> SHOP
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}><i class="fa-solid fa-xmark"></i></span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to='/'>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/products">
                    <BsFillArchiveFill className='icon'/> Products
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/purchases">
                    <BiSolidPurchaseTag  className='icon'/> Purchases
                </Link>    
            </li>
            <li className='sidebar-list-item'>
                <Link to="/customers">
                    <BsPeopleFill className='icon'/> Customers
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/sales">
                    <BsMenuButtonWideFill className='icon'/> Sales
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Settings
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar