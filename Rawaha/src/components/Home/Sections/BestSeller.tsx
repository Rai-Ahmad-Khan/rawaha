import React from 'react';
import SampleAPI from '../../../../SampleAPI.json';

export default function BestSeller() {
  const bestSeller = SampleAPI.bestSeller;

  return (
    <>
      <div className="lasting-impression-section bg-[#f7f7f7] mt-20">
        <div className="inner-lasting-impression max-w-[78rem] mx-auto flex justify-between flex-col sm:flex-row">
          <div
            className="right sm:ml-14 w-full sm:w-[550px] bg-cover bg-center h-screen"
            style={{ backgroundImage: `url('${bestSeller.imageSrc}')` }}
          ></div>
          <div className="left-section px-10 py-2 mt-3 sm:mt-0 sm:px-12 w-full sm:w-[550px] grid gap-5 sm:justify-self-end sm:place-self-center">
            <h3 className="text-black font-bold text-[30px] sm:font-extrabold">
              {bestSeller.title}
            </h3>
            <p className="text-gray-500 sm:leading-[40px] text-20 sm:text-[20px] justify-self-center">
              {bestSeller.items.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ' | '}
                  Inspired by{' '}
                  <a className="text-[#c19e66] underline" href={item.href}>
                    {item.name}
                  </a>
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
