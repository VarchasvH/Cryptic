import { Link } from "react-router-dom";
import Button from "../Button/index.jsx";
import TemporaryDrawer from "./Drawer.jsx";
import "./styles.css";
const Header = () => {
  return (
    <div className='navbar'>
      <Link to='/'>
        <h1 className='logo'>
          Cryptic <span style={{ color: "var(--stripe)" }}>.</span>
        </h1>
      </Link>
      <div className='links'>
        <Link to='/'>
          <p className='link'>Home</p>
        </Link>

        <Link to='/dashboard'>
          <Button
            text={"Dashboard"}
            onClick={() => console.log("Btn was clicked")}
          />
        </Link>
      </div>
      <div className='mobile-drawer'>
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Header;
