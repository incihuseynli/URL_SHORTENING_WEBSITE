import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

const FooterMenu = () => {
  return (
    <div className="footer-menu">
      <ul className="col">
        <h4 className="menu-title"> Features</h4>
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </ul>
      <ul className="col">
        <h4 className="menu-title">Resources</h4>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </ul>
      <ul className="col">
        <h4 className="menu-title">Company</h4>
        <li>About</li>
        <li>Our Team</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
      <div className="socials">
        <li>
          <img src={facebook} alt="" />
        </li>
        <li>
          <img src={twitter} alt="" />
        </li>
        <li>
          <img src={pinterest} alt="" />
        </li>
        <li>
          <img src={instagram} alt="" />
        </li>
      </div>
    </div>
  );
};

export default FooterMenu;
