import SingleItem from "../../Shared/SingleItem"
import SampleAPI from '../../../../SampleAPI.json'
import data from '../../../../data.json'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Category () {
    const jsonData = data;
    const category = SampleAPI.categoryPortion;
    let product_category:any = [];

    // For New Arrival to be rendered as default
    useEffect(() => {
        handleClick("New Arrival")
    }, []);

    // Redering Categories by using state
    const [displayData, setDisplayData] = useState([]);
    
    const handleClick = (category:any)=> {

        jsonData.products.forEach(item => {
            if(item.category == `${category}`) {
                product_category.push(item)
            }
        })
        setDisplayData(product_category)
    }
   
    return (
        <>
        <div className="product-section">
        <div className="inner-product  max-w-[84rem] mx-auto">
                <div className="category-portion px-5 h-40 sm:h-28 flex items-end justify-around sm:justify-between sm:h-40  gap-4 flex-wrap">
                    <div className="categories flex h-20 gap-4 mb-2">
                        <button  onClick={()=>handleClick("New Arrival")}  className="new-arrival cursor-pointer px-4 category grid justify-center">
                            <img className="justify-self-center" src={category.categories[0].imageSrc}  alt="Badge"/>
                            {category.categories[0].name} 
                        </button>                   
                        <button onClick={()=>handleClick("Best Seller")}  className="best_seller cursor-pointer  px-4 category grid justify-center">
                            <img className="justify-self-center" src={category.categories[1].imageSrc}  alt="Badge"/>
                            {category.categories[1].name}
                        </button>                   
                        <button  onClick={()=>handleClick('Re Stocked')} className="re_stocked cursor-pointer  px-4 category grid justify-center">
                            <img className="justify-self-center" src={category.categories[2].imageSrc}  alt="Badge"/>
                            {category.categories[2].name}
                        </button>                   
                    </div>
                    <Link className="place-self-end mb-4 h-10 w-60 flex justify-center items-center border border-solid border-[#c19e66]" to="/products">{category.exploreAllLink.text} <img src={category.exploreAllLink.arrowIconSrc} alt="Arrow"/></Link>                
                </div>
                <div className="new-category flex flex-wrap gap-4 justify-center border-t border-solid border-gray-300">                  
                {displayData.map((item:any, index)=> (   
                <SingleItem 
                    key={index}
                    id={item.id}
                    imageSrc={item.imageSrc}
                    price={item.price}
                    sizes={item.sizes}
                    title={item.title}
                    />
                ))}        
                </div>
            </div>
        </div>
        </>
    )
}
 // Section Size
    //   const generateSingleItems = () => {
    //     const items = [];
    //     for (let i = 0; i< 10; i++) {
    //       items.push();
    //     }
    //     return items;
    //   };