import React, { useContext, useRef } from 'react'
import './Navbar.css'
import logo from  '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import { ShopContext } from '../../Context/ShopContext'
import dropdown1 from '../Assets/dropdown1.png'


const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  const  {getTotalCartItems}=useContext(ShopContext);
  const menuref=useRef();
  const dropdown_toggle = (e) =>{
    menuref.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
         <p>SHOPPER</p>
      </div>
      <img className='dropdown' onClick={dropdown_toggle} src={dropdown1}alt="" />
      <ul ref={menuref} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
