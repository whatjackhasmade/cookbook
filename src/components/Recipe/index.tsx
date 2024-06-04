"use client";

import * as S from "./styles";
import Ingredients from "./Ingredients";
import Steps from "./Steps";
import { Recipe as RecipeType } from "@/data/recipes";
import Link from "next/link";
import { useRecipe, withRecipeContext } from "./context";
import Progress from "./Progress";

export interface RecipeFormSchema {
	ingredients: string[];
}

interface RecipeProps {
	recipe: RecipeType;
}

function Recipe({ recipe }: RecipeProps) {
	const { stage } = useRecipe();

	return (
		<>
			<S.Title>{recipe.title}</S.Title>
			<Progress />
			<S.Contents>
				{(() => {
					switch (stage) {
						case 0:
							return <Ingredients />;
						case 1:
							return <Steps />;
						default:
							return null;
					}
				})()}
			</S.Contents>
		</>
	);
}

export default withRecipeContext(Recipe);
