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
	});

	if (!recipe || !recipe.published) {
		return <h1>Recipe not found</h1>;
	}

	return (
		<>
			<h1>{recipe.title}</h1>
			{recipe.content && (
				<div dangerouslySetInnerHTML={{ __html: recipe.content }} />
			)}
		</>
	);
}
