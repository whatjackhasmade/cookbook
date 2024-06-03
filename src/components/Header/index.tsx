import Link from "next/link";

import * as S from "./styles";
import CreateButton from "./CreateButton";

export default function Header() {
	return (
		<S.Wrapper>
			<Link href="/">
				<h1>Cookbook</h1>
			</Link>
			<S.Nav>
				{[
					{
						href: "/",
						label: "Home",
					},
					{
						href: "/recipes",
						label: "Recipes",
					},
					{
						href: "/create",
						label: "Create",
					},
				].map(({ href, label }) => (
					<Link key={href} href={href}>
						{label}
					</Link>
				))}
			</S.Nav>
		</S.Wrapper>
	);
}
