"use client";

import { useRef } from "react";
import { AnimatePresence } from "framer-motion";

import * as S from "./styles";
import { VisuallyHidden } from "../VisuallyHidden";
import { Close } from "../Icons";
import { useClickOutside } from "@/hooks/useClickOutside";

export default function Modal({
	children,
	isOpen,
	closeModal,
}: {
	children: React.ReactNode;
	isOpen?: boolean;
	closeModal: () => void;
}) {
	const ref = useRef(null);

	useClickOutside({
		ref: ref,
		handler: closeModal,
	});

	return (
		<AnimatePresence>
			{isOpen && (
				<S.Backdrop
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<S.Wrapper
						ref={ref}
						initial={{ y: "20px", opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: {
								type: "spring",
								stiffness: 100,
								damping: 20,
								duration: 0.5,
							},
						}}
						exit={{
							y: "20px",
							opacity: 0,
							transition: {
								type: "spring",
								stiffness: 100,
								damping: 20,
								duration: 2,
							},
						}}
					>
						{/* <S.Close onClick={closeModal} type="button">
							<Close />
							<VisuallyHidden>Close</VisuallyHidden>
						</S.Close> */}
						{children}
					</S.Wrapper>
				</S.Backdrop>
			)}
		</AnimatePresence>
	);
}
