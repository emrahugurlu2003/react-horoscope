import "./Navbar.scss";
import Header from "../header/Header";
import Main from "../main/Main";
import logo from "../../helper/logo/logo.png";

const Navbar = () => {
  return (
    <div className="NavBar">
      <img src="" alt="" />
      <div>
        <ul>
          <li>
            <a href="#">HOROSCOPE</a>
          </li>
          <li>
            <a href="#">DAILY</a>
          </li>
          <li>
            <a href="#">TAROT</a>
          </li>
          <li>
            <a href="#">ARTICLE</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
