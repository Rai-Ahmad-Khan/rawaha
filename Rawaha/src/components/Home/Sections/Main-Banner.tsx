
import SampleAPI from '../../../../SampleAPI.json'
export default function MainBanner () {
    const mainBannerData = SampleAPI.MainBanner[0]; 
    return (
        <>
         <div className="main-banner -my-36">
            <div className="inner-banner max-w-[84rem] mx-auto relative">
                <img className="w-full  sm:hidden " src={mainBannerData["desktop-bg"]} alt="main-mobile-banner"/>
                <img className="hidden h-[750px] sm:block" src={mainBannerData["mobile-bg"]} alt="main-desktop-banner"/>
            <div className="content absolute top-2/4 left-14 sm:top-1/2  sm:left-10 sm:-translate-y-1/2 text-white">
                <h1 className="text-[44px]  sm:text-[50px] lg:text-6xl leading-tight font-semibold">{mainBannerData.heading}</h1>
                <p className="mt-10 my-2 text-14 font-normal leading-tight">{mainBannerData.description}</p>
                <a className="button text-16 font-medium h-10 w-36 flex justify-center items-center border-white border-2 border-solid rounded-md" href={mainBannerData["btn-href"]}>{mainBannerData["btn-text"]}</a>
            </div>
            </div>
        </div>
        </>
    )
}