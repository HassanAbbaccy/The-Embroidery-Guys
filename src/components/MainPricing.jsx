import React, { useState } from "react";
import icon from "../assets/icon.png";
import cardIcon from "../assets/card-icon.png";
import cardArrow from "../assets/card-arrow.png";
import { Link } from "react-router-dom";

function MainPricing() {
  const [isChecked, setIsChecked] = useState("true");
  const handleChange = () => {
    setIsChecked(isChecked);
  };
  return (
    <div className="pricing lg:max-h-[100vh] md:max-h-[1200px]">
      <img
        src={icon}
        alt=""
        className="h-16 img-icon md:left-[50%] md:top-[7%] lg:top-[3%] lg:left-[50%] xl:left-[50%] "
      />
      <div className="container absolute max-w-[50%] z-10 pricing-content overflow-none lg:left-[10%] md:left-[15%] xl:left-[25%] xl:max-w-[500px]">
        <h1 className="uppercase font-sans font-extrabold text-3xl ">
          Our Packages
        </h1>
        <p className="italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, quisquam
          porro earum voluptatem doloremque cupiditate.
        </p>
      </div>
      <div className="" checked={isChecked} onChange={handleChange}>
        <div className="container z-20 flex gap-20 bg-white shadow-sm rounded-full absolute sm:max-w-[500px] max-w-[400px] justify-center h-10 items-center pricing-switch top-[25%] md:top-[25%] lg:top-[35%] left-[15%] lg:left-[5%] md:left-[15%] xl:left-[20%]">
          <p
            className={({ isChecked }) =>
              setIsChecked(isChecked ? "bg-slate-950" : "", "cursor-pointer")
            }
          >
            Digitizing
          </p>
          <p
            className={({ isChecked }) =>
              setIsChecked(isChecked ? "bg-slate-950" : "", "cursor-pointer")
            }
          >
            Vector
          </p>
          <p
            className={({ isChecked }) =>
              setIsChecked(isChecked ? "bg-slate-950" : "", "cursor-pointer")
            }
          >
            Patches
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-flow-row card-container relative md:max-w-[650px] lg:max-w-[900px] gap-4 max-w-[350px] md:left-[10%] left-[15%] xl:left-[20%] md:top-[30%] lg:top-[45%]">
        <div className="pricing-card shadow-xl max-h-[507px]">
          <div className="bg-orange-600 flex justify-center h-10 items-center text-white">
            <h1 className="font-sans">Simple</h1>
          </div>
          <h1 className="flex justify-center p-4">
            $<span className="text-3xl">20</span>
            <span className="text-xs align-bottom">
              <br />
              /piece
            </span>
          </h1>
          <div className="grid grid-flow-row justify-center px-2 py-2">
            <div className="grid grid-flow-col">
              <img src={cardIcon} alt="" />
              <p className="italic font-light text-xs shadow-lg px-2 rounded-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit, dolore
                nesciunt soluta rem reiciendis?
              </p>
            </div>
          </div>
          <div className="grid grid-flow-row justify-center px-2 py-2">
            <div className="grid grid-flow-col">
              <img src={cardIcon} alt="" />
              <p className="italic font-light text-xs shadow-lg px-2 rounded-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit, dolore
                nesciunt soluta rem reiciendis?
              </p>
            </div>
          </div>
          <div className="grid grid-flow-row justify-center px-2 py-2">
            <div className="grid grid-flow-col">
              <img src={cardIcon} alt="" />
              <p className="italic font-light text-xs shadow-lg px-2 rounded-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit, dolore
                nesciunt soluta rem reiciendis?
              </p>
            </div>
          </div>
          <ul className="grid grid-flow-col">
            <li className="flex justify-center pt-4">
              <Link className="flex gap-2">
                <h1>Get Started</h1> <img src={cardArrow} alt="card-arrow" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="pricing-card shadow-xl max-h-[507px]">
          <div className="bg-orange-600 flex justify-center h-10 items-center text-white">
            <h1 className="font-sans">Simple</h1>
          </div>
          <h1 className="flex justify-center p-4">
            $<span className="text-3xl">20</span>
            <span className="text-xs align-bottom">
              <br />
              /piece
            </span>
          </h1>
          <div className="grid grid-flow-row justify-center px-2 py-2">
            <div className="grid grid-flow-col">
              <img src={cardIcon} alt="" />
              <p className="italic font-light text-xs shadow-lg px-2 rounded-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit, dolore
                nesciunt soluta rem reiciendis?
              </p>
            </div>
          </div>
          <div className="grid grid-flow-row justify-center px-2 py-2">
            <div className="grid grid-flow-col">
              <img src={cardIcon} alt="" />
              <p className="italic font-light text-xs shadow-lg px-2 rounded-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit, dolore
                nesciunt soluta rem reiciendis?
              </p>
            </div>
          </div>
          <div className="grid grid-flow-row justify-center px-2 py-2">
            <div className="grid grid-flow-col">
              <img src={cardIcon} alt="" />
              <p className="italic font-light text-xs shadow-lg px-2 rounded-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit, dolore
                nesciunt soluta rem reiciendis?
              </p>
            </div>
          </div>
          <ul className="grid grid-flow-col">
            <li className="flex justify-center pt-4">
              <Link className="flex gap-2">
                <h1>Get Started</h1> <img src={cardArrow} alt="card-arrow" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="pricing-card shadow-xl max-h-[507px]">
          <div className="bg-orange-600 flex justify-center h-10 items-center text-white">
            <h1 className="font-sans">Simple</h1>
          </div>
          <h1 className="flex justify-center p-4">
            $<span className="text-3xl">20</span>
            <span className="text-xs align-bottom">
              <br />
              /piece
            </span>
          </h1>
          <div className="grid grid-flow-row justify-center px-2 py-2">
            <div className="grid grid-flow-col">
              <img src={cardIcon} alt="" />
              <p className="italic font-light text-xs shadow-lg px-2 rounded-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit, dolore
                nesciunt soluta rem reiciendis?
              </p>
            </div>
          </div>
          <div className="grid grid-flow-row justify-center px-2 py-2">
            <div className="grid grid-flow-col">
              <img src={cardIcon} alt="" />
              <p className="italic font-light text-xs shadow-lg px-2 rounded-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit, dolore
                nesciunt soluta rem reiciendis?
              </p>
            </div>
          </div>
          <div className="grid grid-flow-row justify-center px-2 py-2">
            <div className="grid grid-flow-col">
              <img src={cardIcon} alt="" />
              <p className="italic font-light text-xs shadow-lg px-2 rounded-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit, dolore
                nesciunt soluta rem reiciendis?
              </p>
            </div>
          </div>
          <ul className="grid grid-flow-col">
            <li className="flex justify-center pt-4">
              <Link className="flex gap-2">
                <h1>Get Started</h1> <img src={cardArrow} alt="card-arrow" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainPricing;
