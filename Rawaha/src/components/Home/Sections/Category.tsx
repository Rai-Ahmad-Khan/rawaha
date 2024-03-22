import SingleItem from "../../Shared/SingleItem"
// import SampleAPI from '../../../../SampleAPI.json'
import data from '../../../../data.json'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Category () {
    const products = data
    const [jsonData, setJsonData] = useState([]);
    // const category = SampleAPI.categoryPortion;
    // let product_category = [];

    // For New Arrival to be rendered as default
    useEffect(() => {
        newArival(30)
    }, []);
    
    // const handleClick = (filter, name)=> {

    //     let newData = products.products.filter((item) => item[filter] == name);
    //     setJsonData({"products": newData})
    // }


   
    const newArival = (parameter:number) => {
        let currentDate = new Date();
        let fiveDaysAgo = new Date(currentDate.getTime() - (parameter * 24 * 60 * 60 * 1000));
        const newArrivals = products.products.filter(item => {
            const createdAtDate = new Date(item.createdAt);
            return createdAtDate >= fiveDaysAgo;
        });
        console.log(newArrivals);
        setJsonData({ "products": newArrivals });
    }
    const bestSelling = () => {
       
        const best_Seller = products.products.filter(item =>item.totalReview >=120 ) 
        console.log(best_Seller);
        setJsonData({ "products": best_Seller});
    }
    

  
   
    return (
        <>
        <div className="product-section">
        <div className="inner-product  max-w-[84rem] mx-auto">
                <div className="category-portion px-5 h-40 sm:h-28 flex items-end justify-around sm:justify-between sm:h-40  gap-4 flex-wrap">
                    <div className="categories flex h-20 gap-4 mb-2">
                        <button onClick={()=>newArival(30)}  className="new-arrival cursor-pointer px-4 category grid justify-center">
                            <img className="justify-self-center" src="/src/assets/images/OriginalCreation.png"  alt="Badge"/>
                            New Arrivals
                        </button>                   
                        <button onClick={()=>bestSelling()}   className="best_seller cursor-pointer  px-4 category grid justify-center">
                            <img className="justify-self-center" src="/src/assets/images/Best_Sellers.png"  alt="Badge"/>
                            Best Sellers
                        </button>                   
                        <button onClick={()=>newArival(10)}  className="re_stocked cursor-pointer  px-4 category grid justify-center">
                            <img className="justify-self-center" src="/src/assets/images/Restocked.png"  alt="Badge"/>
                            Just Restocked
                        </button>                   
                    </div>
                    <Link className="place-self-end mb-4 h-10 w-60 flex justify-center items-center border border-solid border-[#c19e66]" to="/products">Explore More All Products <img src="/src/assets/images/arrow-right (1).svg" alt="Arrow"/></Link>                
                </div>
                <div className="new-category flex flex-wrap gap-4 justify-center border-t border-solid border-gray-300">                  

                    {
                        (jsonData && jsonData?.products) ? 

                            jsonData.products.map((item) => (   
                                <SingleItem key={item.id} data={item}/>
                            ))

                            :

                            null
                    }  
                </div>
            </div>
        </div>
        </>
    )
}

// onClick={()=>newArival()} 
// onClick={()=>handleClick("Best Seller")} 
// onClick={()=>handleClick('Re Stocked')}
 // Section Size
    //   const generateSingleItems = () => {
    //     const items = [];
    //     for (let i = 0; i< 10; i++) {
    //       items.push();
    //     }
    //     return items;
    //   };