"use client";

import { useState } from "react";

import * as S from "./styles";
import Ingredients from "./Ingredients";
import Steps from "./Steps";
import { Recipe as RecipeType } from "@/data/recipes";

export interface RecipeFormSchema {
	ingredients: string[];
}

interface RecipeProps {
	recipe: RecipeType;
}

export default function Recipe({ recipe }: RecipeProps) {
	const [isStartingCooking, setIsStartingCooking] = useState(false);
	const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);

	return (
		<>
			<h1>{recipe.title || "Recipe"}</h1>
			<S.Contents>
				{isStartingCooking ? (
					<Steps
						steps={recipe.steps}
						onClickExitCooking={() => {
							setIsStartingCooking(false);
						}}
					/>
				) : (
					<Ingredients
						ingredients={recipe.ingredients}
						checkedIngredients={checkedIngredients}
						setCheckedIngredients={setCheckedIngredients}
						onClickStartCooking={() => {
							setIsStartingCooking(true);
						}}
					/>
				)}
			</S.Contents>
		</>
	);
}
