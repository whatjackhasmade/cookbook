import { useRecipe } from "../context";

export default function Steps() {
	const { recipe } = useRecipe();
	const { steps } = recipe;

	return (
		<section>
			<h2>Steps</h2>

			<ol>
				{steps.map((step) => (
					<li key={step.content}>{step.content}</li>
				))}
			</ol>
		</section>
	);
}
