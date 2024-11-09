import {LOGO_URL} from "../utils/constants";

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

export default Header;