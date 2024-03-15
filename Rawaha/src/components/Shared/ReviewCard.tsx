import SampleAPI from '../../../SampleAPI.json';

export default function ReviewCard() {
  const reviewCardData = SampleAPI.reviewCard;

  return (
    <>
      <div className="box mr-11 flex flex-col gap-1 p-5 h-56 w-72 sm:h-56 sm:w-72 shadow-lg border-t-2 border-gray-50 box-shadow">
        <span className="stars flex w-56">
          {reviewCardData.stars.map((star, index) => (
            <img key={index} src={star} alt={`Star ${index + 1}`} />
          ))}
        </span>          
        <h2 className="main-review text-[14px] text-gray-500 font-bold">{reviewCardData.mainReview}</h2>
        <p className="discription text-[14px] leading-none mb-6  text-gray-500">{reviewCardData.description}</p>
        <h3 className="name  text-gray-500 text-[14px] leading-none font-semibold">{reviewCardData.name}</h3>
        <p className="desigination leading-none text-[14px] text-gray-500">{reviewCardData.designation}</p>
      </div>
    </>
  );
}
