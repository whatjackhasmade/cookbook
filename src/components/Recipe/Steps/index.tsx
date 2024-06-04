import { Step } from "@/data/recipes";

export default function Steps({
	steps,
	onClickExitCooking,
}: {
	steps: Step[];
	onClickExitCooking: () => void;
}) {
	return (
		<section>
			<button onClick={onClickExitCooking} type="button">
				Exit cooking
			</button>

			<h2>Steps</h2>

			<ol>
				{steps.map((step) => (
					<li key={step.content}>{step.content}</li>
				))}
			</ol>
		</section>
	);
}
