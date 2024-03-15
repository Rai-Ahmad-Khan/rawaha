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

    console.log(jsonData)

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        // let cat = [];
        // products.products.map(item => {
        //     cat.push(item.category)
        // });

        // cat = [...new Set(cat)]
        // console.log(cat)
        // setCategories(cat);

        const categoryCounts = {};

        products.products.forEach(item => {
            categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
        });

        const result = Object.entries(categoryCounts).map(([n, l]) => ({ name: n, length: l }));


        setCategories(result)
    }, [])

    // const [clickCount, setClickCount] = useState(0);

    const handleClickFromChild = useCallback((name) => {
        let newData = products.products.filter((item) => item.category == name);
        console.log(newData)
        setJsonData({"products": newData})
    }, [])

    // const handleClickFromChild = (name) => {
    //     let newData = products.products.filter((item) => item.category == name);
    //     console.log(newData)
    //     setJsonData({"products": newData})
    // }

    return (
        <>
         <div className="products-section ">
            <div className="inner-products-section max-w-[84rem] mx-auto px-5 mt-10">
                <ControlBtns/>

                <div className="product-portion  sm:block sm:grid grid">
                
                    <SideMenu categories={categories} getClick={handleClickFromChild} />
                
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