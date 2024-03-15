
import SampleAPI from '../../../SampleAPI.json';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function ColorHeader () {
    const headerData = SampleAPI.Header;
    const stickyHeaderData = SampleAPI.StickyHeader;


    const renderMenuItems = (items) => (
        <ul className="hidden sm:flex sm:items-center sm:justify-between sm:gap-7 text-sm font-medium">
          {items.map((item) => (
            <li key={item.text}>
             <NavLink to={item.href} className={item.submenuIcon ? "relative" : ""}>
                {item.text}
                {item.submenuIcon && (
                  <img
                    className="absolute top-1/2 -right-3 transform -translate-y-1/3"
                    src={item.submenuIcon}
                    alt="Down"
                  />
                )} 
             </NavLink>
            </li>
          ))}
        </ul>
      );


    return (
        
        <>
        <header className="z-30 relative bg-[#333333]">
        <div className="inner-header relative h-32 px-5 mx-auto flex items-center justify-between text-white">
          <Link to={headerData[1].href} className="logo absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img className="w-32" src={headerData[0].imageSrc} alt="Logo" />
          </Link>
          <div className="left flex algin-center gap-x-32">
            <div className="hidden sm:hidden flex items-center lg::header-menu lg:flex lg:items-center">
              {renderMenuItems(headerData[1].menu_items)}
            </div>
            <span className="mobile-menu-btn lg:hidden">
              <img src="./images/menu (1).svg" alt="burger" />
            </span>
          </div>
          <div className="right flex items-center justify-between gap-4 sm:right sm:flex sm:items-center sm:justify-between sm:gap-4 text-sm">
            <a href="#">
              <img src={headerData[2].imageSrc} alt="search" />
            </a>
            <a href="#" className="hidden sm:block">
              <img src={headerData[3].imageSrc} alt="user" />
            </a>
            <a href="#" className="relative flex items-center gap-4">
              <img src={headerData[4].imageSrc} alt="shopping-bag" />
              <span className="notification h-4 w-4 bg-white flex items-center text-black justify-center rounded-full absolute -top-3 -right-3 sm:-top-1 sm:right-12 sm:transform sm:-translate-y-1/3">{headerData[4].notification.count}</span>
              <span className="amount hidden sm:block">{headerData[4].amount}</span>
            </a>
          </div>
        </div>
        {/* // Sticky Header */}
        <div className="sticky-inner-header hidden relative h-32 px-5 mx-auto flex items-center justify-between bg-white text-black">
          <a className="logo absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img className="w-32" src={stickyHeaderData[0].imageSrc} alt="Logo" />
          </a>
          <div className="left flex algin-center gap-x-32">
            <div className="hidden sm:hidden flex items-center lg::header-menu lg:flex lg:items-center">
              {renderMenuItems(stickyHeaderData[1].items)}
            </div>
            <span className="mobile-menu-btn lg:hidden">
              <img src="./images/menu (1).svg" alt="burger" />
            </span>
          </div>
          <div className="right flex items-center justify-between gap-4 sm:right sm:flex sm:items-center sm:justify-between sm:gap-4 text-sm">
            <a href="#">
              <img src={stickyHeaderData[2].imageSrc} alt="search" />
            </a>
            <a href="#" className="hidden sm:block">
              <img src={stickyHeaderData[3].imageSrc} alt="user" />
            </a>
            <a href="#" className="relative flex items-center gap-4">
              <img src={stickyHeaderData[4].imageSrc} alt="shopping-bag" />
              <span className="notification h-4 w-4 bg-white flex items-center text-black justify-center rounded-full absolute -top-3 -right-3 sm:-top-1 sm:right-12 sm:transform sm:-translate-y-1/3 shadow-lg">{stickyHeaderData[4].notification.count}</span>
              <span className="amount hidden sm:block">{stickyHeaderData[4].amount}</span>
            </a>
          </div>
        </div>
      </header>
        </>
    )
}