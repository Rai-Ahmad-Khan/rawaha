export default function AnnouncementBar () {
    return (
        <>
        <div className="announcement-bar hidden">
            <div className="inner-announcement-bar max-w-[84rem] mx-auto sm:h-12 flex justify-center items-center gap-12">
                <p className="text-white"><a href="#" className="underline">Buy 1</a> and get <a href="#" className="underline">15% off</a> on 2nd perfume</p>
                <a href="#" className="text-white">X close</a>
            </div>
        </div>
        </>
    )
}