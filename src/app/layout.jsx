import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/page";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
// import { NextUIProvider } from "@nextui-org/react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
import { lexend } from "../../config/fonts";

import { Providers } from "./themeManager";

export const metadata = {
	title: "YaePlay",
	description:
		"Online service to watch kdramas and anime for free. You can also read and download mangas for free.",
	generator: "Next.js",
	applicationName: "YaePlay",
	authors: [{ name: "Hizal", url: "https://github.com/Yaekirua" }],
	creator: "Hizal",
	keywords: [
		"Kdrama",
		"Anime",
		"Manga",
		"Watch Online",
		"watch kdrama free",
		"watch anime free online",
		"kdrama for free",
		"watch online",
		"read mangas for free",
		"mangas online",
		"movies online",
		"free movies online",
		"watch series for free",
	],
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "google",
		yandex: "yandex",
		yahoo: "yahoo",
		other: {
			me: ["zephex@duck.com"],
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={lexend.className}>
			<body>
				<SpeedInsights />
				<Analytics />
				{/* <NextUIProvider>
					<NextThemesProvider attribute="class" defaultTheme="dark">
						<Header />
						{children}
					</NextThemesProvider>
				</NextUIProvider> */}

				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
