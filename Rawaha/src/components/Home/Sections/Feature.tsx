
export default function Feature () {

   

    return (
        <>
       <div className="feature-section mt-36">
        <div className="inner-feature bg-[#f7f7f7] max-w-[84rem] mx-auto sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4 lg:h-48  ">
            <a className="Money-Back p-5 h-345 flex justify-center items-center gap-5 sm:gap-5 sm:after:content-[''] sm:after:h-16 sm:after:w-[1px] sm:after:bg-gray-500">
                <img src="/src/assets/images/check-square.svg" alt="#"/>
                <div className="content">
                    <span className="text-base font-medium">Money-Back Guarantee</span>
                    <p className="text-sm font-normal text-gray-500">We return the money within 30 days</p>
                </div>
            </a>
            <a className="Fast-Shipping p-5 h-345 flex justify-center items-center gap-5 sm:gap-5 lg:after:content-[''] lg:after:h-16 lg:after:w-[1px] lg:after:bg-gray-500">
                <img src="/src/assets/images/truck.svg" alt="#"/>
                <div className="content">
                    <span className="text-base font-medium">Fast & Free Shipping</span>
                    <p className="text-sm font-normal text-gray-500">Offering Free Delivery on Orders above Rs. 5000</p>
                </div>
            </a>
            <a className="24-Support p-5 h-345 flex justify-center items-center gap-5 sm:gap-5 sm:after:content-[''] sm:after:h-16 sm:after:w-[1px] sm:after:bg-gray-500">
                <img src="/src/assets/images/headphones.svg" alt="#"/>
                <div className="content">
                    <span className="text-base font-medium">24/7 Customer Support</span>
                    <p className="text-sm font-normal text-gray-500">Our Support Team is Ready For You 7 days a week</p>
                </div>
            </a>
            <a className="Promising-Quality p-5 h-345 flex justify-center items-center gap-5 sm:gap-5 ">
                <img src="/src/assets/images/thumbs-up.svg" alt="#"/>
                <div className="content">
                    <span className="text-base font-medium">Promising Quality</span>
                    <p className="text-sm font-normal text-gray-500">All our category assure the utmost quality</p>
                </div>
            </a>
        </div>
        </div>
        </>
    )

}