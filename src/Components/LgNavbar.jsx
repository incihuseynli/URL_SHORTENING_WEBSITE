import logo from "../assets/images/logo.svg";

const LgNavbar = () => {
  return (
    <div className="lgMenu">
      <div className="row">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="navmenu">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className="row">
        <button className="btn-text">Login</button>
        <button className="btn-primary">Sign Up</button>
      </div>
    </div>
  );
};

export default LgNavbar;
