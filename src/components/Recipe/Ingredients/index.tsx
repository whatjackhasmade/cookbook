"use client";

import * as S from "./styles";
import { Ingredient } from "@/data/recipes";

export default function Ingredients({
	checkedIngredients,
	setCheckedIngredients,
	onClickStartCooking,
	ingredients,
}: {
	checkedIngredients: string[];
	setCheckedIngredients: (ingredients: string[]) => void;
	onClickStartCooking: () => void;
	ingredients: Ingredient[];
}) {
	return (
		<section>
			<h2>Ingredients</h2>
			<S.Ingredients>
				{ingredients.map((ingredient) => (
					<li key={ingredient.name}>
						<input
							checked={checkedIngredients.includes(ingredient.name)}
							name={ingredient.name}
							id={ingredient.name}
							type="checkbox"
							onChange={(event) => {
								const { checked } = event.target;

								const newIngredients = checked
									? [...checkedIngredients, ingredient.name]
									: checkedIngredients.filter((id) => id !== ingredient.name);

								setCheckedIngredients(newIngredients);
							}}
						/>
						<label htmlFor={ingredient.name}>
							{ingredient.quantity} {ingredient.unit} of {ingredient.name} -
						</label>
					</li>
				))}
			</S.Ingredients>
			{checkedIngredients.length === ingredients.length ? (
				<button onClick={onClickStartCooking} type="button">
					Start cooking
				</button>
			) : (
				<>
					<p>
						Check off the ingredients you have, or{" "}
						<S.CheckAll
							onClick={() => {
								setCheckedIngredients(
									ingredients.map((ingredient) => ingredient.name)
								);
							}}
							type="button"
						>
							check all ingredients off
						</S.CheckAll>
					</p>
				</>
			)}
		</section>
	);
}
