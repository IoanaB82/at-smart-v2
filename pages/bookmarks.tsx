import React, { useContext } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Tooltip from "@material-ui/core/Tooltip";
import { AppContext } from "../utils/AppContext";

const Favorites = (props: any) => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2>Your favorite recipes</h2>

        {state.favoriteRecipes?.length ? (
          state.favoriteRecipes.map((el) => (
            <div
              key={el.recipe.id}
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "1rem",
              }}
            >
              <img
                style={{
                  width: "10rem",
                  height: "10rem",
                  objectFit: "cover",
                  marginRight: "1rem",
                }}
                src={el.recipe.image_url}
                alt={el.recipe.title}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3> {el.recipe.title} </h3>
                <Tooltip title="remove from favorites">
                  <HighlightOffIcon
                    color="primary"
                    style={{ alignSelf: "center" }}
                    onClick={() =>
                      dispatch({ type: "delete_favorites", id: el.recipe.id })
                    }
                  />
                </Tooltip>
              </div>
            </div>
          ))
        ) : (
          <h3> You have no favorites yet.</h3>
        )}
      </div>
    </>
  );
};

export default Favorites;
