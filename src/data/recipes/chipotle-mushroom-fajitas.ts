import { MeasurementUnit, RecipeSlug } from "@/enums";
import { Recipe } from ".";

// "name":"Chipotle Mushroom Tacos With Green Tahini Slaw","recipeInstructions":,"recipeYield":4,"author":{"@type":"Organization","name":"Mob","url":"https://www.mob.co.uk/recipes"},"keywords":"Chipotle Mushroom Tacos With Green Tahini Slaw, mushroom tacos, easy mushroom tacos, taco recipe, easy taco recipe, taco recipes, mob, mob kitchen tacos","nutrition":{"@type":"NutritionInformation","servingSize":4}},"ingredientsInclude":[],"excludeChefs":[],"excludeComplexity":[],"excludeCost":[],"excludeCuisines":[],"excludeDietaryRequirements":[],"excludeMeals":[],"excludeOccasions":[],"excludeTypes":[],"excludeIngredients":[],"timeFilterLessThan":null,"timeFilterMoreThan":null,"excludeRecipes":[]}]},{"id":"5471568","typeHandle":"linkItem","label":"Login","href":"/login"},{"id":"5471569","typeHandle":"linkItem","label":"Articles","href":"/life"},{"id":"5471570","typeHandle":"linkItem","label":"Shop","href":"/shop"}]},"recipe":{"id":"4410764","title":"Chipotle Mushroom Tacos With Green Tahini Slaw","slug":"chipotle-mushroom-taco-with-green-tahini-slaw","uri":"recipes/chipotle-mushroom-taco-with-green-tahini-slaw","url":"https://www.mob.co.uk/recipes/chipotle-mushroom-taco-with-green-tahini-slaw","sectionId":1,"sectionHandle":"recipes","typeId":1,"typeHandle":"recipe","postDate":"2024-04-16T10:00:00+01:00","status":"live","redirectTo":null,"heroTitle":"Chipotle Mushroom\n\u003cstrong\u003eTacos with\u003c/strong\u003e\n\u003cem\u003eGreen Tahini Slaw\u003c/em\u003e","summary":"These super savoury tacos are an absolute godsend. This recipe is the perfect dish to whip up when you want to impress guests with minimal effort.","image":[{"id":"4410790","width":3618,"height":3618,"url":"https://files.mob-cdn.co.uk/recipes/2023/06/Chipotle-Mushroom-Tacos-With-Green-Tahini-Slaw.jpg","title":"Chipotle Mushroom Tacos With Green Tahini Slaw"}],"cuisines":[{"id":"78667","title":"Mexican-Inspired","slug":"mexican-recipes","uri":null,"groupId":1,"groupHandle":"cuisines","dateCreated":"2020-02-19T15:19:18+00:00"}],"chefs":[{"id":"4715044","title":"Ben Lippett","slug":"ben-lippett","uri":"chefs/ben-lippett","groupId":20,"groupHandle":"chefs","dateCreated":"2023-11-30T14:27:58+00:00","summary":"Ben Lippett is a cook, food writer, recipe developer, and co-founder of Dr Sting's Hot Honey. Ben spent years working at a spate of restaurants in the UK and Australia – including a brief but rewarding stint at a butcher's – before making the leap to food media.","image":[{"id":"4724605","width":1290,"height":1420,"url":"https://files.mob-cdn.co.uk/files/IMG_0689.jpg","title":"Ben Lippett"}]}],"dietaryRequirements":[{"id":"78700","title":"Vegan","slug":"vegan-recipes","uri":null,"groupId":3,"groupHandle":"dietaryRequirements","dateCreated":"2020-02-19T15:25:23+00:00","icon":[{"id":"2567068","width":625,"height":625,"url":"https://files.mob-cdn.co.uk/icons/dietary/MOB_Icons_White_Dietary_2.png","titl…

const recipe: Recipe = {
  description: "These super savoury tacos are an absolute godsend.",
  servingSize: 2,
  time: 55,
  emojis: "🌯 🌶",
  related: [RecipeSlug.Fajitas],
  ingredients: [
    {
      name: "Ground coriander",
      quantity: "1",
      unit: MeasurementUnit.Teaspoons,
    },
    {
      name: "Ground cumin",
      quantity: "1",
      unit: MeasurementUnit.Teaspoons,
    },
    {
      name: "Chipotle paste",
      quantity: "2",
      unit: MeasurementUnit.Tablespoons,
    },
    {
      name: "Punnet of oyster mushrooms (150g)",
      quantity: "1",
      unit: MeasurementUnit.Count,
    },
    {
      name: "Red bell peppers",
      quantity: "2",
      unit: MeasurementUnit.Count,
    },
    {
      name: "Red onions",
      quantity: "2",
      unit: MeasurementUnit.Count,
    },
    {
      name: "Garlic cloves",
      quantity: "4",
      unit: MeasurementUnit.Count,
    },
    {
      name: "Coriander bunches",
      quantity: "2",
      unit: MeasurementUnit.Count,
    },
    {
      name: "Pickled jalapenos",
      quantity: "100",
      unit: MeasurementUnit.Grams,
    },
    {
      name: "Olive oil",
      quantity: "2",
      unit: MeasurementUnit.Tablespoons,
    },
    {
      name: "Mayonnaise",
      quantity: "2",
      unit: MeasurementUnit.Tablespoons,
    },
    {
      name: "Cheese (whatever kind you want)",
      quantity: "50",
      unit: MeasurementUnit.Grams,
    },
  ],
  slug: RecipeSlug.ChipotleMushroomFajitas,
  title: "Chipotle mushroom fajitas",
  steps: [
    {
      content: "Preheat the oven to 220°C.",
    },
    { content: "Grab the mushrooms and rub with plenty of salt and the spice mix, then set aside." },
    { content: "Thinly slice two of the red onions" },
    {
      content: "Peel and finely slice the garlic cloves or use a garlic press",
    },
    {
      content:
        "Set an ovenproof, flameproof casserole or roasting tray over a high heat. Add a glug of olive oil and the sliced onions with a big pinch of salt. Cook for 5 mins until starting to caramelise.",
    },
    {
      content:
        "Add the garlic, stir through and sit the mushrooms on top along with all the marinade. Chuck the whole lot in the oven for 35-40 mins or until the onions are jammy and the mushrooms are tender.",
    },
    {
      content:
        "Meanwhile, blend the tahini with a handful of the jalapeños, one bunch of coriander, a splash of jalapeño liquor and a splash of water. Season with salt and a squeeze of lime if needed.",
    },
    {
      content:
        "Now, thinly slice the cabbage and remaining onion, then add to a large mixing bowl. Pour over the tahini mixture and chuck in the remaining jalapeños. Roughly chop the remaining coriander and add to the bowl.",
    },
    { content: "Toss everything together and add a squeeze of lime if necessary." },
    { content: "Heat your tortillas according to the pack instructions." },
    { content: "Pull your mushrooms out of the oven and rest for a couple of minutes. Shred with a couple of forks." },
    { content: "Build your tacos up with plenty of caramelised onions, pulled ’shrooms, slaw and a squeeze of lime. Get stuck in." },
  ],
};

export default recipe;
