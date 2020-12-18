import Link from "next/link";
import { IconButton, Button, Menu, MenuItem } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { green } from "@material-ui/core/colors";
import { useState } from "react";

const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <>
      <div>
        <Button onClick={openMenu}>
          <MoreHorizIcon color="primary" fontSize="large" />
        </Button>
        <Menu
          open={Boolean(anchorEl)}
          keepMounted
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/recipes">
              <a>Recipes</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/bookmarks">
              <a>Bookmarks</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/menu">
              <a>Menu</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/own">
              <a>Own recipes</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/shopping">
              <a>Shopping list</a>
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default Navbar;
