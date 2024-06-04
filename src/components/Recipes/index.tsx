import { recipes } from "@/data/recipes";
import Link from "next/link";

export default async function Recipes() {
	return recipes.map((recipe) => (
		<article key={recipe.slug}>
			<Link href={`/recipes/${recipe.slug}`}>
				<h2>{recipe.title}</h2>
			</Link>
		</article>
	));
}
