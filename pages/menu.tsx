import { useContext } from "react";
import { AppContext } from "../utils/AppContext";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Tooltip from "@material-ui/core/Tooltip";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DoneIcon from "@material-ui/icons/Done";
import Button from "@material-ui/core/Button";
import chain from "lodash";

import _ from "lodash";

const Menu = (props: any) => {
  const { state, dispatch } = useContext(AppContext);

  function mergeNames(arr) {
    return chain(arr).groupBy("dayOrder").value();
  }

  return (
    <>
      <div>
        <h2>Menu for the week</h2>
        {state?.menu?.length ? (
          <>
            <Button
              color="primary"
              size="small"
              variant="outlined"
              onClick={() => dispatch({ type: "reset_menu" })}
            >
              Clear menu
            </Button>
            {Object.entries(mergeNames(state.menu))
              .sort()
              .map((el) => (
                <>
                  <h3>{el[1][0].day}</h3>
                  {el[1].map((e) => (
                    <div
                      key={e.recipe.id}
                      style={{
                        border: "1px solid #f2f2f2",
                        margin: "1rem",
                        padding: "1rem",
                        borderRadius: "3px",
                        WebkitBoxShadow:
                          "3px 3px 16px 1px rgba(243,142,130,0.5)",
                        boxShadow: "3px 3px 16px 1px rgba(243,142,130,0.5)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          backgroundColor: "#f2efee",
                          padding: "1rem",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <img
                            style={{
                              width: "5rem",
                              height: "5rem",
                              objectFit: "cover",
                              marginRight: "1rem",
                            }}
                            src={e.recipe.image_url}
                          />
                          <span
                            style={{ alignSelf: "center", fontWeight: "bold" }}
                          >
                            {e.recipe.title}
                          </span>
                        </div>{" "}
                        <div style={{ alignSelf: "center" }}>
                          <Tooltip title="remove from menu">
                            <HighlightOffIcon
                              color="primary"
                              style={{ alignSelf: "center" }}
                              onClick={() =>
                                dispatch({
                                  type: "delete_menu",
                                  id: e.recipe.id,
                                })
                              }
                            />
                          </Tooltip>
                        </div>
                      </div>
                      <div id="recipe-ingredients">
                        <h4>Ingredients List</h4>
                        <div id="ingredients-list">
                          {e.recipe.ingredients.map(
                            (ingredient, idx: number) => {
                              return (
                                <div id="ingredient-el">
                                  {state.shoppingList?.some(
                                    (i) =>
                                      i.ingredient === ingredient.description
                                  ) ? (
                                    <Tooltip
                                      title="Added to shopping list"
                                      aria-label="add to shopping list"
                                      placement="top"
                                    >
                                      <DoneIcon color="primary" />
                                    </Tooltip>
                                  ) : (
                                    <Tooltip
                                      title="Add to shopping list"
                                      aria-label="add to shopping list"
                                      placement="top"
                                    >
                                      <div>
                                        <AddCircleOutlineIcon
                                          fontSize="small"
                                          style={{ marginRight: ".3rem" }}
                                          onClick={() =>
                                            dispatch({
                                              type: "add_shopping",
                                              description:
                                                ingredient.description,
                                              quantity: ingredient.quantity,
                                              unit: ingredient.unit,
                                            })
                                          }
                                        />
                                      </div>
                                    </Tooltip>
                                  )}
                                  <div id="ingredient-quantity">
                                    {ingredient.quantity}
                                  </div>
                                  <div id="ingredient-desc">
                                    <span style={{ marginRight: ".3rem" }}>
                                      {ingredient.unit}
                                    </span>
                                    {ingredient.description}
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ))}
          </>
        ) : (
          <div>You haven't added any meal to your menu.</div>
        )}
      </div>
      <style jsx>
        {`
          div#item-recipe {
            margin-bottom: 1rem;
          }
          div#recipe-ingredients {
            color: #615551;
            background-color: #f2efee;
            padding: 0.5rem;

            font-size: 0.9rem;
            margin-bottom: 1.2rem;
          }

          h3 {
            margin-top: 3rem;
            font-size: 1.5rem;
          }

          h4 {
            display: block;
            text-transform: uppercase;
            text-align: center;
            margin-top: 0;
          }

          div#ingredients-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem 1rem;
            align-items: start;
          }

          div#ingredient-el {
            display: flex;
          }

          #ingredient-quantity {
            margin-right: 4px;
          }

          @media screen and (max-width: 800px) {
            div#ingredients-list {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  );
};

export default Menu;
