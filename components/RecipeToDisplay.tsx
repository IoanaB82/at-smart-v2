import Spinner from "./Spinner";
import Recipe from "./Recipe";
import { useState, useEffect } from "react";

const RecipeToDisplay = ({ clickedRecipe }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const fetchRecipe = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${clickedRecipe}`
        );
        const data = await response.json();

        //  if(cancelRequest) return;
        setData(data);
        setRecipe(data.data.recipe);
        console.log(data.data.recipe);
        setIsLoading(false);
      } catch (error) {
        // if(cancelRequest) return;
        setError(error);
        console.log(error);
      }
    };

    fetchRecipe();

    return () => {};
  }, [clickedRecipe]);

  if (!clickedRecipe)
    return (
      <p style={{ textAlign: "center" }}>
        Click on a recipe to get description or search for ingredients.
      </p>
    );

  if (isLoading) return <Spinner />;

  return <Recipe recipe={recipe} />;
};

export default RecipeToDisplay;
