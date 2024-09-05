import React from "react";
import Bg from "../assets/home-bg.png";
import bg1 from "../assets/Rectangle3.png";
import Navbar from "../components/Navbar";
import shirt from "../assets/image3.png";
import avatar from "../assets/image6.png";
import avatar1 from "../assets/image5.png";
import videoimage from "../assets/image7.png";
import bgimg3 from "../assets/bg-img3.png";
import shirt2 from "../assets/image8.png";
import icon from "../assets/icon.png";
import shopicon from "../assets/shop-icon.png";
import slider1 from "../assets/logo1.png";
import MainServices from "../components/MainServices";
import MainPricing from "../components/MainPricing";
import LatestSews from "../components/LatestSews";

function Home() {
  return (
    <>
      <div className="container hero">
        <img src={Bg} alt="" className="w-full bg-img" />
        <Navbar></Navbar>
        <div className="hero-content sm:top-[30%] md:top-[40%] lg:top-[50%]">
          <h3>inovation in print</h3>
          <h1 className="font-bold md:text-4xl lg:text-5xl xl:text-6xl text-orange-500">
            Far<span className="text-cyan-400"> Beyond</span> Print
          </h1>
          <br></br>
          <button className="bg-white text-black px-6 py-2 rounded-full hover:text-white hover:bg-transparent hover:border-2">
            Order Now
          </button>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 hero-2">
        <img
          src={bg1}
          alt=""
          className="w-full sticky h-[1500px] md:h-[1300px] lg:h-[1400px] xl:h-[1600px] top-24"
        />
      </div>
      <div className="grid grid-flow-row w-full justify-center py-16 pt-36 md:pt-10 md:pb-28 pb-24">
        <img src={shirt} alt="" className="h-60 pl-28" />
        <h1 className="font-bold sm:text-4xl text-3xl uppercase text-white text-wrap">
          at the point{" "}
          <span className="text-orange-600">
            {" "}
            when Quality<br></br> truly{" "}
          </span>{" "}
          masters
        </h1>
        <ul className="grid md:grid-flow-col justify-center md:gap-8">
          <li className="text-white font-thin text-xl text-wrap py-8 uppercase">
            Customer Orders
            <hr className="h-1 w-36 bg-orange-600" />
            <p className="font-bold px-6">2,300</p>
          </li>

          <li className="text-white font-thin text-xl text-wrap py-8 uppercase">
            Active Users
            <hr className="h-1 w-32 bg-orange-600" />
            <p className="font-bold px-6">2,300</p>
          </li>

          <li className="text-white font-thin text-xl text-wrap py-8 uppercase">
            Orders Released
            <hr className="h-1 w-32 bg-orange-600" />
            <p className="font-bold px-6">2,300</p>
          </li>

          <li className="text-white font-thin text-xl text-wrap py-8 uppercase">
            Re-orders
            <hr className="h-1 w-28 bg-orange-600" />
            <p className="font-bold px-6">2,300</p>
          </li>
        </ul>
      </div>

      <div className="grid grid-flow-col w-full justify-end">
        <img src={avatar1} alt="" className="h-40 md:h-60" />
        <img src={avatar} alt="" className="h-40 md:h-60" />
      </div>
      <div className="grid grid-flow-row w-full md:px-28 px-14">
        <h3 className="uppercase font-semibold">About Us</h3>
        <h1 className="uppercase font-bold text-xl">Who We Are</h1>
        <p className="font-thin pb-2">
          Lorem ipsum dolor sit amet consectetur. Non condimentum suspendisse
          tortor nisi dolor posuere proin purus vulputate. Enim phasellus
          aliquet tellus nec felis arcu nisl ac aliquam. Neque erat erat aenean
          suspendisse commodo varius nulla. Laoreet id viverra commodo quam
          mattis tincidunt consectetur elementum. Ultrices velit urna lobortis
          imperdiet. Sit nec sit ullamcorper commodo. Id egestas pulvinar arcu
          eget. Bibendum at urna
        </p>
        <button className="bg-orange-500 uppercase w-32 px-4 py-2 rounded-full">
          Read More
        </button>
        <div className="grid grid-flow-col w-full justify-end">
          <img src={videoimage} alt="" className="h-0 md:h-40" />
        </div>
      </div>
      <div className="grid grid-flow-row">
        <img src={bgimg3} alt="bgimg" className="w-full h-[100vh] lg:h-full" />
      </div>
      <ul className="grid grid-flow-row text-wrap hero-3 lg:top-[270%] xl:top-[300%] lg:gap-8 relative ">
        <img src={icon} alt="item-img" className=" h-20  justify-center" />
        <h1 className="text-white text-2xl lg:text-6xl font-sans font-bold">
          Make a <span className="text-orange-500">Custom Printing</span> in{" "}
          <br />
          T-Shirt
        </h1>
        <li className="">
          {" "}
          <img src={shirt2} alt="item-img" className=" h-72  justify-center top-32" />
          <img
            src={shopicon}
            alt="shop-icon"
            className="absolute top-[90%] pl-20"
          />
        </li>
      </ul>

      <div className="grid grid-rows-row bg-blue-900 justify-center pt-20 md:h-[716px] h-[1080px]">
        <h1 className="uppercase md:text-6xl text-3xl font-bold text-white max-h-[1px]">
          Make{" "}
          <span className="text-orange-500">
            Custom Printing with
            <br />
            three<span className="text-white"> Easy Steps</span>{" "}
          </span>
        </h1>
        <div className="grid md:grid-cols-3 grid-flow-row justify-center gap-20 md:gap-1 lg:gap-10">
          <div className="grid grid-flow-row max-h-[100px] w-64">
            <img src={slider1} alt="" className="h-20" />
            <h1 className="uppercase text-2xl font-sans font-bold  text-orange-500">
              Send Us your Vision
            </h1>
            <p className="italic text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit,
              Perferendis, tempora cum!
            </p>
          </div>

          <div className="grid grid-flow-row max-h-[100px] w-64">
            <img src={slider1} alt="" className="h-20" />
            <h1 className="uppercase text-2xl font-sans font-bold  text-orange-500">
              Send Us your Vision
            </h1>
            <p className="italic text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit,
              Perferendis, tempora cum!
            </p>
          </div>
          <div className="grid grid-flow-row max-h-[140px] w-64">
            <img src={slider1} alt="" className="h-20" />
            <h1 className="uppercase text-2xl font-sans font-bold  text-orange-500">
              Send Us your Vision
            </h1>
            <p className="italic text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit,
              Perferendis, tempora cum!
            </p>
          </div>
        </div>
      </div>
      <MainServices></MainServices>
      <MainPricing></MainPricing>
      <LatestSews></LatestSews>
      
    </>
  );
}

export default Home;
