import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

const roboto = Roboto({
	variable: "--font-geist-sans",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "Fora Operation Manager",
	description: "A protoype portal for managing operations at Fora"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-google-analytics-opt-out="">
			<body className={`${roboto.variable}`}>{children}</body>
		</html>
	);
}
