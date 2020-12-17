import { Tooltip, Button, Collapse, Zoom, IconButton } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import DeleteIcon from "@material-ui/icons/Delete";

import clsx from "clsx";

import { useContext, useState } from "react";
import { AppContext } from "../utils/AppContext";
import OwnRecipeForm from "../components/OwnRecipeForm";

const OwnRecipes = (props) => {
  const [checked, setChecked] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        "& .MuiTextField-root": {
          margin: "0 1rem 1rem 0",
        },
      },
      expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: "rotate(180deg)",
      },
    })
  );

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <h2>Recipes you added</h2>
      {state?.ownRecipes?.length ? (
        <>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              marginLeft: "1rem",
            }}
          >
            If you would like to delete all the recipes you've added click here
            <DeleteIcon
              style={{ cursor: "pointer" }}
              color="primary"
              onClick={() => dispatch({ type: "reset_own" })}
            />
          </div>
          {state.ownRecipes.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                border: "1px solid #f2f2f2",
                margin: "1rem",
                padding: "1rem",
                borderRadius: "3px",
                WebkitBoxShadow: "3px 3px 16px 1px rgba(243,142,130,0.5)",
                boxShadow: "3px 3px 16px 1px rgba(243,142,130,0.5)",
              }}
            >
              <div style={{ display: "flex" }}>
                <h4 style={{ marginRight: ".1rem" }}>{recipe.title} </h4>
                <span style={{ alignSelf: "center" }}>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </span>
                <span style={{ alignSelf: "center" }}>
                  <Tooltip title="remove from menu">
                    <HighlightOffIcon
                      color="primary"
                      onClick={() =>
                        dispatch({
                          type: "delete_own",
                          id: recipe.id,
                        })
                      }
                    />
                  </Tooltip>
                </span>
              </div>

              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <div>
                  <span style={{ marginRight: "1rem" }}>
                    Servings: {recipe.servings}
                  </span>
                  <span>Cooking time: {recipe.cooking_time}</span>
                </div>
                <h6>Method</h6>
                <p>{recipe.description}</p>
              </Collapse>
            </div>
          ))}
        </>
      ) : (
        <div>
          You have not added any recipes yet. Click on Add button to add recipe.
        </div>
      )}

      <div id="form-control">
        <Button
          onClick={handleClick}
          variant="outlined"
          color="primary"
          style={{ margin: "1rem" }}
        >
          Add recipe
        </Button>

        <Zoom in={checked}>
          <OwnRecipeForm handleClick={handleClick} />
        </Zoom>
      </div>
      <style jsx>{`
        div#form-control {
          align-self: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default OwnRecipes;
