import { useContext, useState } from "react";
import { AppContext } from "../utils/AppContext";
import Button from "@material-ui/core/Button";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const ShoppingList = (props) => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      <h2>Shopping List</h2>

      {state?.shoppingList?.length ? (
        <>
          <Button
            color="primary"
            size="small"
            variant="outlined"
            onClick={() => dispatch({ type: "reset_shopping" })}
          >
            Empty list
          </Button>
          <ul>
            {state.shoppingList.map((item) => (
              <li key={item.ingredient}>
                {item.ingredient}{" "}
                <span>
                  <HighlightOffIcon
                    color="primary"
                    fontSize="small"
                    style={{ verticalAlign: "center" }}
                    onClick={() => {
                      dispatch({
                        type: "delete_shopping",
                        ingredient: item.ingredient,
                      });
                    }}
                  />
                </span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <span>No ingredient added to shopping list.</span>
      )}
    </div>
  );
};

export default ShoppingList;
