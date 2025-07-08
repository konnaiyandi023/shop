import React from 'react'
import './Breadcrums.css'
import breadcrum_arrow from '../Assets/breadcrum_arrow.png'
const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={breadcrum_arrow} alt="" /> SHOP <img src={breadcrum_arrow} alt="" /> {product.category} <img src={breadcrum_arrow} alt="" /> {product.name} 
    </div>
  )
}

export default Breadcrums
