import React from 'react'

export default function Carousel() {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade border border-secondary" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://medinacreativehousing.com/wp-content/uploads/2019/05/Dresses.jpg" className="d-block" style={{width: '100%', height: '500px'}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.hdqwalls.com/download/women-portrait-black-dress-rg-1280x720.jpg" className="d-block" style={{width: '100%', height: '500px'}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://uhdwallpapers.org/uploads/converted/18/03/08/lady-with-elegant-black-dress-1280x720_57764-mm-90.jpg" style={{width: '100%', height: '500px'}} className="d-block" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon text-white" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon text-white" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}
