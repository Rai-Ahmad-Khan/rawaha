

export default function BestSeller() {
 

  return (
    <>
      <div className="lasting-impression-section bg-[#f7f7f7] mt-20">
        <div className="inner-lasting-impression max-w-[78rem] mx-auto flex justify-between flex-col sm:flex-row">
          <div
            className="right sm:ml-14 w-full sm:w-[550px] bg-cover bg-center h-screen"
            style={{ backgroundImage: `url('/src/assets/images/Best-Sellers.jpg')` }}
          ></div>
          <div className="left-section px-10 py-2 mt-3 sm:mt-0 sm:px-12 w-full sm:w-[550px] grid gap-5 sm:justify-self-end sm:place-self-center">
                    <h3 className="text-black font-bold text-[30px] sm:font-extrabold ">OUR BEST SELLERS</h3>
                    <p className="text-gray-500 sm:leading-[40px] text-20 sm:text-[20px] justify-self-center ">Inspired by <a  className="text-[#c19e66] underline" href="">Acqua Di Gio & Issey Miyaki</a> | Inspired by
                        <a  className="text-[#c19e66] underline" href=""> Oud Ispahan</a> | Inspired by <a  className="text-[#c19e66] underline" href="">Versace Eros </a> |
                        Inspired by <a  className="text-[#c19e66] underline" href="">Baccarat Rouge 540 </a>| Inspired by<a  className="text-[#c19e66] underline" href="">Creed Aventus </a> | Inspired by <a  className="text-[#c19e66] underline" href="">Aventus for Her</a>
                        | Inspired by<a  className="text-[#c19e66] underline" href=""> Yves Saint Laurant Tuxedo</a> | Inspired by<a  className="text-[#c19e66] underline" href="">Black Afgano</a>  | Inspired by<a  className="text-[#c19e66] underline" href="">Tuscan Leather</a> 
                        | Inspired by<a  className="text-[#c19e66] underline" href="">J’adore</a> </p>
                </div>
        </div>
      </div>
    </>
  );
}
