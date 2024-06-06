import { useEffect } from "react";

export function useLockBodyScroll({ isLocked }: { isLocked: boolean }) {
	useEffect(() => {
		if (isLocked) {
			const originalStyle = window.getComputedStyle(document.body).overflow;
			document.body.style.overflow = "hidden";

			return () => {
				document.body.style.overflow = originalStyle;
			};
		}
	}, [isLocked]);
}
