export enum MeasurementUnit {
	Count = "count",
	Grams = "grams",
	Millimeters = "millimeters",
	Tablespoons = "tablespoons",
	Teaspoons = "teaspoons",
	Litres = "litres",
}

export type Ingredient = {
	name: string;
	quantity: string;
	unit: MeasurementUnit;
};

export type Step = {
	content: string;
};

export type Recipe = {
	title: string;
	ingredients: Ingredient[];
	steps: Step[];
	slug: string;
};

export const recipes: Recipe[] = [
	{
		slug: "chilli-garlic-tofu-bao",
		title: "CHILLI GARLIC TOFU BAO 🌶️ (makes 8)",
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
				unit: MeasurementUnit.Millimeters,
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
				unit: MeasurementUnit.Millimeters,
			},
		],
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
	},
	{
		slug: "sweet-potato-fries-and-fish",
		title: "Sweet potato fries and fish",
		ingredients: [
			{
				name: "Fish",
				quantity: "2",
				unit: MeasurementUnit.Count,
			},
			{
				name: "Sweet potatoes",
				quantity: "5",
				unit: MeasurementUnit.Count,
			},
			{
				name: "Olive oil",
				quantity: "2",
				unit: MeasurementUnit.Tablespoons,
			},
			{
				name: "Parmesan cheese (optional)",
				quantity: "15",
				unit: MeasurementUnit.Grams,
			},
			{
				name: "Corriander (optional)",
				quantity: "10",
				unit: MeasurementUnit.Grams,
			},
			{
				name: "Lemon (optional)",
				quantity: "1",
				unit: MeasurementUnit.Count,
			},
			{
				name: "Salt",
				quantity: "2",
				unit: MeasurementUnit.Grams,
			},
			{
				name: "Pepper",
				quantity: "1.5",
				unit: MeasurementUnit.Grams,
			},
			{
				name: "All purpose seasoning (optional)",
				quantity: "1",
				unit: MeasurementUnit.Teaspoons,
			},
			{
				name: "Mayonnaise or Sweet chilli sauce",
				quantity: "2",
				unit: MeasurementUnit.Tablespoons,
			},
		],
		steps: [
			{
				content: "Preheat the oven to 200°C",
			},
			{
				content: "Peel and cut the sweet potatoes into fries",
			},
			{
				content:
					"Place the sweet potatoes on a baking tray and drizzle with olive oil",
			},
			{
				content:
					"Add salt, pepper and all purpose seasoning to the sweet potatoes",
			},
			{
				content: "Bake the sweet potatoes for 5 minutes",
			},
			{
				content: "Add the fish to the baking tray and bake for 25 minutes",
			},
			{
				content:
					"Serve the sweet potatoes and fish with mayonnaise or sweet chilli sauce",
			},
		],
	},
];
