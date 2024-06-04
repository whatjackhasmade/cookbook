import Link from "next/link";

import * as S from "./styles";

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
				].map(({ href, label }) => (
					<Link key={href} href={href}>
						{label}
					</Link>
				))}
			</S.Nav>
		</S.Wrapper>
	);
}
