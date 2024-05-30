import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon className='hamburger' />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className='drawer-div'>
          <Link to='/'>
            <p className='link'>Home</p>
          </Link>
          <Link to='/dashboard'>
            <p className='link'>Dashboard</p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
