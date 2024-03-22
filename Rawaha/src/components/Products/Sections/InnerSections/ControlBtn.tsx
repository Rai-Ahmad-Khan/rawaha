// import SampleAPI from '../../../../../SampleAPI.json';
export default function ControlBtns (props:any) {
    const {getSelected}=props
   
    // Define other functions here for different options...
    


    return (
        <>
        <div className="control-btns flex justify-between ">
                    <div className="left">
                        <div className="grid-btns w-[130px] justify-center py-2 pr-4 border border-gray-300 flex gap-3">
                            <div className="flex gap-[2px]">
                                <div className="grid gap-[2px]">
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                </div>
                                <div className="grid gap-[2px]">
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                </div>
                            </div>
                            <div className="flex gap-[2px]">
                                <div className="grid gap-[2px]">
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                </div>
                                <div className="grid gap-[2px]">
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                </div>
                                <div className="grid gap-[2px]">
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                </div>
                            </div>
                            <div className="flex gap-[2px]">
                                <div className="grid gap-[2px]">
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                </div>
                                <div className="grid gap-[2px]">
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                </div>
                                <div className="grid gap-[2px]">
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                </div>
                                <div className="grid gap-[2px]">
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                </div>
                            </div>
                            <div className="flex gap-[2px]">
                                <div className="grid gap-[2px]">
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                    <div className="h-1 w-1 bg-gray-400"></div>
                                </div>
                                <div className="grid items-center gap-[2px]">
                                    <div className="h-[2px] w-1 bg-gray-400 after:h-[2px] after:w-5 after:block after:pl-1 after:bg-gray-400"></div>
                                    <div className="h-[2px] w-1 bg-gray-400 after:h-[2px] after:w-5 after:block after:pl-1 after:bg-gray-400"></div>
                                    <div className="h-[2px] w-1 bg-gray-400 after:h-[2px] after:w-5 after:block after:pl-1 after:bg-gray-400"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search-dropdown m-1 relative flex text-sm border-b-2 border-gray-300 items-center justify-center h-[40px] w-[120px]">
                    <select
                        id="cars"
                        name="cars"
                        className='bg-white focus:outline-none p-2 cursor-pointer text-gray-500 hover:bg-yellow-50 hover:text-yellow-400 w-52 shadow-xl'
                        onChange={(event) => getSelected(event.target.value)}
                    >

                        <option value="A to B" className="p-3">A to B</option>
                        <option value="B to A" className="p-3">B to A</option>
                        <option value="Price Low to High" className="p-2">Price Low to High</option>
                        <option value="Price High to Low" className="p-2">Price High to Low</option>
                        <option value="Date New To Old" className="p-2">New To Old</option>
                        <option value="Date Old TO New" className="p-2">Old TO New</option>
                        <option value="Best Selling" className="p-2">Best Selling</option>
                        <option value="Featured" className="p-2">Featured</option>

                    </select>

                    </div>
        </div>
        </>
    )}
