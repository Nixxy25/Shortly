import boostDesktopImage from '../assets/Images/bg-boost-desktop.svg';
import { CustomButton } from '../Buttons/buttons';


const BoostPage = () => {
  return (
    <div>
        <div><img src={boostDesktopImage}></img></div>

        <div>
            <h1>Boost your links Today</h1>
            <CustomButton variant='primary'>Get Started</CustomButton>
        </div>
    </div>
  )
}

export default BoostPage;