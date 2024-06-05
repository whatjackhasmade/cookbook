import { MeasurementUnit, RecipeSlug } from "@/enums";

import briocheBuns from "./brioche-buns";
import cauliflowerMushroomBolognese from "./cauliflower-mushroom-bolognese";
import chilliGarlicTofuBao from "./chilli-garlic-tofu-bao";
import chipotleMushroomFajitas from "./chipotle-mushroom-fajitas";
import fajitas from "./fajitas";
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
  youtube?: string;
};

export const recipes: Recipe[] = [briocheBuns, cauliflowerMushroomBolognese, chilliGarlicTofuBao, chipotleMushroomFajitas, fajitas, sweetPotatoFriesFish];
