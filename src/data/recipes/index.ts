import { MeasurementUnit } from "@/enums";

import chilliGarlicTofuBao from "./chilli-garlic-tofu-bao";
import sweetPotatoFriesAndFish from "./sweet-potato-fries-and-fish";

export type Ingredient = {
	name: string;
	quantity: string;
	unit: MeasurementUnit;
};

export type Step = {
	content: string;
};

export type Recipe = {
	emojis?: string;
	title: string;
	ingredients: Ingredient[];
	steps: Step[];
	slug: string;
};

export const recipes: Recipe[] = [chilliGarlicTofuBao, sweetPotatoFriesAndFish];
