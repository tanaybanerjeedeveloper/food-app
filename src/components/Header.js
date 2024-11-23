import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="flex justify-between bg-pink-100 shadow-lg">
    <div className="">
      <img className="w-40" src={LOGO_URL} />
    </div>
    <div className="flex items-center">
      <ul className="flex  p-4 m-4">
        <li>
          <Link className="mx-5" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="mx-5" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="mx-5" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="mx-5" to="/another">
            Another
          </Link>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
