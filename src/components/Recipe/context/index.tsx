import { Recipe } from "@/data/recipes";
import {
  Dispatch,
  createContext,
  SetStateAction,
  useContext,
  ReactNode,
  useState,
  ElementType,
} from "react";

interface RecipeContextType {
  checkedIngredients: string[];
  goToNextStage: () => void;
  goToPreviousStage: () => void;
  goToStage: (stage: number) => void;
  recipe: Recipe;
  setCheckedIngredients: Dispatch<SetStateAction<string[]>>;
  stage: number;
}

const RecipeContext = createContext<RecipeContextType>({} as RecipeContextType);

export const RecipeProvider = ({
  recipe,
  children,
}: {
  children: ReactNode;
  recipe: Recipe;
}) => {
  const [stage, setStage] = useState(0);
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);

  function goToNextStage() {
    setStage((currentStage) => currentStage + 1);
  }

  function goToPreviousStage() {
    setStage((currentStage) => currentStage - 1);
  }

  function goToStage(stage: number) {
    setStage(stage);
  }

  return (
    <RecipeContext.Provider
      value={{
        checkedIngredients,
        goToNextStage,
        goToPreviousStage,
        goToStage,
        recipe,
        setCheckedIngredients: (newChecked) => {
          setCheckedIngredients(newChecked);

          if (newChecked.length === recipe.ingredients.length) {
            goToNextStage();
          }
        },
        stage,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = (): RecipeContextType => {
  const recipeContext = useContext(RecipeContext);

  if (!recipeContext) {
    throw new Error("useRecipe has to be used within <RecipeProvider>");
  }

  return recipeContext;
};

export const withRecipeContext = (Component: ElementType) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    return (
      <RecipeProvider recipe={props.recipe}>
        <Component {...props} />
      </RecipeProvider>
    );
  };
};
