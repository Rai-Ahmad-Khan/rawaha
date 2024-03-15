import SampleAPI from '../../../../SampleAPI.json'
export default function Feature () {

    const feature = SampleAPI.Feature

    return (
        <>
        <div className="feature-section mt-36">
        <div className="inner-feature bg-[#f7f7f7] max-w-[84rem] mx-auto sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4 lg:h-48  ">
            <a className="Money-Back p-5 h-345 flex justify-center items-center gap-5 sm:gap-5 sm:after:content-[''] sm:after:h-16 sm:after:w-[1px] sm:after:bg-gray-500">
                <img src={feature[0].imageSrc} alt="#"/>
                <div className="content">
                    <span className="text-base font-medium">{feature[0].title}</span>
                    <p className="text-sm font-normal text-gray-500">{feature[0].description}</p>
                </div>
            </a>
            <a className="Fast-Shipping p-5 h-345 flex justify-center items-center gap-5 sm:gap-5 lg:after:content-[''] lg:after:h-16 lg:after:w-[1px] lg:after:bg-gray-500">
                <img src={feature[1].imageSrc} alt="#"/>
                <div className="content">
                    <span className="text-base font-medium">{feature[1].title}</span>
                    <p className="text-sm font-normal text-gray-500">{feature[1].description}</p>
                </div>
            </a>
            <a className="24-Support p-5 h-345 flex justify-center items-center gap-5 sm:gap-5 sm:after:content-[''] sm:after:h-16 sm:after:w-[1px] sm:after:bg-gray-500">
                <img src={feature[2].imageSrc} alt="#"/>
                <div className="content">
                    <span className="text-base font-medium">{feature[2].title}</span>
                    <p className="text-sm font-normal text-gray-500">{feature[2].description}</p>
                </div>
            </a>
            <a className="Promising-Quality p-5 h-345 flex justify-center items-center gap-5 sm:gap-5 ">
                <img src={feature[3].imageSrc} alt="#"/>
                <div className="content">
                    <span className="text-base font-medium">{feature[3].title}</span>
                    <p className="text-sm font-normal text-gray-500">{feature[3].description}</p>
                </div>
            </a>
        </div>
        </div>
        </>
    )

}