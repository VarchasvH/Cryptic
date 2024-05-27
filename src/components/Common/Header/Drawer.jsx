import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon className='hamburger' />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className='drawer-div'>
          <a href='/'>
            <p className='link'>Home</p>
          </a>
          <a href='/'>
            <p className='link'>Compare</p>
          </a>
          <a href='/'>
            <p className='link'>WatchList</p>
          </a>
          <a href='/'>
            <p className='link'>Dashboard</p>
          </a>
        </div>
      </Drawer>
    </div>
  );
}
