export default function Footer () {

    return (
        <>
        <footer >
            <div className="inner-footer  bg-[#333333]">
                <div className="main-footer max-w-[84rem] mx-auto">
                    <div className="inner-main-footer py-10 text-[#fefefe] flex flex-col p-5  gap-8">
                        <div className="upper-part flex flex-col lg:items-center justify-center gap-5">
                            <h2 className="text-[#c19e66] text-[40px] font-bold">Rawaha.</h2>
                            <p className="text-sm mb-5">Providing affordable luxury impressions of globally recognized fragrances to empower you and make your style unique.</p>
                            <ul className="social-icons flex gap-3">
                                <li><a className="icons px-5 py-3 border border-white rounded-full"  href=""> <i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a className="icons px-4 py-3 border border-white rounded-full" href=""> <i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a className="icons px-4 py-3 border border-white rounded-full" href=""> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div className="lower-part flex flex-col sm:flex-row gap-4 sm:flex-wrap justify-between">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-[#c19e66] font-bold text-[16px]">Exclusive Collection</h2>
                                <ul className="hidden sm:flex flex-col gap-4 text-sm text-[#fefefe]">
                                    <li><a href="#">Own Creation</a></li>
                                    <li><a href="#">Ittar Collection</a></li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-[#c19e66] font-bold text-[16px]">Customer Service</h2>
                                <ul className="hidden sm:flex flex-col gap-4 text-sm text-[#fefefe]">
                                    <li><a href="#">Terms and Conditions</a></li>
                                    <li><a href="#">Return & Exchange</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Shipping Information</a></li>
                                    <li><a href="#">FAQs</a></li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-[#c19e66] font-bold text-[16px]">Quick Links</h2>
                                <ul className="hidden sm:flex flex-col gap-4 text-sm text-[#fefefe]">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Track Orders</a></li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-[#c19e66] font-bold text-[16px]">Stay Connected</h2>
                                <p className="hidden sm:block">Deals, Discounts & Updates from Rawaha. No spam, we promise. 😇</p>
                                <span className="input hidden sm:flex">
                                    <input className=" w-[500px] h-10 bg-gray-100 focus:outline-none text-gray-500 px-10 " type="email" placeholder="Your Email Adress" name="email" id="email"/>
                                    <a href="#" className="h-10 w-16 flex text-sm items-center justify-center bg-white text-black">Button</a>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="lower-footer h-20 flex items-center justify-center bg-white">
                    <p className="text-sm text-gray-400">© Copyright 2024 Rawaha. All Rights Reserved. Digital Eggheads</p>
                   
                </div>
            </div>
        </footer>
        </>
    )
}