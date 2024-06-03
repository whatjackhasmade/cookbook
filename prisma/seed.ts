import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const recipes = [
	{
		name: "CHILLI GARLIC TOFU BAO 🌶️",
		ingredients: [
			{
				name: "Tofu",
				quantity: "200",
				unit: "g",
			},
			{
				name: "Bao buns",
				quantity: "4",
				unit: "",
			},
			{
				name: "Chilli garlic sauce",
				quantity: "1",
				unit: "tbsp",
			},
		],
		steps: [
			{
				content:
					"1. for the dough: mix the yeast sugar & water in a jug then set aside to sit until foamy on top",
			},
		],
	},
];

async function main() {
	recipes.forEach(async (recipe) => {
		console.log(`Creating recipe: ${recipe.name}`);

		await prisma.recipe.create({
			data: {
				title: recipe.name,
				ingredients: {
					create: recipe.ingredients,
				},
				steps: {
					create: recipe.steps,
				},
			},
		});

		console.log(`Created recipe: ${recipe.name}`);
	});
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
