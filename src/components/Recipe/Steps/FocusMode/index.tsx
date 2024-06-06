"use client";

import { useRecipe } from "../../context";
import * as S from "./styles";
import { useScrollThreshold } from "@/hooks";
import { Caveat } from "next/font/google";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const caveat = Caveat({ subsets: ["latin"] });

export default function FocusMode() {
	const searchParams = useSearchParams();
	const currentStep = searchParams.get("step");
	const pathname = usePathname();
	const { replace } = useRouter();

	function appendQueryParams(params: Record<string, string>) {
		const searchParams = new URLSearchParams(window.location.search);

		Object.entries(params).forEach(([key, value]) => {
			searchParams.set(key, value);
		});

		replace(`${pathname}?${searchParams.toString()}`);
	}

	function goToNextStep() {
		if (!currentStep || parseInt(currentStep) === steps.length) return;

		appendQueryParams({ step: `${parseInt(currentStep ?? "0") + 1}` });
	}

	function goToPreviousStep() {
		if (!currentStep || parseInt(currentStep) === 0) return;

		appendQueryParams({ step: `${parseInt(currentStep) - 1}` });
	}

	useScrollThreshold({
		onScrollDown: goToNextStep,
		onScrollUp: goToPreviousStep,
	});

	const { recipe } = useRecipe();
	const { steps } = recipe;
	const step = steps[currentStep ? parseInt(currentStep) : 0];

	return step ? (
		<S.Step className={caveat.className}>{step.content}</S.Step>
	) : (
		<S.Step className={caveat.className}>All done, enjoy</S.Step>
	);
}
