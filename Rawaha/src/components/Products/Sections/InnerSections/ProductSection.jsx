import ControlBtns from "./ControlBtn"
import SideMenu from "./SideMenu"
import SingleItem from "../../../Shared/SingleItem"
import data from '../../../../../data.json'
import { useCallback, useEffect, useState } from "react";

export default function ProductSection () {

    const products = data;

    const [jsonData, setJsonData] = useState(products);
    const [stockChecked, setStockChecked] = useState(false);
    const [outOfStockChecked, setOutOfStockChecked] = useState(false);


    // OverAll Data Organizing
    const organizedData = {};
    products.products.forEach((product) => {

        if (!organizedData[product.type]) {
            organizedData[product.type] = {};
        }

        if (!organizedData[product.type][product.category]) {
            organizedData[product.type][product.category] = [];
        }

        organizedData[product.type][product.category].push(product);
    });

    // Handling the redering of categories
    const handleClickFromChild = useCallback((filter, name, ) => {
        let newData = products.products.filter((item) => item[filter] == name);
        setJsonData({"products": newData})
    }, [])
  
    // Check Box Funcationality
    useEffect(() => {
        if (stockChecked) {

            const newData = products.products.filter(item => item.stock > 0);
            setJsonData({ "products": newData });

        } else if (outOfStockChecked) {

            const newData = products.products.filter(item => item.stock == 0);
            setJsonData({ "products": newData });

        } else {
            // Handling the default redering of the products
            setJsonData(products);
        }

    }, [stockChecked, outOfStockChecked, products]);
  
    function handleCheckboxChange(event) {
        const { name, checked } = event.target;
        if (name === 'inStock') {
            setStockChecked(checked);
        } else if (name === 'outOfStock') {
            setOutOfStockChecked(checked);
        }
    }

    // Search By Price Filter
    function getInput () {
        let start = parseFloat(document.getElementById("starting").value)
        let ending = parseFloat(document.getElementById("ending").value)
        if (!isNaN(start) && !isNaN(ending) && start < ending){
            let newData= products.products.filter(item=> item.price.discounted >= start && item.price.discounted <= ending)
            setJsonData({ "products": newData });
        }
    }

    
    //Sorting

    //Sorting Functionality
      function handleSelectChange(selectedValue) {
        switch (selectedValue) {
            case "A to B":
                sortAlphabatically("asc")
                break;
            case "B to A":
                sortAlphabatically("desc")
                break;
            case "Price Low to High":
                sortPrice("asc");
                break;
            case "Price High to Low":
                sortPrice("desc");
                break;
            case "Best Selling":
                sortByDate("asc");
                break;
            case "Date New To Old":
                sortByDate("desc");
                break;
            case "Date Old TO New":
                // function();
                break;
            case "Featured":
                // function();
                break;
            default:
                // Handle default case
                break;
        }
    }
    
    // Sorted Alphabatically 
    function sortAlphabatically(sortOrder) {
        const sorted = [...jsonData.products]; 
    
        sorted.sort((a, b) => {
            
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
    
            if (sortOrder === 'asc') { 
                if (titleA < titleB) return -1;
                if (titleA > titleB) return 1;
            } else if (sortOrder === 'desc') {
                if (titleA > titleB) return -1;
                if (titleA < titleB) return 1;
            }
    
            return 0;
        });
    
        setJsonData({ "products": sorted});
    }
        
    // Sort By Price
    function sortPrice(sortOrder) {
        const sorted = [...jsonData.products]; 
    
        sorted.sort((a, b) => {
            const priceA = a.price.discounted;
            const priceB = b.price.discounted;
    
            if (sortOrder === 'asc') {
                return priceA - priceB;
            } else if (sortOrder === 'desc') {
                return priceB - priceA;
            }
    
            return 0;
        });
    
        setJsonData({ "products": sorted });
    }

    // Sort By Created Date
    function sortByDate(sortOrder) {
        const sorted = [...jsonData.products];
    
        sorted.sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
    
            if (sortOrder === 'desc') {
                return dateB - dateA; // Sort by descending order (new to old)
            } else if (sortOrder === 'asc') {
                return dateA - dateB; // Sort by ascending order (old to new)
            }
    
            return 0;
        });
    
        setJsonData({ products: sorted });
    }
   

    return (
        <>
         <div className="products-section ">
            <div className="inner-products-section max-w-[84rem] mx-auto px-5 mt-10">
                <ControlBtns getSelected={handleSelectChange}/>

                <div className="product-portion  sm:block sm:grid grid">
                
                    <SideMenu 
                        organizedData={organizedData}
                        getClick={handleClickFromChild}
                        handleCheckboxChange={handleCheckboxChange}
                        stockChecked={stockChecked}
                        outOfStockChecked={outOfStockChecked}
                        getInput={getInput}
                    />
                
                    <div className="right">
                        <div className="products new-category grid sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
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
            </div>
        </div>
        </>
    )
}