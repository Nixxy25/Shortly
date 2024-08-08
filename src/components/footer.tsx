import facebook from "../assets/Images/icon-facebook.svg";
import twitter from "../assets/Images/icon-twitter.svg";
import pinterest from "../assets/Images/icon-pinterest.svg";
import instagram from "../assets/Images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="px-24 bg-Very-Dark-Violet h-[300px] max-sm:h-full py-10 max-sm:px-6 max-lg:px-16">
        <div className="flex justify-between  font-[500] max-lg:gap-10 max-sm:flex-col max-sm:justify-center max-sm:text-center max-sm:items-center">
            <div className="text-2xl text-white font-[700]">Shortly</div>

            <div className="flex flex-col gap-2">
                <h2 className="text-white pb-4 font-[700]">Features</h2>
                <h3>Link Shortening</h3>
                <h3>Branded Links</h3>
                <h3>Analytics</h3>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="text-white pb-4 font-[700]">Resources</h2>
                <h3>Blog</h3>
                <h3>Developers</h3>
                <h3>Support</h3>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="text-white pb-4 font-[700]">Company</h2>
                <h3>About</h3>
                <h3>Our Team</h3>
                <h3>Careers</h3>
                <h3>Contact</h3>
            </div>

            <div className="flex gap-4">
                <a href=""><img src={facebook}></img></a>
                <a href=""><img src={twitter}></img></a>
                <a href=""><img src={pinterest}></img></a>
                <a href=""><img src={instagram}></img></a>
            </div>
        </div>

   
    </div>
  )
}

export default Footer;