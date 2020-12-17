import { createContext, Dispatch, useEffect, useReducer } from "react";
import { IState, IAction } from "./appReducer";

import appReducer from "./appReducer";

const initialState: IState = {
  menu: [], //recipe
  favoriteRecipes: [], //recipe
  //ingredientsCounter: null, //
  shoppingList: [], //recipe.ingredients
  ownRecipes: [], //recipe
};

export interface IContextProps {
  state: IState;
  dispatch: Dispatch<IAction>;
}

// export const AppContext = createContext<IContextProps>({
//   dispatch: () => {},
//   state: initialState,
// });

export const AppContext = createContext<IContextProps>();

export function AppProvider(props: any) {
  // if (props.value) {
  //   initialState = [...initialState, ...props.value];
  // }

  const asyncLocalStorage = {
    setItem: async function (key, value) {
      await null;
      return localStorage.setItem(key, value);
    },
    getItem: async function (key) {
      await null;
      return localStorage.getItem(key);
    },
  };
  const [state, dispatch] = useReducer(appReducer, initialState, () => {
    if (typeof window !== "undefined") {
      try {
        const localData = localStorage.getItem("state");
        return localData ? JSON.parse(localData) : initialState;
      } catch (error) {
        if (undefined) {
          const localData = localStorage.getItem("state");
          return localData ? JSON.parse(localData) : initialState;
        } else console.log(error);
      }
      //return localData ? localData : initialState;
    }

    return;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("state", JSON.stringify(state));
    }
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}
