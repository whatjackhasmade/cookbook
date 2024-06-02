import Link from "next/link";

export default function Home() {
	return (
		<>
			<Link
				href={{
					pathname: "/recipes",
				}}
			>
				View recipes
			</Link>
		</>
	);
}
