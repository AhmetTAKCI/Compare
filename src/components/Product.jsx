import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductData from './Shop.json';
import './Product.css'; 

function Product() {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('search') || '';

  const filteredProducts = ProductData.filter((val) => {
    const lowerCasedTitle = val.title.toLowerCase();
    const lowerCasedSearchTerm = searchParam.toLowerCase();

    return lowerCasedTitle.includes(lowerCasedSearchTerm);
  });

  return (
   
    <div >
      <div>
        <h3 className='title'>
          Aramanızla Eşleşen Ürünler
        </h3>
      </div>
      <div className='product-container'> 
      {filteredProducts.length === 0 ? (
        <p>Aradığınız kriterlere uygun ürün bulunamadı.</p>
      ) : (
        filteredProducts.map((val) => (
          <div className='product-item' key={val.id}>
            <img className='product-image' src={val.image} alt={val.title} />
            <div className='product-details'>
              <h3>{val.title}</h3>    
              <p>{val.Description}</p>
              <p className='price'>Price:{val.price}$</p>
            </div>
          </div>

        ))
      )}
    </div>
    </div>
  );
}

export default Product;
