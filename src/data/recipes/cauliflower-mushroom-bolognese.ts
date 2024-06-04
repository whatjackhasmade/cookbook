import { MeasurementUnit } from "@/enums";
import { Recipe } from ".";

const recipe: Recipe = {
	description:
		"A rich and luxurious veggie-packed bolognese. You won't miss the meat in this beauty.",
	servingSize: 4,
	time: 60,
	emojis: "🍄 🍝",
	slug: "cauliflower-mushroom-bolognese",
	title: "Cauliflower and mushroom bolognese",
	steps: [
		{
			content:
				"Heat oven to 230°C. Grab your food processor if you have one - it will be your best friend here! If you don't, no panic. Simply finely chopping will do the job. It will slightly increase your prep time but I promise, it's worth it.",
		},
		{
			content:
				"Add the mushrooms to the processor and pulse until coarse. Break the cauliflower into florets and, working in batches, repeat the process until the cauliflower starts to resemble grains of rice. Then do the same with the walnuts.",
		},
		{
			content:
				"Add cauliflower and mushrooms to 2 lined baking trays and drizzle with most of the olive oil. Season with salt and lots of pepper, then roast for 20 mins. Add the walnuts, give it a good mix, and cook for 15 more, flipping the trays to make sure it's all golden. You want everything to be golden and starting to catch - then it's done.",
		},
		{
			content:
				"Blitz celery, onion and garlic in the processor, no need to clean it out. Heat the remaining oil over a medium heat and cook it all in a pan for 10 mins along with the thyme. Add tomato purée and miso, and cook for 2 mins, then add the cauliflower, mushrooms, and walnuts and water. Simmer for 20 mins until thickened. Then mix through the cream.",
		},
		{
			content:
				"Get your salted pasta water on to boil, then add in the pasta, cooking to package instructions. Grate your parmesan. Add the Parmesan to the ragù and transfer the pasta directly from its pot along with a good slosh of pasta water. Mix vigorously to emulsify until its really glossy. Garnish with more thyme and a little more Parm if you like.",
		},
	],
	ingredients: [
		{
			quantity: "10",
			name: "Vegetable stock (cube or other)",
			unit: MeasurementUnit.Grams,
		},
		{
			quantity: "1 splash",
			name: "Worcestershire sauce",
			unit: MeasurementUnit.Count,
		},
		{
			quantity: "4",
			name: "Paprika",
			unit: MeasurementUnit.Grams,
		},
		{
			quantity: "1 generous pinch",
			name: "Mixed herbs",
			unit: MeasurementUnit.Count,
		},
		{
			quantity: "1 pinch",
			name: "Salt",
			unit: MeasurementUnit.Count,
		},
		{
			quantity: "1 pinch",
			name: "Black pepper",
			unit: MeasurementUnit.Count,
		},
		{
			quantity: "2 tins",
			name: "Chopped tomatoes",
			unit: MeasurementUnit.Count,
		},
		{
			quantity: "1 pinch",
			name: "All purpose seasoning",
			optional: true,
			unit: MeasurementUnit.Count,
		},
		{
			name: "Celery",
			quantity: "4",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Sprigs of fresh thyme",
			quantity: "5",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Miso paste",
			quantity: "2",
			unit: MeasurementUnit.Tablespoons,
		},
		{
			name: "Punnet of chestnut mushrooms",
			quantity: "1/2",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Whole cauliflower",
			quantity: "1",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Red onion",
			quantity: "2",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Tomato purée",
			quantity: "5",
			unit: MeasurementUnit.Tablespoons,
		},
		{
			name: "Garlic cloves",
			quantity: "4",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Parmesan",
			quantity: "70",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Olive oil",
			quantity: "6",
			unit: MeasurementUnit.Tablespoons,
		},
		{
			name: "Water",
			quantity: "600",
			unit: MeasurementUnit.Milliliters,
		},
		{
			name: "Cream cheese",
			optional: true,
			quantity: "5",
			unit: MeasurementUnit.Tablespoons,
		},
	],
};

export default recipe;
