import { MeasurementUnit, RecipeSlug } from "@/enums";
import { Recipe } from ".";

const recipe: Recipe = {
  emojis: "🍔",
  ingredients: [
    {
      name: "Strong white bread flour",
      quantity: "320",
      unit: MeasurementUnit.Grams,
    },
    {
      name: "Salt",
      quantity: "6",
      unit: MeasurementUnit.Grams,
    },
    {
      name: "Caster sugar",
      quantity: "30",
      unit: MeasurementUnit.Grams,
    },
    {
      name: "Instant yeast",
      quantity: "7",
      unit: MeasurementUnit.Grams,
    },
    {
      name: "Eggs",
      quantity: "2",
      unit: MeasurementUnit.Count,
    },
    {
      name: "Milk",
      quantity: "210",
      unit: MeasurementUnit.Grams,
    },
    {
      name: "Butter",
      quantity: "100",
      unit: MeasurementUnit.Grams,
    },
    {
      name: "Sprinkles of sesame seeds",
      quantity: "6",
      unit: MeasurementUnit.Count,
    },
  ],
  slug: RecipeSlug.BriocheBuns,
  steps: [],
  time: 60,
  title: "Brioche buns",
};

export default recipe;
