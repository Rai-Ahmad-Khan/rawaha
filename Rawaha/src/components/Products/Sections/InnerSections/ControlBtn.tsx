import SampleAPI from '../../../../../SampleAPI.json';
export default function ControlBtns () {
    const icon = SampleAPI.Header[1];
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
                    <div className="search-dropdown relative flex text-sm border-b-2 border-gray-300 items-center justify-center h-[40px] w-[120px]">
                        <select className=" pb-1 text-gray-400 cursor-pointer outline-none">
                            <option value="All" >All category </option>
                            <option value="Fetured">Fetured</option>
                            <option value="Best Sellers">Best Sellers</option>
                        </select>
                        <img className="absolute top-1/2 -right-3 transform -translate-y-1/2 " src={icon.menu_items[1].submenuIcon}alt="drop-arrow"/>
                    </div>
        </div>
        </>
    )
}