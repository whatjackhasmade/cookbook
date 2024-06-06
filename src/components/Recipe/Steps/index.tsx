"use client";

import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useRecipe } from "../context";
import FocusMode from "./FocusMode";
import Modal from "@/components/Modal";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Steps() {
	const { replace } = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const focused = searchParams.get("focused");

	useLockBodyScroll({
		isLocked: !!focused,
	});

	const { recipe } = useRecipe();
	const { steps } = recipe;

	return (
		<section>
			<h2>Steps</h2>
			<button
				onClick={() => {
					replace(`${pathname}?focused=true&step=0`);
				}}
				type="button"
			>
				Start focus
			</button>

			<Modal
				isOpen={!!focused}
				closeModal={() => {
					replace(pathname);
				}}
			>
				<FocusMode />
			</Modal>
			<ol>
				{steps.map((step) => (
					<li key={step.content}>{step.content}</li>
				))}
			</ol>
		</section>
	);
}
