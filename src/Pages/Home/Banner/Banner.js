import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';

import './Banner.css';

const Banner = () => {
    return (
        <div className="carousel w-full py-10 pt-5">
        <div id="slide1" className="carousel-item relative w-full">
          <div className='carousel-img'>
          <img src={img1} alt="" className="w-full" />
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
            <h1 className='text-6xl font-bold text-white'>
                Affordable <br/>
                Price for Car <br />
                Serviceing
                </h1>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2  left-24 top-1/2">
            <p className='text-xl text-white'>There Are Many Variations Of Passages Of Available,But <br/> The Majority Have Suffered Alteration in Some Form</p>
          </div>
          <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
          <button className="btn btn-warning mr-5">Warning</button>
          <button className="btn btn-outline btn-warning ">Warning</button>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle btn-warning mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle btn-warning mr-5">❯</a>
          </div>
        </div> 

        <div id="slide2" className="carousel-item relative w-full">
          <div className='carousel-img'>
          <img src={img2} alt="" className="w-full" />
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
            <h1 className='text-6xl font-bold text-white'>
                Affordable <br/>
                Price for Car <br />
                Serviceing
                </h1>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2  left-24 top-1/2">
            <p className='text-xl text-white'>There Are Many Variations Of Passages Of Available,But <br/> The Majority Have Suffered Alteration in Some Form</p>
          </div>
          <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
          <button className="btn btn-warning mr-5">Warning</button>
          <button className="btn btn-outline btn-warning ">Warning</button>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle btn-warning mr-5">❮</a> 
            <a href="#slide3" className="btn btn-circle btn-warning mr-5">❯</a>
          </div>
        </div> 
        
        <div id="slide3" className="carousel-item relative w-full">
          <div className='carousel-img'>
          <img src={img3} alt="" className="w-full" />
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
            <h1 className='text-6xl font-bold text-white'>
                Affordable <br/>
                Price for Car <br />
                Serviceing
                </h1>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2  left-24 top-1/2">
            <p className='text-xl text-white'>There Are Many Variations Of Passages Of Available,But <br/> The Majority Have Suffered Alteration in Some Form</p>
          </div>
          <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
          <button className="btn btn-warning mr-5">Warning</button>
          <button className="btn btn-outline btn-warning ">Warning</button>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle btn-warning mr-5">❮</a> 
            <a href="#slide4" className="btn btn-circle btn-warning mr-5">❯</a>
          </div>
        </div> 
      </div>
    );
};

export default Banner;