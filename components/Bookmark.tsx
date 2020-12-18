import { useState, useContext } from "react";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Tooltip from "@material-ui/core/Tooltip";
import { AppContext } from "../utils/AppContext";

const Bookmark = (props) => {
  const { state, dispatch } = useContext(AppContext);
  console.log(state.favoriteRecipes);
  console.log(props.recipe);

  return (
    <>
      {state.favoriteRecipes?.some((e) => e.recipe.id === props.recipe.id) ? (
        <Tooltip title="Bookmarked">
          <div>
            <BookmarkIcon color="primary" />
          </div>
        </Tooltip>
      ) : (
        <Tooltip title="Add to bookmarks">
          <div>
            <BookmarkBorderIcon
              color="primary"
              onClick={() => {
                dispatch({
                  type: "add_favorites",
                  recipe: props.recipe,
                });
              }}
            />
          </div>
        </Tooltip>
      )}
    </>
  );
};

export default Bookmark;
