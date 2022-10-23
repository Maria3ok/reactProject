import React, { useState,useEffect } from 'react'
import productsArr from './productsInfo'
import Item from './item'
import './products.css'

export default function Products(props) {
  const [currentProduct, setCurrentProduct] = useState(0);
  useEffect(
    ()=>{
      props.setcurrentpage(1)
    },[]
  )
  let controllerLeft = 583 - 175 * currentProduct + 'px';
  let scollLeft = -100*currentProduct + '%';

  return (
    <div>
      <div className='products-scoll' style={{left:scollLeft}}>
        {productsArr.map((product,i)=>{return <Item key={i} product={product} productsArr={productsArr}/>})}
      </div>

      <div className='products-controller'>
        <div className='products-controller-left'>
          <div className='products-controller-leftbtn' onClick={() => { if (currentProduct !== 0) { setCurrentProduct(currentProduct - 1) } }}></div>

        </div>
        <div className='products-controller-box' style={{ left: controllerLeft }}>
          <div className='products-controller-item' style={{ color:currentProduct===0?'white':'#c1b3a3'}} onClick={() => { setCurrentProduct(0) }}>华师匣子</div>
          <div className='products-controller-item' style={{color:currentProduct===1?'white':'#c1b3a3'}} onClick={() => { setCurrentProduct(1) }}> 学而 </div>
          <div className='products-controller-item' style={{color:currentProduct===2?'white':'#c1b3a3'}} onClick={() => { setCurrentProduct(2) }}> 木小犀</div>
          <div className='products-controller-item' style={{color:currentProduct===3?'white':'#c1b3a3'}} onClick={() => { setCurrentProduct(3) }}> 想法池</div>
        </div>
        <div className='products-controller-right'>
          <div className='products-controller-rightbtn' onClick={() => { if (currentProduct !== 3) { setCurrentProduct(currentProduct + 1) } }}></div>
        
      </div>
      <div className='products-controller-camera'>
        <img src={require('../../../assets/products/camera.png')} alt=''></img>
        <div className='products-controller-camera-inner1'></div>
      <div className='products-controller-camera-inner2'></div>
      <div className='products-controller-camera-inner3'></div>
      <img className='products-controller-camera-icon' src={require(`../../../assets/products/${productsArr[currentProduct].icon}`)} alt=''/>
      </div>
      
    </div>
    </div >
  )

}
