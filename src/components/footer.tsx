import facebook from "../assets/Images/icon-facebook.svg";
import twitter from "../assets/Images/icon-twitter.svg";
import pinterest from "../assets/Images/icon-pinterest.svg";
import instagram from "../assets/Images/icon-instagram.svg";

const Footer = () => {
  return (
    <div>
        <div>
            <div>Shortly</div>

            <div>
                <h2>Features</h2>
                <h3>Link Shortening</h3>
                <h3>Branded Links</h3>
                <h3>Analytics</h3>
            </div>

            <div>
                <h2>Resources</h2>
                <h3>Blog</h3>
                <h3>Developers</h3>
                <h3>Support</h3>
            </div>

            <div>
                <h2>Company</h2>
                <h3>About</h3>
                <h3>Our Team</h3>
                <h3>Careers</h3>
                <h3>Contact</h3>
            </div>
        </div>

        <div>
            <a href=""><img src={facebook}></img></a>
            <a href=""><img src={twitter}></img></a>
            <a href=""><img src={pinterest}></img></a>
            <a href=""><img src={instagram}></img></a>
        </div>
    </div>
  )
}

export default Footer;