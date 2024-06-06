import { MeasurementUnit, RecipeSlug } from "@/enums";
import { Recipe } from ".";

const recipe: Recipe = {
  emojis: "🌶️ 🍞",
  ingredients: [
    {
      name: "firm tofu",
      quantity: "200",
      unit: MeasurementUnit.Grams,
    },
    {
      name: "spring onions",
      quantity: "2",
      unit: MeasurementUnit.Count,
    },
    {
      name: "crispy chilli oil",
      quantity: "2",
      unit: MeasurementUnit.Tablespoons,
    },
    {
      name: "tamari (or dark soy sauce)",
      quantity: "2",
      unit: MeasurementUnit.Tablespoons,
    },
    {
      name: "agave",
      quantity: "1/2",
      unit: MeasurementUnit.Tablespoons,
    },
    {
      name: "rice vinegar",
      quantity: "1/2",
      unit: MeasurementUnit.Tablespoons,
    },
    {
      name: "water",
      quantity: "70",
      unit: MeasurementUnit.Milliliters,
    },
    {
      name: "cornstarch",
      quantity: "1/2",
      unit: MeasurementUnit.Tablespoons,
    },
    {
      name: "garlic cloves",
      quantity: "4",
      unit: MeasurementUnit.Count,
    },
    {
      name: "flour",
      quantity: "125",
      unit: MeasurementUnit.Grams,
    },
    {
      name: "sugar",
      quantity: "1",
      unit: MeasurementUnit.Teaspoons,
    },
    {
      name: "yeast",
      quantity: "1",
      unit: MeasurementUnit.Teaspoons,
    },
    {
      name: "salt",
      quantity: "1/2",
      unit: MeasurementUnit.Teaspoons,
    },
    {
      name: "warm water",
      quantity: "70",
      unit: MeasurementUnit.Milliliters,
    },
  ],
  slug: RecipeSlug.ChilliGarlicTofuBao,
  steps: [
    {
      content:
        "For the dough: mix the yeast sugar & water in a jug then set aside to sit until foamy on top",
    },
    {
      content:
        "Mix the flour & salt in a mixing bowl, make a well in the centre then pour in the yeast mixture",
    },
    {
      content:
        "Stir until a slightly sticky (but not wet) dough forms then transfer to a clean surface & knead for 5-10 minutes until smooth",
    },
    {
      content:
        "Return it to the bowl, cover & let it rest for about an hour until doubled in size",
    },
    {
      content:
        "Meanwhile, make the filling: add the tofu to a baking tray, drizzle lightly with oil & bake at 200°C for 25-30 minutes until golden & crispy in parts (you want various textures)",
    },
    {
      content:
        "Mix the chilli oil, tamari, agave, rice vinegar, water & cornstarch together to make the sauce mix & set aside",
    },
    {
      content:
        "Sauté the spring onion & garlic for 1-2 minutes until fragrant then pour in the sauce mix. simmer until thickened then add the tofu, stir so everything is coated then set aside to cool before using",
    },
    {
      content:
        "When the dough has risen, transfer to a clean surface, divide it into 8 equal balls & roll each one out into approximately 1/4 thick discs",
    },
    {
      content:
        "Place about & tablespoon of filling in the centre of a disc then fold the edges up, pinching to seal until you have a secure bun",
    },
    {
      content:
        "Add the buns to a pan over a medium heat with enough oil to coat the bottom of the pan, pour in enough water to line the bottom then cover immediately (it will spit) & steam for 10 minutes",
    },
    {
      content:
        "Remove the lid & keep frying until the bottoms are golden & crisp then serve topped with chilli oil, spring onion & sesame seeds",
    },
  ],
  title: "Chilli garlic tofu bao",
};

export default recipe;
