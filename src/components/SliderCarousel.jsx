import React from 'react'
import Slider from "react-slick";
import img from '../assets/logo1.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data =[
  {
    title: 'Send Us Your Vision',
    img: '../assets/logo1.png',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elite class'
  },

  {
    title: 'Send Us Your Vision',
    img: '../assets/logo1.png',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elite class'
  },
  {
    title: 'Send Us Your Vision',
    img: '../assets/logo1.png',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elite class'
  },
  
  
  
  
]

function  SliderCarousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className=''>
      
    <div className='slider container lg:visible flex flex-wrap'>
    <Slider {...settings}>
      {data.map((d) =>(
        <div className='max-h-[50px] w-64 justify-between flex flex-wrap'>
          <div className=''>
            <img src={img} alt="" className='h-44 w-44' />
          </div>
          <h1 className='text-3xl text-orange-500 font-sans font-bold uppercase'>{d.title}</h1>
          <p className='italic text-white'>{d.review}</p>
        </div>
      ))}
      </Slider>
      </div>
    

    
    </div>
  )
}
 
export default SliderCarousel