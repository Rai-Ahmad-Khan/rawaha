import Slider from "react-slick";
import SampleAPI from '../../../SampleAPI.json';
import data from '../../../data.json'
import React, { useState, useEffect, useRef } from "react";

export default function ItemDetail () {
    const Product = data.products[0];
    const upperContent = SampleAPI.upperContent;
    const headerData = SampleAPI.Header;
    const itemDetails = SampleAPI.ItemDetails;

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
  
    useEffect(() => {
      setNav1(sliderRef1);
      setNav2(sliderRef2);
    }, []);
    return (
        <>
       
        <div className="item-detail-section">
            <div className="inner-item-detail max-w-[84rem] mx-auto">
                <div className="name-bar h-16 flex items-center px-5">
                    <div className="content flex text-gray-400 text-[12px]">
                        <p className="text-black">Home </p>
                        <p>Athlete's Ascent -</p>
                        <p>Ultra Long Lasting -</p>
                        <p>Impression of Polo Sport</p>
                    </div>
                </div>
                <div className="item-detail-display mb-10 grid grid-cols-2 justify-center">
                    <div className="left  justify-self-center relative">
                       <div>
                       <Slider asNavFor={nav1}
                                ref={slider => (sliderRef2 = slider)}
                                slidesToShow={3}
                                swipeToSlide={true} focusOnSelect={true} 
                                className="size-bar nav-slider slider-for h-20  w-[600px]">
                            <img className="h-20 w-20" src={Product.imageSrc} alt="item"/>
                            <img className="h-20 w-20" src={Product.imageSrc} alt="item"/>
                            <img className="h-20 w-20" src={Product.imageSrc} alt="item"/>
                            <img className="h-20 w-20" src={Product.imageSrc} alt="item"/>
                        </Slider>
                       </div>
                       <div>
                       <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} className="item-display main-slider slider-nav w-[600px]">
                            <div className="item mr-10"><img className="h-[600px] w-[600px]" src={Product.imageSrc} alt="item"/></div>
                            <div className="item mr-10"><img className="h-[600px] w-[600px]" src={Product.imageSrc} alt="item"/></div>
                            <div className="item mr-10"><img className="h-[600px] w-[600px]" src={Product.imageSrc} alt="item"/></div>
                            <div className="item mr-10"><img className="h-[600px] w-[600px]" src={Product.imageSrc} alt="item"/></div>
                            <div className="item mr-10"><img className="h-[600px] w-[600px]" src={Product.imageSrc} alt="item"/></div>
                        </Slider>
                       </div>
                    </div>
                    <div className="item-information justify-self-center w-[400px]"> 
                        <div className="flex flex-col gap-3 border-b border-gray-400 ">
                            <h2 className="text-black text-[26px]">Athlete's Ascent - Ultra Long Lasting - Impression of Polo Sport</h2>
                            <span className="stars flex w-60">
                                {upperContent.leftSide.stars.map((star, startIndex)=> (
                                    <img key={startIndex} className="h-7 w-7" src={star} alt="#"/>
                                ))}
                                <p  className="text-[14px]  text-gray-500"> 4 reviews</p>
                            </span>
                            <span className="text-[20px]">Rs.850.00</span>
                        </div>
                        <div className="flex py-5 flex-col gap-3 border-b border-gray-400 text-[14px]">
                            <p className=" text-gray-400">Men's Ultra Long Lasting Perfume Description Athlete?s Ascent is ultra long lasting perfume. It opens with a blend of fruity notes; making it an intense and oceanic growth fragrance It... <a className="text-black underline" href="#">Read more</a></p>
                            <span className="selected-size ">SIZE: 50ML</span>
                            <div className="buttons flex gap-2 flex-wrap  text-gray-500">
                                <a className="px-4 py-1 border border-solid border-gray-500 rounded-full" href="#">30ML</a>
                                <a className="px-4 py-1 border border-solid border-gray-500 rounded-full" href="#">50ML</a>
                                <a className="px-4 py-1 border border-solid border-gray-500 rounded-full" href="#">100ML</a>
                                <a className="px-4 py-1 border border-solid border-gray-500 rounded-full" href="#">5ML</a>
                                <a className="px-4 py-1 border border-solid border-gray-500 rounded-full" href="#">10ML</a>
                            </div>
                            <div className="input-portion">
                                <label htmlFor="tester" className="font-medium ">Free tester of your choice</label>
                                <input id="tester" className="border border-gray-300 focus:outline-none px-5 h-12 w-[390px]" type="text"/>
                            </div>
                            <button className="h-14 w-[390px] bg-[#333333] font-semibold text-white flex items-center gap-1 justify-center"><img src={headerData[4].imageSrc} alt="this"/>OUT OF STOCK</button>
                            <button className="h-14 w-[390px] bg-[#333333] font-semibold text-white">NOTIFY ME WHEN AVAILABLE</button>
                            <div className="icon-portion flex gap-1">
                                <div className="box flex flex-col items-center">
                                    <img className="h-10 w-10 text-[13px]" src={itemDetails.smil_imgSrc} alt="smile"/>
                                    <h2 className="font-bold">20000+</h2>
                                    <p className="">satisfied customer</p>
                                </div>
                                <div className="box flex flex-col items-center">
                                    <img className="h-10 w-10 text-[13px]" src={itemDetails.smil_imgSrc} alt="smile"/>
                                    <h2 className="font-bold">20000+</h2>
                                    <p className="">with every order</p>
                                </div>
                                <div className="box flex flex-col items-center">
                                    <img className="h-10 w-10 text-[13px]" src={itemDetails.clock_imgSrc} alt="clock"/>
                                    <h2 className="font-bold">20000+</h2>
                                    <p className="">lasting</p>
                                </div>
                                <div className="box flex flex-col items-center">
                                    <img className="h-10 w-10 text-[13px]" src={itemDetails.truck_imgSrc} alt="truck"/>
                                    <h2 className="font-bold">20000+</h2>
                                    <p className="">$easy Return Policy</p>
                                </div>
                            </div>
                        </div>
                        <p>Categories: French New Arrivals</p>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}