import Head from "next/head";
import flaticon from "../public/flaticon.png"

function GlobalStyle() {
	return (
		<style global jstyleSheet>{`
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
    return (
        <>
            <Head>
                <title>VinChat - Plataforma de Conversas</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href={flaticon.src} />
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}