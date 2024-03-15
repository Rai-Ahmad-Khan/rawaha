export default function SideMenu ({categories, getClick}) {

    // const getData = (cat:any) => {
    //     console.log(cat)
    // }
   
    console.log(categories)
    return (
        <>
        <div className="side-menu-bar hidden lg:block sm:w-[300px]">
            <div className="lower-part flex flex-col justify-between">

                
                        <div className="flex flex-col gap-4 border-b border-gray-300 pt-3 pb-10">
                            <h2 className="text-black text-[14px]">classNameification</h2>
                            <ul className="hidden sm:flex flex-col gap-2 text-[12px] text-gray-500">
                                {/* <li><a onClick={() => getClick("floral")}>Floral ({total.length})</a></li>
                                <li><a href="#">Fresh (122)</a></li>
                                <li><a href="#">Spicy (106)</a></li>
                                <li><a href="#">Vanilla (58)</a></li>
                                <li><a href="#">Powdery (68)</a></li> */}
                                {
                                    (categories.length > 0) ?

                                        categories.map((item, index) => (
                                            <li><a onClick={() => getClick(item.name)}>{item.name} ({item.length})</a></li>
                                        ))

                                    :

                                    null
                                }
                            </ul>
                        </div>
                        {/* <div className="flex flex-col gap-4 border-b border-gray-300 py-10">
                            <h2 className="text-black text-[14px]">Season</h2>
                            <ul className="hidden sm:flex flex-col gap-2 text-[12px] text-gray-500">
                                <li><a href="#">Fall (334)</a></li>
                                <li><a href="#">Spring (316)</a></li>
                                <li><a href="#">Summer (291)</a></li>
                                <li><a href="#">Winter (330)</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 border-b border-gray-300 py-10">
                            <h2 className="text-black text-[14px]">Occasions</h2>
                            <ul className="hidden sm:flex flex-col gap-2 text-[12px] text-gray-500">
                                <li><a href="#">Formal (315)</a></li>
                                <li><a href="#">Casual (253)</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 border-b border-gray-300 py-10">
                            <h2 className="text-black text-[14px]">Gender</h2>
                            <ul className="hidden sm:flex flex-col gap-2 text-[12px] text-gray-500">
                                <li><a href="#">Male</a></li>
                                <li><a href="#">Female</a></li>
                                <li><a href="#">Unisex</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 border-b border-gray-300 py-10">
                            <h2 className="text-black text-[14px]">Series</h2>
                            <ul className="hidden sm:flex flex-col gap-2 text-[12px] text-gray-500">
                                <li><a href="#">Signature</a></li>
                                <li><a href="#">Exclusif</a></li>
                                <li><a href="#">Prive</a></li>
                                <li><a href="#">Special Blends</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 border-b border-gray-300 py-10">
                            <h2 className="text-black text-[14px]">AVAILABILITY</h2>
                            <ul className="hidden sm:flex flex-col gap-2 text-[12px] text-gray-500">
                                <li><a href="#" className="text-gray-500 text-sm"><label>
                                    <input type="checkbox" name="stock" value="inStock"/>
                                    In Stock
                                </label></a></li>
                                <li><a href="#" className="text-gray-500 text-sm"><label>
                                    <input type="checkbox" name="stock" value="inStock"/>
                                    Out Of Stock
                                </label></a></li>
                            </ul>
                        </div>                  
                        <div className="flex flex-col gap-4 border-b border-gray-300 py-10">
                            <h2 className="text-gray-800 font-medium text-sm">Price</h2>
                            <div className="py-3">
                                <ul>
                                    <li><input type="range" className="h-1 w-full bg-black" id="dualRange" name="dualRange" min="0" max="100" value="50"/></li>
                                    <li><a href="#" className="text-gray-800 text-sm">Price: <span className="text-black font-bold">Rs.0.00</span> —  <span className="text-black font-bold">Rs.23,500.00</span></a></li>
                                </ul>
                                <button className="my-6"><a href="#" className="text-[#CAA96D] border border-[#CAA96D] py-3 px-10 font-bold rounded  ">Filter</a></button>
                            </div>
                        </div> */}
            </div>
        </div>

        </>
    )
}