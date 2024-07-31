import DesktopBoostSvg from "../assets/Images/bg-boost-desktop.svg";
import { CustomButton } from "../Buttons/buttons";

const Shorten = () => {
  return (
    <div>
        <div><img src={DesktopBoostSvg}></img></div>

        <div>
            <div><input type="text" placeholder="Shorten a link here"></input></div>
            <CustomButton variant="primary">Shorten It !</CustomButton>
        </div>
    </div>
  )
}

export default Shorten;