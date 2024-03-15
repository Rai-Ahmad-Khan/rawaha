import { useLocation } from 'react-router-dom';
export default function ProductBanner () {
    const location = useLocation();
    return (
        <>
        <div className="product-banner bg-[#c19e66]">
            <div className="inner-product-banner h-80 relative max-w-[84rem] mx-auto">
                <div className="content flex flex-col gap-1 text-[#ffffff] absolute left-1/2 transform -translate-x-1/2 bottom-10">
                    <h1 className="heading text-[44px] font-semibold">PRODUCTS</h1>
                    <div className="sub-headings flex justify-center gap-2">
                        <h2 className="sub-heading text-sm">Home</h2>
                        <span>{">"}</span>
                        <h2 className="sub-heading text-sm">{location.pathname}</h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}