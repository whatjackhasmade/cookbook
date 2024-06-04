import { Dispatch, SetStateAction } from "react";
import * as S from "./styles";
import { Ingredient } from "@/data/recipes";

export default function Ingredients({
	checkedIngredients,
	setCheckedIngredients,
	onClickStartCooking,
	ingredients,
}: {
	checkedIngredients: string[];
	setCheckedIngredients: Dispatch<SetStateAction<string[]>>;
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
								setCheckedIngredients((currentChecked) =>
									event.target.checked
										? [...currentChecked, ingredient.name]
										: currentChecked.filter((id) => id !== ingredient.name)
								);
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
