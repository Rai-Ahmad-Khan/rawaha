 import ReviewCard from "./ReviewCard"
 import SampleAPI from '../../../SampleAPI.json'
 import Slider from "react-slick";

export default function SliderReview () {

    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
    const upperContent = SampleAPI.upperContent
    return (
        <>
        <div className="slider-review-section">
                <div className="inner-review max-w-[62rem] mx-auto my-20">
                    <div className="Upper-content flex flex-wrap gap-3   sm:justify-between "> 
                        <div className="left-side">
                            <h2 className="text-[29px] text-gray-700 font-bold">{upperContent.leftSide.title}</h2>
                        <span className="stars flex">
                            {upperContent.leftSide.stars.map((star, startIndex)=> (
                                <img key={startIndex} className="h-7 w-7" src={star} alt="#"/>
                            ))}
                        </span>
                        <p className="text-gray-500 ml-2">{upperContent.leftSide.reviewCount}</p>
                        </div>
                        
                        <div className="right-side"><p className="text-[#c19e66] mt-3"> {upperContent.rightSide.verificationMessage}<a className="text-[#c19e66] font-semibold" href={upperContent.rightSide.verificationLink.url}> {upperContent.rightSide.verificationLink.text}</a></p></div>
                        
                    </div>
                   <div>
                   <Slider {...settings} className="slider-review mt-7 ">
                        <ReviewCard/>
                        <ReviewCard/>
                        <ReviewCard/>
                        <ReviewCard/>
                        <ReviewCard/>
                    </Slider>
                   </div>
                </div>
        </div>
        
        </>
    )
}