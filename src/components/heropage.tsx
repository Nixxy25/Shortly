import Illustration from "../assets/Images/illustration-working.svg";
import { CustomButton } from "../Buttons/buttons";


const Heropage = () => {
  return (
    <div className="relative h-full ">
        <div className="ml-24 pb-60 pt-12  flex gap-24 pb-8 justify-between items-center  max-lg:flex-col-reverse max-sm:my-4 max-sm:ml-6">
            <div className="flex gap-8 flex-col max-sm:text-center max-sm:mr-6">
                <h1 className="text-6xl text-Very-Dark-Blue tracking-tight font-[700] max-sm:text-5xl">More than just shorter links</h1>
                <h3 className="text-xl pb-4">Build your brand's recognition and get detailed insights on how your links are performing</h3>
                <div className=""><CustomButton variant="primary"><p className="py-2 text-lg px-4">Get Started</p></CustomButton></div>
            </div>

            <div className="w-full">
                <img src={Illustration} alt="hero-image"></img>
            </div>
        </div>
    </div>
  )
}

export default Heropage;