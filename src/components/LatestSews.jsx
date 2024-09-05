import React from "react";
import Logos from '../assets/group-logo.png'
import bee1 from '../assets/honey1.png'
import bee2 from '../assets/honey2.png'
import line1 from '../assets/connector1.png'
import line2 from '../assets/connector2.png'
function LatestSews() {
  return (
    <>
    <div className="grid grid-flow-row bg-gray-300 w-full justify-center">
        <div className="flex justify-center">
      <h1 className="uppercase text-xl font-sans font-extrabold lg:text-4xl text-blue-950">
        Checkout <span className="text-orange-600">Our Latest</span> Sew Out
      </h1>
      </div>
      <p className="italic px-2">Lorem ipsum dolor sit amet consectetur adipisicing elibrt. Nulla, at minima. Unde, enim</p>
      <div className="flex justify-center">
      <img src={Logos} alt="logos" className="w-72 md:w-80 lg:w-[50%] xl:w-[80%] justify-center" />
      </div>
        <hr className="h-1 bg-black"/>
        <div className="flex justify-center">
            <h1 className="uppercase text-2xl text-blue-950 font-sans font-extrabold">Embroidery <span className="text-orange-600">Digitizing</span></h1>
        </div>
        <p className="italic px-2">Lorem ipsum dolor sit amet consectetur adipisicing elibrt. Nulla, at minima. Unde, enim</p>
        <div className="grid grid-cols-2 px-4">
            <div className="flex flex-col justify-center md:justify-end items-baseline">
            <img src={line1} alt="honey-bee" className="h-10 hidden" />
                <img src={bee2} alt="honey-bee" className="h-32 lg:h-72" />
                <button className="bg-blue-950 text-white px-4 py-1 rounded-full uppercase">embroidery</button>
            </div>
            <div className=" flex flex-col justify-center items-baseline">
                <img src={bee1} alt="honey-bee" className="h-32 lg:h-72" />
                <img src={line2} alt="" className="h-8 hidden"/>
                <button className="bg-blue-950 text-white px-4 py-1 rounded-full uppercase">Original art</button>
            </div>
            
        </div>
    </div>
    
    </>
  );
}

export default LatestSews;
