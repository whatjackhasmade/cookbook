"use client";

import { FieldArray, Field, FormikProvider, useFormik } from "formik";
import { Recipe } from "@prisma/client";

import * as S from "./styles";
import * as Icons from "@/components/Icons";
import { useRouter } from "next/navigation";

export default function CreateRecipe() {
	const { push } = useRouter();

	const formik = useFormik({
		onSubmit: async (values) => {
			const response = await fetch("/api/recipes", {
				method: "POST",
				body: JSON.stringify(values),
			});

			const recipe: Recipe = await response.json();
			console.log(recipe);

			push(`/recipes/${recipe.id}`);
		},
		initialValues: {
			title: "",
			ingredients: [{ name: "", quantity: 0, unit: "" }],
			steps: [{ content: "" }],
		},
		validate: (values) => {
			const errors: {
				title?: string;
			} = {};

			console.log(values);

			return errors;
		},
	});

	return (
		<FormikProvider value={formik}>
			<form onSubmit={formik.handleSubmit}>
				<label htmlFor="title">Title</label>
				<input
					id="title"
					type="text"
					name="title"
					onChange={formik.handleChange}
					value={formik.values.title}
				/>
				{formik.errors.title && <div>{formik.errors.title}</div>}

				<h2>Ingredients</h2>
				<FieldArray
					name="ingredients"
					render={(arrayHelpers) => (
						<div>
							{formik.values.ingredients.map((ingredient, index) => (
								<div key={index}>
									<S.StepWrapper>
										<div>
											<label htmlFor={`ingredients.${index}.unit`}>Unit</label>
											<select
												id={`ingredients.${index}.unit`}
												name={`ingredients.${index}.unit`}
												onChange={formik.handleChange}
												value={formik.values.ingredients[index].unit}
											>
												<option value="count">Count</option>
												<option value="grams">Grams (g)</option>
												<option value="millilitres">Millilitres (mL)</option>
												<option value="tablespoons">Tablespoons (tbsp)</option>
												<option value="teaspoons">Teaspoons (tsp)</option>
												<option value="litres">Litres (L)</option>
											</select>
										</div>
										<div>
											<label htmlFor={`ingredients.${index}.quantity`}>
												Quantity
											</label>
											<Field
												id={`ingredients.${index}.quantity`}
												name={`ingredients.${index}.quantity`}
											/>
										</div>
										<div>
											<label htmlFor={`ingredients.${index}.name`}>Name</label>
											<Field
												id={`ingredients.${index}.name`}
												name={`ingredients.${index}.name`}
											/>
										</div>
										<S.Remove
											type="button"
											onClick={() => arrayHelpers.remove(index)}
										>
											<Icons.DeleteForever />
											<S.VisuallyHidden>
												Remove ingredient {index + 1}
											</S.VisuallyHidden>
										</S.Remove>
									</S.StepWrapper>
								</div>
							))}
							<button
								type="button"
								onClick={() =>
									arrayHelpers.push({ name: "", quantity: 0, unit: "" })
								}
							>
								{formik.values.ingredients.length
									? "Add another ingredient"
									: "Add an ingredient"}
							</button>
						</div>
					)}
				/>

				<h2>Steps</h2>
				<FieldArray
					name="steps"
					render={(arrayHelpers) => (
						<div>
							{formik.values.steps.map((step, index) => (
								<div key={index}>
									<label htmlFor={`steps.${index}.content`}>
										Step {index + 1}
									</label>
									<S.StepWrapper>
										<Field
											id={`steps.${index}.content`}
											name={`steps.${index}.content`}
										/>
										<S.Remove
											type="button"
											onClick={() => arrayHelpers.remove(index)}
										>
											<Icons.DeleteForever />
											<S.VisuallyHidden>
												Remove step {index + 1}
											</S.VisuallyHidden>
										</S.Remove>
									</S.StepWrapper>
								</div>
							))}
							<button
								type="button"
								onClick={() => arrayHelpers.push({ content: "" })}
							>
								{formik.values.steps.length ? "Add another step" : "Add a step"}
							</button>
						</div>
					)}
				/>

				<button type="submit">Create</button>
			</form>
		</FormikProvider>
	);
}
