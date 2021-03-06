import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import appConfig from "../../config.json";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingPage from "../UI/LoadingPage";

function GlobalStyle() {
	return (
		<style global jsx>{`
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
				list-style: none;
			}
			body {
				font-family: "Open Sans", sans-serif;
			}
			/* App fit Height */
			html,
			body,
			#__next {
				min-height: 100vh;
				display: flex;
				flex: 1;
			}
			#__next {
				flex: 1;
			}
			#__next > * {
				flex: 1;
			}
			/* ./App fit Height */
		`}</style>
	);
}

export default function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState();
	const route = useRouter();

	useEffect(() => {
		route.events.on("routeChangeStart", () => setLoading(true));
		route.events.on("routeChangeComplete", () => setLoading(false));
	}, [route.events]);

	return (
		<>
			<Head>
				<title>VinChat - Plataforma de Conversas</title>
				<link rel="icon" href="/flaticon.png" />
			</Head>
			<GlobalStyle />
			<NextNProgress
				color={`linear-gradient(90deg, ${appConfig.theme.colors.secondary[700]} 30%, ${appConfig.theme.colors.primary[600]} 100%)`}
				height={5}
			/>
			{!loading ? <Component {...pageProps} /> : <LoadingPage />}
		</>
	);
}
