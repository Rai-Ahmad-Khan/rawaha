
export default function LastingImpression () {
   
    return (
        <>
         <div className="lasting-impression-section mt-20 bg-white">
            <div className="inner-lasting-impression max-w-[78rem] mx-auto bg-[#333333] flex flex-col-reverse  sm:flex-row">
                <div className="left-section px-6 py-2 w-full sm:w-[550px] grid p-4 gap-5 justify-center place-self-center">
                    <h3 className="text-[#fefefe] text-[14] justify-self-center ">BUNDALS</h3>
                    <h2 className="text-[#fefefe] text-4xl sm:text-5xl justify-self-center ">Lasting Impressions</h2>
                    <a className="text-[#c19e66] bg-[#fefefe] py-3 px-4 text-[14] justify-self-center ">Shop Now</a>
                </div>
                <div className="right w-full sm:w-[700px] bg-cover bg-center h-screen" style={{ backgroundImage: `url(/src/assets/images/Bottom-Bundle.webp)`}}></div>
            </div>
        </div>
        </>
    )
}