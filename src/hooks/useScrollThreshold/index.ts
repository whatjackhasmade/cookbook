"use client";

import { MutableRefObject, useEffect, useRef } from "react";

export function useScrollThreshold({
	container,
	onScrollUp,
	onScrollDown,
}: {
	container?: MutableRefObject<HTMLElement | null>;
	onScrollUp?: () => void;
	onScrollDown?: () => void;
}) {
	const lastScrollY = useRef(0);
	const timeoutId = useRef<NodeJS.Timeout | null>(null);
	const lastCallbackTime = useRef<number>(0);

	useEffect(() => {
		const handleScroll = (event: WheelEvent) => {
			const currentScrollY = document.documentElement.scrollTop;
			const currentTime = Date.now();
			const scrollDifference = event.deltaY;

			if (timeoutId.current) {
				clearTimeout(timeoutId.current);
			}

			if (Math.abs(scrollDifference) > 1) {
				if (scrollDifference > 0) {
					// Scrolling down
					onScrollDown?.();
				} else {
					// Scrolling up
					onScrollUp?.();
				}
				lastCallbackTime.current = currentTime;
			}

			lastScrollY.current = currentScrollY;

			timeoutId.current = setTimeout(() => {
				// Reset after 0.2 second of no scrolling
				lastCallbackTime.current = Date.now();
			}, 200);
		};

		window.addEventListener("wheel", handleScroll);

		return () => {
			if (timeoutId.current) {
				clearTimeout(timeoutId.current);
			}
			window.removeEventListener("wheel", handleScroll);
		};
	}, [onScrollUp, onScrollDown, container]);

	// No return value as this hook does not expose any state or functions
}
