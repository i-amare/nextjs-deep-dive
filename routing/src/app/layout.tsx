import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<main className='flex min-h-screen flex-col items-center p-24'>
					<div className='flex gap-2'>
						<Link href='/about'>About</Link>
						<Link href='/'>Home</Link>
						<Link href='/portfolio'>Portfolio</Link>
					</div>
					{children}
				</main>
			</body>
		</html>
	);
}
