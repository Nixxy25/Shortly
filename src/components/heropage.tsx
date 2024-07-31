import Illustration from "../assets/Images/illustration-working.svg";
import { CustomButton } from "../Buttons/buttons";

const Heropage = () => {
  return (
    <div>
        <div className="ml-24 my-12 flex justify-between items-center ">
            <div>
                <h1>More than just shorter links</h1>
                <h3>Build your brand's recognition and get detailed insights on how your links are performing</h3>
                <CustomButton variant="primary">Get Started</CustomButton>
            </div>

            <div>
                <img src={Illustration} alt="hero-image"></img>
            </div>
        </div>
    </div>
  )
}

export default Heropage;