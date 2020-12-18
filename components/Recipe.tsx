import Bookmark from "../components/Bookmark";
import Button from "@material-ui/core/Button";
import EcoIcon from "@material-ui/icons/Eco";
import ScheduleIcon from "@material-ui/icons/Schedule";
import RestaurantIcon from "@material-ui/icons/Restaurant";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import AddToMenu from "./AddToMenu";

const Recipe = ({ recipe }) => {
  return (
    <>
      <div>
        <figure>
          <img
            id="recipe-image"
            src={recipe.image_url}
            alt={recipe.title.replace("amp;", "")}
            onError={(e) => {
              onerror = null;
              (e.target as HTMLImageElement).src = "/noimg.png";
            }}
          ></img>
          <h2 id="recipe-title">{recipe.title.replace("amp;", "")}</h2>
        </figure>

        <div id="recipe-details">
          <span>
            <ScheduleIcon color="primary" /> {recipe.cooking_time} minutes
          </span>
          <span>
            <RestaurantIcon color="primary" /> {recipe.servings}
          </span>
          <span>
            <Bookmark recipe={recipe} />
          </span>
          <span>
            <AddToMenu recipe={recipe} />
          </span>
        </div>
        <div id="recipe-ingredients">
          <h4>Ingredients List</h4>
          <div id="ingredients-list">
            {recipe.ingredients.map((ingredient, idx) => {
              return (
                <div id="ingredient-el" key={idx}>
                  <EcoIcon color="primary" fontSize="small" />

                  <div id="ingredient-quantity">{ingredient.quantity}</div>
                  <div id="ingredient-desc">
                    <span style={{ marginRight: ".3rem" }}>
                      {ingredient.unit}
                    </span>
                    {ingredient.description.replace("&nbsp;", " ")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="recipe-method">
          <h4>Cooking directions</h4>
          <p>
            To see how to cook the recipe you have to navigate to the
            publisher's website.
          </p>
          <div id="#button">
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                event.preventDefault();
                window.open(recipe.source_url, "_blank");
              }}
              size="medium"
              endIcon={<ArrowForwardIcon />}
              style={{ display: "flex", margin: "0 auto" }}
            >
              Directions
            </Button>
          </div>
        </div>
      </div>
      <style jsx>{`
        figure {
          height: 16rem;
          width: 100%;
          position: relative;
          top: 0;
          display: block;
          margin-inline-start: 0;
          margin-block-start: 0;
          margin-block-end: 0;
        }

        figure:before {
          display: block;
          height: 100%;
          width: 100%;
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
          opacity: 0.2;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        h2 {
          width: 70%;
          text-transform: uppercase;
          font-size: 1.5rem;
          text-align: center;
          display: block;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 50%);
          padding: 1rem;
          color: #fff;
          background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
        }

        div#recipe-details {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 5rem 5rem 2rem 5rem;
          margin-top: 0;
          color: #615551;
        }

        div#recipe-ingredients {
          color: #615551;
          background-color: #f2efee;
          padding: 2rem;
        }

        h4 {
          display: block;
          text-transform: uppercase;
          text-align: center;
        }

        div#ingredients-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem 3rem;
          align-items: start;
        }

        div#ingredient-el {
          display: flex;
        }

        #ingredient-quantity {
          margin-right: 4px;
        }
        div#recipe-method {
          padding: 2rem;
          color: #615551;
          position: relative;
          height: 100%;
        }
        div#button {
          position: absolute;
          left: 50%;
          margin-top: 2rem;
          transform: translateX(-50%);
        }
        @media screen and (max-width: 800px) {
          div#recipe-ingredients {
            padding: 0.7rem;
          }

          div#ingredients-list {
            grid-template-columns: 1fr;
          }

          div#recipe-details {
            display: flex;
            justify-content: center
            justify-items: space-between;
            padding: 5rem 0.5rem 2rem 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Recipe;
