import React from 'react'
import './Carousel.css'
import image1 from '../images/sicak-hava-fritozu-air-fryer-61.webp'
import image2 from '../images/ayakkabi-43.webp'
import image3 from '../images/en-iyi-akilli-telefonlar-37.webp'
import image4 from '../images/en-ucuz-4k-tvler-34.webp'
import image5 from '../images/robot-supurge-50.webp'

export default function Carousel() {
    return (
        <div className='carousel slide col-sm-8 pe-sm-1' data-bs-ride="carousel">
            <div className='carousel-inner'>
                <div className='carousel-item active carouselMainImage border mb-1' data-bs-interval="3000">
                    <img className='img-fluid' src={image1} alt="" />
                </div>
                <div className='carousel-item carouselMainImage border mb-1' data-bs-interval="3000">
                    <img className='img-fluid' src={image2} alt="" />
                </div>
                <div className='carousel-item carouselMainImage border mb-1' data-bs-interval="3000">
                    <img className='img-fluid' src={image3} alt="" />
                </div>
                <div className='carousel-item carouselMainImage border mb-1' data-bs-interval="3000">
                    <img className='img-fluid' src={image4} alt="" />
                </div>
                <div className='carousel-item carouselMainImage border mb-1' data-bs-interval="3000">
                    <img className='img-fluid' src={image5} alt="" />
                </div>
            </div>
            <div className='carouselSubImages'>
                <div className='subImages border'>
                    <img className='img-fluid' src={image1} alt="" />
                </div>
                <div className='subImages border'>
                    <img className='img-fluid' src={image2} alt="" />
                </div>
                <div className='subImages border'>
                    <img className='img-fluid' src={image3} alt="" />
                </div>
                <div className='subImages border'>
                    <img className='img-fluid' src={image4} alt="" />
                </div>
                <div className='subImages border'>
                    <img className='img-fluid' src={image5} alt="" />
                </div>
            </div>
        </div>
    )
}
