import { RefObject, useEffect } from "react";

export function useClickOutside({
	ref,
	handler,
}: {
	ref: RefObject<any>;
	handler: (event: MouseEvent) => void;
}) {
	useEffect(() => {
		// Define the click handler
		const handleClickOutside = (event: MouseEvent) => {
			// Check if the click is outside the ref's element
			if (ref.current && !ref.current.contains(event.target)) {
				handler(event);
			}
		};

		// Add event listener
		document.addEventListener("mousedown", handleClickOutside);

		// Clean up the event listener
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, handler]);
}
