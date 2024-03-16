import ControlBtns from "./ControlBtn"
import SideMenu from "./SideMenu"
import SingleItem from "../../../Shared/SingleItem"
import data from '../../../../../data.json'
import { useCallback, useEffect, useState } from "react";



export default function ProductSection () {
    const products = data;

    const [jsonData, setJsonData] = useState(products);

    useEffect(() => {
        setJsonData(products); 
    }, []); 

    const handleClickFromChild = useCallback((name) => {
        let newData = products.products.filter((item) => item.category == name);
        setJsonData({"products": newData})
    }, [])
    


      // Organize the data by type, then by category, and then by items within each category
      const organizedData = products.products.reduce((acc, product) => {
        // Initialize an empty object for the current product type if it doesn't exist
        if (!acc[product.type]) {
          acc[product.type] = {};
        }
        
        // Initialize an empty array for the current product category if it doesn't exist
        if (!acc[product.type][product.category]) {
          acc[product.type][product.category] = [];
        }
        
        // Push the current product into the array corresponding to its category
        acc[product.type][product.category].push(product);
        
        return acc;
      }, {});
      
      console.log(organizedData);
      


    return (
        <>
         <div className="products-section ">
            <div className="inner-products-section max-w-[84rem] mx-auto px-5 mt-10">
                <ControlBtns/>

                <div className="product-portion  sm:block sm:grid grid">
                
                    <SideMenu organizedData={organizedData} getClick={handleClickFromChild} />
                
                    <div className="right">
                        <div className="products new-category grid sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
                        {
                            (jsonData && jsonData?.products) ? 

                                jsonData.products.map((item, index) => (   
                                    <SingleItem 
                                        key={index}
                                        id={item.id}
                                        imageSrc={item.imageSrc}
                                        price={item.price}
                                        sizes={item.sizes}
                                        title={item.title}
                                    />
                                ))
                                :
                                null
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}