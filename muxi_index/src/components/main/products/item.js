import React,{useState} from 'react'
import './products.css'

export default function Item(props) {
    
  const [linkCover, setLinkCover] = useState(0);
    const {product}=props;
  return (
    <div className='products'>
        <br />
        <div className='products-left'>
          <div className='products-left-top'>
            <h1>{product.name}</h1>
            <div className='products-label'>
              <div className='products-label-icon'></div>
              <p className='products-label-content'> {product.label}</p>
            </div>
          </div>
          <div className='products-left-bottom'>
            <p>{product.intro}</p>
            <div className='products-link-box' onMouseOver={() => setLinkCover(1)} onMouseOut={() => setLinkCover(0)}>
              <div className='products-link-cover' style={{ display: linkCover === 0 ? 'block' : 'none' }} >下载地址</div>
              <a className='products-link' href={`${product.link}`}>下载地址</a>
            </div>
          </div>
        </div>

        <div className='products-right' >
          <img className='products-pricture' src={require(`../../../assets/products/${product.picture}`)} alt='' />
        </div>
      </div>
  )
}
