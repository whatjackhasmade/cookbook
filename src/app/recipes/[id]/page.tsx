import { getPrismaClient } from "@/lib/prisma";

export default async function Recipe({
	params,
	searchParams,
}: {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const prisma = getPrismaClient();

	const recipe = await prisma.recipe.findUnique({
		where: {
			id: params.id,
		},
		select: {
			id: true,
			ingredients: {
				select: {
					id: true,
					name: true,
					quantity: true,
					unit: true,
				},
			},
			steps: {
				select: {
					id: true,
					content: true,
				},
			},
			title: true,
		},
	});

	if (!recipe) {
		return <h1>Recipe not found</h1>;
	}

	return (
		<>
			<h1>{recipe.title || "Recipe"}</h1>
			<h2>Ingredients</h2>
			<ul>
				{recipe.ingredients.map((ingredient) => (
					<li key={ingredient.id}>
						{ingredient.name} - {ingredient.quantity} {ingredient.unit}
					</li>
				))}
			</ul>
			<h2>Steps</h2>
			<ol>
				{recipe.steps.map((step) => (
					<li key={step.id}>{step.content}</li>
				))}
			</ol>
		</>
	);
}
