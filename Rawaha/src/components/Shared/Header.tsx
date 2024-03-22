import SampleAPI from '../../../SampleAPI.json';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Header() {

  const headerData = SampleAPI.Header;
  const products = SampleAPI.products.category.newArival;
  const products_2 = SampleAPI.category2;

  const location = useLocation();
  const [scrollingUp, setScrollingUp] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScrollingUp(scrolled > 0 && scrolled < window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  

  // For Different Header On Different Pages 
  let customClass = '';
  let image = '';

  if (location.pathname === '/') {
    customClass = '';
    image = `/src/assets/images/${headerData[0].image}`;
  } else if (location.pathname.includes('products')) {
    customClass = 'bg-[#333333]';
    image = `/src/assets/images/${headerData[0].Sticky_image}`;
  }
  else if (location.pathname.includes("itemDetails")) {
    customClass = 'bg-[#333333]';
    image = `/src/assets/images/${headerData[0].Sticky_image}`;
  } else {
    customClass = '';
    image = `/src/assets/images/${headerData[0].image}`;
  }
  


// For Loop Rendering of Menu items
  const renderMenuItems = (items:any) => (
    <ul className={`hidden sm:flex sm:items-center sm:justify-between sm:gap-7 text-sm font-medium ${scrollingUp ? 'text-black' : ''} `}>
      {items.map((item:any) => (
        <li key={item.text}>
         <NavLink to={item.href} className={item.submenuIcon ? "relative" : ""}>
            {item.text}
            {item.submenuIcon && (
              <img
                className="absolute top-1/2 -right-3 transform -translate-y-1/3"
                src={`/src/assets/images/${scrollingUp ? item.color_submenuIcon : item.submenuIcon}`}
                alt="Down"
              />
            )} 
         </NavLink>
        </li>
      ))}
    </ul>
  );

  // Side-Bar


  
  
const HandalSidebar1 =()=> {
  var menuBar = document.querySelector('.searchside');
  if (menuBar) {
      if (!menuBar.classList.contains('sideBar')) {
          menuBar.classList.add('sideBar');
      } else {
          menuBar.classList.remove('sideBar');
      }
  } 
}
const HandalSidebar2 =()=>  {
  var menuBar = document.querySelector('.userside');
  if (menuBar) {
      if (!menuBar.classList.contains('sideBar')) {
          menuBar.classList.add('sideBar');
      } else {
          menuBar.classList.remove('sideBar');
      }
  } 
}
const HandalSidebar3 =()=>  {
  var menuBar = document.querySelector('.shoppingside');
  if (menuBar) {
      if (!menuBar.classList.contains('sideBar')) {
          menuBar.classList.add('sideBar');
      } else {
          menuBar.classList.remove('sideBar');
      }
  } 
}


  return (
    <>
      <header className={`z-30 relative ${customClass} ${scrollingUp ? 'bg-white' : ''} ${scrollingUp ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
        <div className="inner-header relative h-32 px-5 mx-auto flex items-center justify-between text-white">
          <Link to="/" className="logo absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img className="w-32" src={`${scrollingUp ? '/src/assets/images/'+headerData[0].Sticky_image : image}`} alt="Logo" />
          </Link>
          <div className="left flex algin-center gap-x-32">
            <div className="hidden sm:hidden flex items-center lg::header-menu lg:flex lg:items-center">
              {renderMenuItems(headerData[1].menu_items)}
            </div>
            <span className="mobile-menu-btn lg:hidden">
              <img src="/src/assets/images/menu (1).svg" alt="burger" />
            </span>
          </div>


          <div className="flex justify-end over">
                <ul className="flex text-white gap-5 text-sm items-baseline">
                    <li><a href="#" onClick={HandalSidebar1} ><img src={`/src/assets/images/${scrollingUp ? headerData[2].Sticky_image : headerData[2].image }`} alt="icon"/></a></li>
                    <li><a href="#" onClick={HandalSidebar2} ><img src={`/src/assets/images/${scrollingUp ? headerData[3].Sticky_image : headerData[3].image }`}  alt="icon"/></a></li>
                    <li><a href="#" onClick={HandalSidebar3} className="relative"><img src={`/src/assets/images/${scrollingUp ? headerData[4].Sticky_image : headerData[4].image }`}  alt="icon"/>
                        <span className="absolute right-[-12px] top-[-12px] h-5 w-5 bg-white rounded-full text-black flex items-center justify-center">{headerData[4].notification?.count}</span> </a></li>
                        <li className={`amount hidden sm:block ${scrollingUp ? 'text-black': ''}`}><a href="#">{headerData[4].amount}</a></li>
                    </ul>
                    <div className=" absolute md:fixed z-50 h-[100vh] bg-white w-[100%] md:w-[40%] top-0 right-0 translate-x-[100%] transition-all duration-1000 searchside">
                        <a href="#" className="m-3 mt-2 absolute right-0" onClick={HandalSidebar1}><img className="h-8 w-8 p-2 flex justify-center items-center rounded-full bg-slate-100" src="./images/x (1).svg" alt=""/></a>
                        <div className="mt-14 ">
                            <div className=" flex gap-4 c-w">
                                <select className="border-b-2 pb-1 text-gray-400 cursor-pointer outline-none">
                                    <option value="All" >All category </option>
                                    <option value="Fetured">Fetured</option>
                                    <option value="Best Sellers">Best Sellers</option>
                                  </select>
                                  <div className=" border border-t-0 border-x-0 border-b-slate-400 pb-1 w-[-webkit-fill-available]">
                                    <input className="border-none outline-none p-2 text-xl w-full" placeholder="SEARCH" type="text" name="" id=""/>
                                  </div>
                            </div>
                            <h2 className="self-center text-center text-sm py-4 border-y mt-12 shadow-lg shadow-bottom">Need some inspiration?</h2>
                        </div>
                        <div className="h-[350px] overflow-y-auto text-gray-400 ">
                            <div className="grid grid-cols-3 gap-5 c-w mt-5 ">
                                <div className=" relative">
                                    <img src=  {products_2.items[0].image} alt="image" className="transition-opacity rounded-sm duration-300 opacity-100 hover:opacity-0"/>
                                    <img src=  {products.items[0].image} alt="image" className="bg-black rounded-sm overflow-hidden transition-opacity duration-1000 opacity-0 hover:opacity-100 absolute inset-0"/>
                                    <div>
                                        <h2 className="text-sm text-center mt-1">Ruby Oud - Impression of Purple Oud</h2>
                                        <p className="text-center text-sm text-gray-500 mt-1">From Rs.6,000.00 </p>
                                    </div>
                                </div>
                                <div className=" relative">
                                    <img src={products_2.items[0].image} alt="image" className="transition-opacity rounded-sm duration-300 opacity-100 hover:opacity-0"/>
                                    <img src=  {products.items[0].image} alt="image" className="bg-black rounded-sm overflow-hidden transition-opacity duration-1000 opacity-0 hover:opacity-100 absolute inset-0"/>
                                    <div>
                                        <h2 className="text-sm text-center mt-1">Ruby Oud - Impression of Purple Oud</h2>
                                        <p className="text-center text-sm text-gray-500 mt-1">From Rs.6,000.00 </p>
                                    </div>
                                </div>
                                <div className=" relative">
                                    <img src={products_2.items[0].image} alt="image" className="transition-opacity rounded-sm duration-300 opacity-100 hover:opacity-0"/>
                                    <img src=  {products.items[0].image} alt="image" className="bg-black rounded-sm overflow-hidden transition-opacity duration-1000 opacity-0 hover:opacity-100 absolute inset-0"/>
                                    <div>
                                        <h2 className="text-sm text-center mt-1">Ruby Oud - Impression of Purple Oud</h2>
                                        <p className="text-center text-sm text-gray-500 mt-1">From Rs.6,000.00 </p>
                                    </div>
                                </div>
                                <div className=" relative">
                                    <img src={products_2.items[0].image} alt="image" className="transition-opacity rounded-sm duration-300 opacity-100 hover:opacity-0"/>
                                    <img src=  {products.items[0].image} alt="image" className="bg-black rounded-sm overflow-hidden transition-opacity duration-1000 opacity-0 hover:opacity-100 absolute inset-0"/>
                                    <div>
                                        <h2 className="text-sm text-center mt-1">Ruby Oud - Impression of Purple Oud</h2>
                                        <p className="text-center text-sm text-gray-500 mt-1">From Rs.6,000.00 </p>
                                    </div>
                                </div>
                                <div className=" relative">
                                    <img src={products_2.items[0].image} alt="image" className="transition-opacity rounded-sm duration-300 opacity-100 hover:opacity-0"/>
                                    <img src=  {products.items[0].image} alt="image" className="bg-black rounded-sm overflow-hidden transition-opacity duration-1000 opacity-0 hover:opacity-100 absolute inset-0"/>
                                    <div>
                                        <h2 className="text-sm text-center mt-1">Ruby Oud - Impression of Purple Oud</h2>
                                        <p className="text-center text-sm text-gray-500 mt-1">From Rs.6,000.00 </p>
                                    </div>
                                </div>
                                <div className=" relative">
                                    <img src={products_2.items[0].image} alt="image" className="transition-opacity rounded-sm duration-300 opacity-100 hover:opacity-0"/>
                                    <img src=  {products.items[0].image} alt="image" className="bg-black rounded-sm overflow-hidden transition-opacity duration-1000 opacity-0 hover:opacity-100 absolute inset-0"/>
                                    <div>
                                        <h2 className="text-sm text-center mt-1">Ruby Oud - Impression of Purple Oud</h2>
                                        <p className="text-center text-sm text-gray-500 mt-1">From Rs.6,000.00 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="c-w mt-2 py-2 text-black  hover:text-[#c8a565] transition-all 1000 ">
                            <a className="flex items-center gap-2" href="#">View all <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        </div>
                    </div>

                    <div className=" absolute md:fixed z-50 h-[100vh] bg-white w-[100%] md:w-[25%] top-0 right-0 translate-x-[100%] transition-all duration-1000 userside">
                        <a href="#" className="m-3 mt-2 absolute right-0" onClick={HandalSidebar2}><img className="h-8 w-8 p-2 flex justify-center items-center rounded-full bg-slate-100" src="./images/x (1).svg" alt=""/></a>
                        <div className="mt-8">
                            <div className="flex justify-center">
                                <div className="w-[60%] border-b-2 text-center border-black">
                                    <h1 className=" text-xs text-black pb-2">SIGN IN</h1>
                                </div>
                            </div>
                        </div>
                        <div className="c-w">
                            <div className="c-w mt-9">
                                <input className="border border-solid w-full h-14 my-2 px-2" type="text" placeholder="Email*"/>
                                <input className="border border-solid w-full h-14 my-2 px-2" type="password" placeholder="Password*"/>
                                <div className="my-5">
                                    <a href="#" className="border-b-2 text-black border-black mt-8">Lost your password?</a>
                                </div>
                            </div>
                            <div className="c-w my-3">
                                <a href="#" className="h-14 w-full bg-black flex justify-center items-center text-white">Login</a>
                            </div>
                            <div className="c-w my-1">
                                <a href="#" className="h-14 w-full bg-gray-300 flex justify-center items-center text-white">Create Account</a>
                            </div>
                        </div>
                    </div>
                    <div className=" absolute md:fixed z-50 h-[100vh] bg-white w-[100%] md:w-[40%] top-0 right-0 translate-x-[100%] transition-all duration-1000 shoppingside">
                        <a href="#" className="m-3 mt-2 absolute right-0" onClick={HandalSidebar3}><img className="h-8 w-8 p-2 flex justify-center items-center rounded-full bg-slate-100" src="./images/x (1).svg" alt=""/></a>
                    </div>
                </div>



        </div>
      </header>
    </>
  );
}