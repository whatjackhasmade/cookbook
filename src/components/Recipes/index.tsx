import { getPrismaClient } from "@/lib/prisma";
import Link from "next/link";

export default async function Recipes() {
	const prisma = getPrismaClient();

	const users = await prisma.user.findMany();
	const user = users[0];

	const recipes = await prisma.recipe.findMany({
		where: {
			authorId: user.id,
		},
	});

	return (
		<>
			{recipes.map((recipe) => (
				<Link key={recipe.id} href={`/recipes/${recipe.id}`}>
					<h2>{recipe.title}</h2>
				</Link>
			))}
		</>
	);
}
