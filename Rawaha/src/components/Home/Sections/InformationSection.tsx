import SampleAPI from '../../../../SampleAPI.json'
export default function InformationSection() {
    const { leftSide, rightSide } = SampleAPI.informationSection;
  
    return (
      <>
        <div className="information-section">
          <div className="inner-information max-w-[84rem] mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 p-10">
            <div className="left-side">
              <img src={leftSide.imageSrc} alt="bg-image" />
              <div className="content flex flex-col gap-2">
                <span className="text-sm text-[#c19e66]">{leftSide.date}</span>
                <a className="text-[22px] font-bold hover:text-[#c19e66]" href={leftSide.titleLink}>
                  {leftSide.title}
                </a>
                <p className="text-sm">{leftSide.content}</p>
                <a className="text-sm hover:text-[#c19e66] underline" href={leftSide.readMoreLink}>
                  Read more
                </a>
              </div>
            </div>
            <div className="right-side flex flex-col gap-4">
              {rightSide.map((item, index) => (
                <div key={index} className="item flex gap-3">
                  <img className="h-36 w-44 sm:h-44 sm:w-56" src={item.imageSrc} alt="bg-image" />
                  <div className="content flex flex-col gap-2">
                    <span className="text-sm text-[#c19e66]">{item.date}</span>
                    <a className="text-[16px] sm:text-[20px] font-bold hover:text-[#c19e66]" href={leftSide.titleLink}>
                      {item.title}
                    </a>
                    <p className="hidden sm:block text-sm">{item.content}</p>
                    <a className="text-sm hover:text-[#c19e66] underline" href={item.readMoreLink}>
                      Read more
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }