import PostAddIcon from "@material-ui/icons/PostAdd";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import Tooltip from "@material-ui/core/Tooltip";
import { Menu, MenuItem } from "@material-ui/core";
import { useState, useContext } from "react";

import { AppContext } from "../utils/AppContext";

const AddToMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { state, dispatch } = useContext(AppContext);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMoreEvents = (day) => {
    handleClose();
    console.log(day);
  };

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  console.log(props.recipe.id);

  const days = [
    ["Monday", 1],
    ["Tuesday", 2],
    ["Wednesday", 3],
    ["Thursday", 4],
    ["Friday", 5],
    ["Saturday", 6],
    ["Sunday", 7],
  ];

  return (
    <>
      {state.menu?.some((e) => e.recipe.id === props.recipe.id) ? (
        <Tooltip title="Is in menu">
          <div>
            <PlaylistAddCheckIcon color="primary" />
          </div>
        </Tooltip>
      ) : (
        <>
          <Tooltip title="Add to menu">
            <div>
              <PostAddIcon color="primary" onClick={openMenu} />
            </div>
          </Tooltip>
          <Menu
            open={Boolean(anchorEl)}
            keepMounted
            anchorEl={anchorEl}
            onClose={handleClose}
          >
            {days.map((day) => (
              <MenuItem
                value={day[0]}
                key={day[1]}
                onClick={() => {
                  setAnchorEl(null);
                  dispatch({
                    type: "add_menu",
                    day: String(day[0]),
                    dayOrder: Number(day[1]),
                    recipe: props.recipe,
                    id: props.recipe.id,
                    title: props.recipe.title,
                    img: props.recipe.image_url,
                  });
                  //handleClose;
                  console.log(day);
                }}
              >
                {day[0]}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </>
  );
};

export default AddToMenu;
