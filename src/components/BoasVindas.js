import { Box, Image, Text } from "@skynexui/components";
import React from "react";
import appConfig from "../../config.json";
import flaticon from "../../public/flaticon.png";

export default function BoasVindas({ username, userValido }) {
	return (
		<Box
			styleSheet={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
                width: '100%'
			}}
		>
			<Image
				styleSheet={{
					marginTop: "-15px",
				}}
				src={flaticon.src}
				alt="Logo da plataforma"
			/>
			<Text
				variant="h2"
				styleSheet={{
					color: appConfig.theme.colors.neutrals["100"],
					fontSize: "25px",
					fontWeight: "bold",
					margin: "0px 20px 20px 20px",
                    width: '100%'
				}}
			>
				{username.length > 2 && userValido
					? `Bem-Vindo(a) ${username}, ao `
					: "Bem-Vindo(a) ao "}
				<Text
					styleSheet={{
						color: appConfig.theme.colors.primary["600"],
						fontSize: "25px",
						fontWeight: "bold",
						transition: ".4s",
					}}
				>
					{appConfig.name}!
				</Text>
			</Text>
		</Box>
	);
}
