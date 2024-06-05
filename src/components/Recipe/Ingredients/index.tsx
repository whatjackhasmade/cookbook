import * as S from "./styles";
import { MeasurementUnit } from "@/enums";
import ConditionalWrapper from "@/components/ConditionalWrapper";
import { useRecipe } from "../context";

export default function Ingredients() {
  const { checkedIngredients, setCheckedIngredients, recipe } = useRecipe();
  const { ingredients } = recipe;

  const orderedIngredients = [...ingredients].sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return (
    <section>
      <h2>Ingredients</h2>
      <S.Ingredients>
        {orderedIngredients.map((ingredient) => {
          const isChecked = checkedIngredients.includes(ingredient.name);

          return (
            <S.Ingredient key={ingredient.name}>
              <input
                checked={isChecked}
                name={ingredient.name}
                id={ingredient.name}
                type="checkbox"
                onChange={(event) => {
                  setCheckedIngredients((currentChecked) => (event.target.checked ? [...currentChecked, ingredient.name] : currentChecked.filter((id) => id !== ingredient.name)));
                }}
              />
              <ConditionalWrapper condition={isChecked} wrapper={(children) => <s>{children}</s>}>
                <label htmlFor={ingredient.name}>
                  {ingredient.quantity}
                  {
                    {
                      [MeasurementUnit.Grams]: "g",
                      [MeasurementUnit.Milliliters]: "ml",
                      [MeasurementUnit.Count]: "",
                      [MeasurementUnit.Tablespoons]: " tbsp",
                      [MeasurementUnit.Teaspoons]: " tsp",
                      [MeasurementUnit.Litres]: "l",
                    }[ingredient.unit]
                  }{" "}
                  {ingredient.name}
                </label>
              </ConditionalWrapper>
            </S.Ingredient>
          );
        })}
      </S.Ingredients>
      <p>
        Check off the ingredients you have, or{" "}
        <S.CheckAll
          onClick={() => {
            setCheckedIngredients(ingredients.map((ingredient) => ingredient.name));
          }}
          type="button"
        >
          check all ingredients off
        </S.CheckAll>
      </p>
    </section>
  );
}
