import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import "./globals.css";
import "./pico.classless.indigo.min.css";
import Header from "@/components/Header";
import StyledComponentsRegistry from "@/lib/registry";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });

export const metadata: Metadata = {
	description: "Save your recipes",
	title: "Cookbook",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<Header />
					<Main>{children}</Main>
					<Footer />
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
