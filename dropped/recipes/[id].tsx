import { styled } from "@material-ui/core";

import Layout from "../../components/Layout";
import Link from "next/link";
import { useState } from "react";
import Checkbox from "../../components/Checkbox";

const Recipe = ({ recipe }) => {
  const [checked, setChecked] = useState(false);
  const [isSelected, setIsSelected] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setChecked((checked) => !checked);
  };
  return (
    <>
      <h3>{recipe.title}</h3>

      <img src={recipe.image_url} />
      <div>Servings: {recipe.servings}</div>
      <div>Cooking time: {recipe.cooking_time}</div>
      <div>
        Ingredients:
        <div>
          {recipe.ingredients.map((ingredient, idx) => {
            return (
              <>
                <div>
                  <Checkbox
                    key={idx}
                    checked={checked}
                    isSelected={checked[idx]}
                    onChange={handleChange}
                  />
                  {ingredient.description} : {ingredient.quantity}{" "}
                  {ingredient.unit}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Recipe;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts

  // Get the paths we want to pre-render based on posts
  const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  let hash = window.location.hash;
  let res;

  if (hash) {
    res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${hash}`
    );
  } else {
    res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`
    );
  }

  const data = await res.json();
  let { recipe } = data.data;
  return {
    props: {
      recipe,
    },
  };
}
