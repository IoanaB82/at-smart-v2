import { v4 as uuidv4 } from "uuid";

export interface IRecipe {
  publisher: string;
  ingredients: { quantity: number; unit: string; descripion: string }[];
  source_url: string;
  image_url: string;
  title: string;
  servings: number;
  cooking_time: number;
  id: string;
}

export interface IMenu {
  day: string;
  dayOrder: number;
  recipe: IRecipe;
}

export interface IFavoriteRecipes {
  recipe: IRecipe;
}

export interface IShoppingList {
  ingredient: string;
  unit: string;
  quantity: number;
}

export interface IOwnRecipes {
  title: string;
  servings: number;
  cooking_time: number;
  ingredients: { quantity: number; unit: string; ingredient: string }[];
  description: string;
  id: string;
}

export interface IState {
  menu: IMenu[];
  favoriteRecipes: IFavoriteRecipes[];
  shoppingList: IShoppingList[];
  ownRecipes: IOwnRecipes[];
}

export interface IAction {
  type: string;
  day?: string;
  dayOrder?: number;
  recipe?: IRecipe;
  description?: string;
  title?: string;
  ingredients?: string[];
  ingredient?: string;
  servings?: number;
  cooking_time?: number;
  quantity?: number;
  unit?: string;
  id?: string;
  img?: string;
}

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "add_menu":
      return {
        ...state,
        menu: [
          ...state.menu,
          {
            day: action.day,
            dayOrder: action.dayOrder,
            recipe: action.recipe,
          },
        ],
      };
      break;
    case "add_favorites":
      return {
        ...state,
        favoriteRecipes: [
          ...state.favoriteRecipes,
          {
            recipe: action.recipe,
          },
        ],
      };
      break;
    case "add_shopping":
      return {
        ...state,
        shoppingList: [
          ...state.shoppingList,
          {
            ingredient: action.description,
            quantity: action.quantity,
            unit: action.unit,
          },
        ],
      };
      break;
    case "add_own":
      return {
        ...state,
        ownRecipes: [
          ...state.ownRecipes,
          {
            title: action.title,
            servings: action.servings,
            cooking_time: action.cooking_time,
            ingredients: [
              {
                ingredient: action.ingredient,
                unit: action.unit,
                quantity: action.quantity,
              },
            ],
            description: action.description,
            id: uuidv4(),
          },
        ],
      };
      break;
    case "delete_menu":
      return {
        ...state,
        menu: state.menu.filter((item) => item.recipe.id !== action.id),
      };
      break;
    case "delete_favorites":
      return {
        ...state,
        favoriteRecipes: state.favoriteRecipes.filter(
          (item) => item.recipe.id !== action.id
        ),
      };
      break;
    case "delete_shopping":
      return {
        ...state,
        shoppingList: state.shoppingList.filter(
          (item) => item.ingredient !== action.ingredient
        ),
      };
      break;
    case "delete_own":
      return {
        ...state,
        ownRecipes: state.ownRecipes.filter((item) => item.id !== action.id),
      };
      break;

    case "reset_menu":
      return { ...state, menu: [] };
      break;
    case "reset_favorites":
      return { ...state, favoriteRecipes: [] };
      break;
    case "reset_own":
      return { ...state, ownRecipes: [] };
      break;
    case "reset_shopping":
      return { ...state, shoppingList: [] };
      break;

    default:
      return state;
  }
};

export default reducer;
