import { MeasurementUnit, RecipeSlug } from "@/enums";

import cauliflowerMushroomBolognese from "./cauliflower-mushroom-bolognese";
import chilliGarlicTofuBao from "./chilli-garlic-tofu-bao";
import sweetPotatoFriesFish from "./sweet-potato-fries-fish";

export type Ingredient = {
  name: string;
  optional?: boolean;
  quantity: string;
  unit: MeasurementUnit;
};

export type Step = {
  content: string;
};

export type Recipe = {
  description?: string;
  emojis?: string;
  title: string;
  ingredients: Ingredient[];
  related?: RecipeSlug[];
  // Number of servings yielded by the recipe
  servingSize?: number;
  steps: Step[];
  slug: RecipeSlug;
  // Time in minutes
  time?: number;
};

export const recipes: Recipe[] = [cauliflowerMushroomBolognese, chilliGarlicTofuBao, sweetPotatoFriesFish];
