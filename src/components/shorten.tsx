import DesktopBoostSvg from "../assets/Images/bg-shorten-desktop.svg";
import MobileBoostSvg from '../assets/Images/bg-shorten-mobile.svg';


const Shorten = () => {
  return (
    <div className="mx-24 relative bg-Dark-Violet rounded-md absolute top-1/2 z-10 transform translate-y-1/2 max-sm:mx-6">
        <div>
          <img className='absolute inset-0 w-full h-full object-cover max-lg:hidden' src={DesktopBoostSvg}></img>
          <img className="absolute inset-0 w-full h-full object-cover md:hidden" src={MobileBoostSvg}></img>
        </div>

        <div className="grid grid-cols-5 relative  items-center gap-8 items-center p-16 max-sm:px-8 max-sm:py-6 max-sm:flex max-sm:flex-col max-sm:gap-4">
            <input  className="p-4 col-start-1 col-span-4 max-sm:w-full rounded-lg outline-none bg-white" type="text" placeholder="Shorten a link here"></input>
            <button className="bg-Cyan text-white max-sm:w-full rounded-lg outline-none p-4 font-[700]">Shorten It !</button>
        </div>
    </div>
  )
}

export default Shorten;