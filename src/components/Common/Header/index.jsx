import Button from "../Button/index.jsx";
import TemporaryDrawer from "./Drawer.jsx";
import "./styles.css";
const Header = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'>
        Cryptic <span style={{ color: "var(--stripe)" }}>.</span>
      </h1>
      <div className='links'>
        <a href='/'>
          <p className='link'>Home</p>
        </a>
        <a href='/'>
          <p className='link'>Compare</p>
        </a>
        <a href='/'>
          <p className='link'>WatchList</p>
        </a>
        <a href='#'>
          <Button
            text={"Dashboard"}
            onClick={() => console.log("Btn was clicked")}
          />
        </a>
      </div>
      <div className='mobile-drawer'>
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Header;
