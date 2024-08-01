import boostDesktopImage from '../assets/Images/bg-boost-desktop.svg';
import boostMobileImage from '../assets/Images/bg-boost-mobile.svg';
import { CustomButton } from '../Buttons/buttons';


const BoostPage = () => {
  return (
    <div className='relative h-64 bg-Dark-Violet items-center flex flex-col justify-center w-full'>
        <div>
          <img className='absolute inset-0 w-full h-full object-cover bg-Dark-Violet max-sm:hidden' src={boostDesktopImage}></img>
          <img className='absolute inset-0 w-full h-full object-cover' src={boostMobileImage}></img>
        </div>

        <div className='flex flex-col relative z-10 justify-center items-center gap-8'>
            <h1 className='text-3xl text-white font-bold'>Boost your links Today</h1>
            <CustomButton variant='primary'>Get Started</CustomButton>
        </div>
    </div>
  )
}

export default BoostPage;