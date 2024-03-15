import { Link } from 'react-router-dom';
import SampleAPI from '../../../../SampleAPI.json';

export default function Category2() {
  const items = SampleAPI.category2.items;

  return (
    <>
      <div className="category-section-2 m-20">
        <div className="inner-category-2 max-w-[84rem] mx-auto flex gap-4 justify-center items-center px-5">
          {items.map((item, index) => (
            <div key={index} className="item w-[200px] text-sm flex gap-2 flex-col relative">
              <Link to="/itemDetails">
                <img className="h-[200px] rounded-md w-full" src={item.imageSrc} alt="items" />
              </Link>
              <p className="place-self-center">{item.category}</p>
              <div className="circles group w-[128px] absolute custom-left top-[230px] transition-transform ease-in-out duration-300">
                <a className="h-8 w-8 flex justify-center items-center group-hover:transition-all duration-1000 text-gray-600 bg-gray-300 absolute transform translate-x-5 group-hover:translate-x-[2px] hover:border-gray-900 z-[100] rounded-full border-gray-100 border-2" href={item.circles[0].href}>{item.circles[0].content}</a>
                <a className="h-8 w-8 group-hover:transition-all duration-1000 absolute transform translate-x-9 z-[70] " href={item.circles[1].href}><img className="rounded-full border-gray-100 border-2 hover:border-gray-900" src={item.circles[1].imageSrc} alt="#"/></a>
                <a className="h-8 w-8 group-hover:transition-all duration-1000 absolute transform translate-x-12 group-hover:translate-x-[70px] z-[50]" href={item.circles[2].href}><img className="rounded-full border-gray-100 border-2 hover:border-gray-900" src={item.circles[2].imageSrc} alt="#"/></a>
                <a className="h-8 w-8 group-hover:transition-all duration-1000 absolute transform translate-x-14 group-hover:translate-x-[105px] z-[10]" href={item.circles[3].href}><img className="rounded-full border-gray-100 border-2 hover:border-gray-900" src={item.circles[3].imageSrc} alt="#"/></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
