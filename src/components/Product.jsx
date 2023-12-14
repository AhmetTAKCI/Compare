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
    <div>
      <div>
        <h3 className='title'>
          Aramanızla Eşleşen Ürünler
        </h3>
      </div>
      <div className='two-columns'> 
        {filteredProducts.length === 0 ? (
          <p>Aradığınız kriterlere uygun ürün bulunamadı.</p>
        ) : (
          filteredProducts.map((val) => {
            if (val.Description === 'boykot ürünü') {
              return (
                <div className='boykotÜrünü' key={val.id}>
                  <h3 className='boykot-title'>Boykot Ürünü</h3>
                  <div className='product-item'>
                    <img className='product-image' src={val.image} alt={val.title} />
                    <div className='product-details'>
                      <h3>{val.title}</h3>    
                      <p>{val.Description}</p>
                      <p className='price'>Fiyat: {val.price}$</p>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className='yerli-ürün' key={val.id}> 
                  <h3 className='yerli-title'>Yerli Ürün</h3>
                  <div className='product-item'>
                    <img className='product-image' src={val.image} alt={val.title} />
                    <div className='product-details'>
                      <h3>{val.title}</h3>    
                      <p>{val.Description}</p>
                      <p className='price'>Fiyat: {val.price}$</p>
                    </div>
                  </div>
                </div>
              );
            }
          })
        )}
      </div>
    </div>
  );
}

export default Product;
