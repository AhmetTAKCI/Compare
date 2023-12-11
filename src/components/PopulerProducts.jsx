import React from 'react';

function PopulerProducts() {
    return (
        <div className='PopulerProducts' style={{ backgroundColor: "rgb(50, 50, 41)", marginTop: "60px", marginBottom: "60px" ,padding:"10px"}}>
            <div className='d-flex align-items-center py-0 mb-0'>
                <h5 className='m-0' style={{ color: "white" }}>Popüler Ürünler</h5>
                <span className='ms-auto' style={{ cursor: "pointer", color: "white", fontWeight: "500" }}>Tümü ❯</span>
            </div>
        </div>
    );
}

export default PopulerProducts;
