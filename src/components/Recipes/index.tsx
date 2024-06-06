import { recipes } from "@/data/recipes";
import { VisuallyHidden } from "../VisuallyHidden";
import Link from "next/link";

import * as S from "./styles";

export default function Recipes() {
	return (
		<S.Items>
			{recipes.map((recipe) => (
				<S.Item key={recipe.slug}>
					<S.Emojis role="img">{recipe.emojis}</S.Emojis>
					<S.Title>{recipe.title}</S.Title>
					<Link href={`/recipes/${recipe.slug}`}>
						<VisuallyHidden>{recipe.title}</VisuallyHidden>
					</Link>
				</S.Item>
			))}
		</S.Items>
	);
}
