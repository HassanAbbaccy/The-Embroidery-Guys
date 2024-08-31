import React from 'react'
import Bg from '../assets/home-bg.png'
import bg1 from '../assets/Rectangle3.png'
import Navbar from '../components/Navbar'
import shirt from '../assets/image3.png'
import avatar from '../assets/image6.png'
import avatar1 from '../assets/image5.png'
import videoimage from '../assets/image7.png'
import bgimg3 from '../assets/bg-img3.png'

function Home() {
  return (
    <>
    <div className='container hero'>
        <img src={Bg} alt="" className='w-full bg-img'/>
        <Navbar></Navbar>
        <div className='hero-content sm:top-[30%] md:top-[40%] lg:top-[50%]'>
            <h3>inovation in print</h3>
            <h1 className='font-bold md:text-4xl lg:text-5xl xl:text-6xl text-orange-500'>Far<span className='text-cyan-400'> Beyond</span> Print</h1><br></br>
            <button className='bg-white text-black px-6 py-2 rounded-full hover:text-white hover:bg-transparent hover:border-2'>Order Now</button>
        </div>

        
    </div>
        <div className='w-full grid grid-cols-1 hero-2'>
        
            <img src={bg1} alt="" className='w-full sticky h-[1500px] md:h-[1300px] lg:h-[1400px] xl:h-[1600px] top-24'/>   
            
        </div>
        <div className='grid grid-flow-row w-full justify-center py-16 pt-36 md:pt-10 md:pb-28 pb-24'>
        <img src={shirt} alt="" className='h-60 pl-28' />
                <h1 className='font-bold sm:text-4xl text-3xl uppercase text-white text-wrap'>at the point <span className='text-orange-600'> when Quality<br></br> truly </span> masters</h1>
                <ul className='grid md:grid-flow-col justify-center md:gap-8'>
                    <li className='text-white font-thin text-xl text-wrap py-8 uppercase'>
                        Customer Orders
                        <hr className='h-1 w-36 bg-orange-600' />
                        <p className='font-bold px-6'>2,300</p>
                        </li>

                        <li className='text-white font-thin text-xl text-wrap py-8 uppercase'>
                        Active Users
                        <hr className='h-1 w-32 bg-orange-600' />
                        <p className='font-bold px-6'>2,300</p>
                        </li>

                        <li className='text-white font-thin text-xl text-wrap py-8 uppercase'>
                        Orders Released
                        <hr className='h-1 w-32 bg-orange-600' />
                        <p className='font-bold px-6'>2,300</p>
                        </li>

                        <li className='text-white font-thin text-xl text-wrap py-8 uppercase'>
                        Re-orders
                        <hr className='h-1 w-28 bg-orange-600' />
                        <p className='font-bold px-6'>2,300</p>
                        </li>
                </ul>
            </div>

            <div className='grid grid-flow-col w-full justify-end'>
            <img src={avatar1} alt="" className='h-40 md:h-60' />
            <img src={avatar} alt="" className='h-40 md:h-60' />
            </div>
            <div className='grid grid-flow-row w-full md:px-28 px-14'>
                <h3 className='uppercase font-semibold'>About Us</h3>
                <h1 className='uppercase font-bold text-xl'>Who We Are</h1>
                <p className='font-thin pb-2'>Lorem ipsum dolor sit amet consectetur. Non condimentum suspendisse
                     tortor nisi dolor posuere proin purus vulputate. Enim phasellus aliquet
                      tellus nec felis arcu nisl ac aliquam. Neque erat erat aenean suspendisse
                       commodo varius nulla. Laoreet id viverra commodo quam mattis tincidunt 
                       consectetur elementum. Ultrices velit urna lobortis imperdiet. 
                    Sit nec sit ullamcorper commodo. Id egestas pulvinar arcu eget. Bibendum at urna</p>
                    <button className='bg-orange-500 uppercase w-32 px-4 py-2 rounded-full'>Read More</button>
                    <div className='grid grid-flow-col w-full justify-end'>
                    <img src={videoimage} alt=""  className='h-0 md:h-40'/> 
                    </div>
            </div>
            <div className='grid grid-flow-row'>
                <img src={bgimg3} alt="bgimg" className='-z-10'  />
                <p className='hero-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque minima, possimus qui officia velit illum recusandae,
                         voluptatum tempore consectetur, sequi reprehenderit quae maiores voluptatem illo facilis nostrum vel? Ipsam, cum.</p>
                
            </div>
            <div className='grid grid-flow-col'>
            
            </div>
            


    </>
  )
}

export default Home