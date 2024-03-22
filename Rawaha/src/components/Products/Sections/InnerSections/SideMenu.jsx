export default function SideMenu (props) {
    const {getClick, handleCheckboxChange, outOfStockChecked, stockChecked, organizedData, getInput}= props
    return (
        <>
        <div className="side-menu-bar hidden lg:block sm:w-[300px]">
            <div className="lower-part flex flex-col justify-between">
                

            <div className="flex flex-col gap-4 border-b border-gray-300 pt-3 pb-10">
                {Object.keys(organizedData).map((type, index) => (
                    <div key={index}>
                        <h2 className="text-black text-[14px]">{type}</h2>
                        <ul className="hidden sm:flex flex-col gap-2 text-[12px] text-gray-500">
                            {Object.keys(organizedData[type]).map((category, categoryIndex) => (
                            <li key={categoryIndex} onClick={()=>{getClick("category", category)}} className="cursor-pointer">
                                {category} ({organizedData[type][category].length})
                            </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
                <div className="flex flex-col gap-4 border-b border-gray-300 py-10">
                    <h2 className="text-black text-[14px]">Gender</h2>
                    <ul className="hidden sm:flex flex-col gap-2 text-[12px] text-gray-500">
                        <li className="cursor-pointer" onClick={()=>{getClick("gender", "Male")}}>Male</li>
                        <li className="cursor-pointer" onClick={()=>{getClick("gender", "Female")}} >Female</li>
                        <li className="cursor-pointer" onClick={()=>{getClick("gender", "Unisex")}} >Unisex</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 border-b border-gray-300 py-10">
                    <h2 className="text-black text-[14px]">Series</h2>
                    <ul className="hidden sm:flex flex-col gap-2 text-[12px] text-gray-500">
                        <li className="cursor-pointer" onClick={()=>{getClick("series", "Signature")}}>Signature</li>
                        <li className="cursor-pointer" onClick={()=>{getClick("series", "Exclusive")}} >Exclusive</li>
                        <li className="cursor-pointer" onClick={()=>{getClick("series", "Prive")}} >Prive</li>
                        <li className="cursor-pointer" onClick={()=>{getClick("series", "special_blends")}} >Special Blends</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 border-b border-gray-300 py-10">
                    <h2 className="text-black text-[14px]">AVAILABILITY</h2>
                    <ul className="hidden sm:flex flex-col gap-2 text-[12px] text-gray-500">
                        <li><a className="text-gray-500 text-sm"><label>
                            <input type="checkbox"  name="inStock" checked={stockChecked} onChange={handleCheckboxChange}/>
                            In Stock
                        </label></a></li>
                        <li><a className="text-gray-500 text-sm"><label>
                            <input type="checkbox" name="outOfStock" checked={outOfStockChecked} onChange={handleCheckboxChange}/>
                            Out Of Stock
                        </label></a></li>
                    </ul>
                </div>                  
                <div className="flex flex-col gap-4 border-b border-gray-300 py-10">
                    <h2 className="text-gray-800 font-medium text-sm">Price</h2>
                    <div className="py-3">
                        
                            <ul>
                                {/* <li><input type="range" className="h-1 w-full bg-black" id="dualRange" name="dualRange" min="0" max="100" value="50"/></li> */}
                                <li className="text-gray-800 text-sm">Price: Between
                                    <input className="p-2 m-2 focus:outline-none w-12 h-8 bg-gray-200" type="text" id="starting" />
                                    to
                                    <input className="p-2 m-2 focus:outline-none w-12 h-8 bg-gray-200" type="text" id="ending" />
                                </li>
                            </ul>
                            <button className="my-6 text-[#CAA96D] border border-[#CAA96D] py-3 px-10 font-bold rounded " onClick={getInput}>Filter</button>
                        
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}