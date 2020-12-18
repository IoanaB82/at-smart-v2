import RecipeList from "./RecipeList";

const SearchResults = (props) => {
  return props.recipes
    .slice(props.start, props.end)
    .map((recipe) => (
      <RecipeList
        key={recipe.id}
        src={recipe.image_url}
        title={recipe.title}
        value={recipe.id}
        onClick={props.onClick}
      />
    ));
};
export default SearchResults;
