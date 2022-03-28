import React from 'react'
import Product from './Product'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slide.css'

const Home = () => {
    const slideImages = [
        '../../../Asset/home/7.png',
        '../../../Asset/home/3.png',
        '../../../Asset/home/003.png'
      ];
      
    return (
        
        <div>
              <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide ">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide ">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>

            {/* <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../../../Asset/home/001.png" className="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                        <div className="carousel-item">
                            <img src="../../../Asset/home/002.png"className="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            <div className="carousel-item">
                                <img src="../../../Asset/home/003.png"className="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            <div className="carousel-item">
                                <img src="../../../Asset/home/004.png" className="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span classNames="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div> */}
                        <Product/>
                    </div>
                    )
}

                    export default Home
