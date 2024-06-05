import { RecipeSlug } from "@/enums";
import { Recipe } from ".";

const recipe: Recipe = {
  emojis: "🌯",
  slug: RecipeSlug.Fajitas,
  title: "Fajitas",
  ingredients: [],
  steps: [],
  related: [RecipeSlug.ChipotleMushroomFajitas],
};

export default recipe;
