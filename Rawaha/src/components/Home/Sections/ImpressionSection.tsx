import SampleAPI from '../../../../SampleAPI.json'
export default function ImpressionSection () {
    const info = SampleAPI.impressionSection
    return (
        <>
        <div className="impression-section bg-[#f7f7f7]">
            <div className="inner-impression  max-w-[84rem] mx-auto flex flex-col gap-4 items-center  py-12 px-10">
                <h2 className="text-black font-bold text-3xl sm:justify-self-center">{info.title}</h2>
                {info.paragraphs.map((description, descriptionIndex)=>(
                     <p key={descriptionIndex} className="text-sm text-gray-500">{description}</p>
                ))}
                </div>
        </div>
        </>
    )
}