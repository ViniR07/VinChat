import { Text, Box, Image, Icon } from "@skynexui/components";
import appConfig from "../../config.json";
import { CSSTransition } from "react-transition-group";
import dynamic from "next/dynamic";
import { useState } from "react";
import LoadingComponent from "../UI/LoadingComponent";

const ChatInfoModal = dynamic(() => import("./ChatInfoModal"), {
	loading: () => (
		<Box
			as="article"
			styleSheet={{
				position: "absolute",
				zIndex: "100",
				top: "-250px",
				left: "-10px",
				width: {
					xs: "350px",
					md: "450px",
				},
				height: "250px",
				backgroundColor: `${appConfig.theme.colors.neutrals["900"]}ea`,
				borderRadius: "10px",
			}}
		>
			<LoadingComponent />
		</Box>
	),
});

function Mensagem({ mensagem, handleDeletaMensagem, userImage }) {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function formataData(string) {
		let time = new Date(string).toLocaleTimeString().substring(0, 5);
		let data;
		if (new Date().getDay() - new Date(string).getDay() === 0) {
			data = "Hoje";
		} else if (new Date().getDay() - new Date(string).getDay() === 1) {
			time =
				"Ontem, às: " +
				new Date(string).toLocaleTimeString().substring(0, 5);
			data = "";
		} else {
			time =
				new Date(string).toLocaleDateString() +
				", às: " +
				new Date(string).toLocaleTimeString().substring(0, 5);
			data = "";
		}
		return `${time} ${data}`;
	}

	return (
		<Text
			tag="li"
			styleSheet={{
				borderRadius: "5px",
				padding: "6px",
				userSelect: "none",
				position: "relative",
				backgroundColor:
					mensagem.userImage === userImage
						? `${appConfig.theme.colors.primary[700]}71`
						: appConfig.theme.colors.secondary[600],
				width: "50%",
				transition: ".4s",
				cursor:
					mensagem.userImage === userImage ? "pointer" : "inherit",
				margin:
					mensagem.userImage === userImage
						? "0 10% 12px 40%"
						: "0 40% 12px 10%",
				hover: {
					backgroundColor:
						mensagem.userImage === userImage
							? `${appConfig.theme.colors.primary[700]}51`
							: `${appConfig.theme.colors.secondary[600]}81`,
				},
			}}
			onDoubleClick={() => {
				if (mensagem.userImage === userImage)
					handleDeletaMensagem(mensagem.id);
			}}
		>
			<Box
				styleSheet={{
					width: "90%",
					wordBreak: "break-all",
					padding: "5px",
				}}
			>
				{mensagem.texto.startsWith(":sticker:") ? (
					<Box
						styleSheet={{
                            maxWidth: "130px",
							maxWidth: {
								xs: "130px",
								md: "160px",
							},
                            
							width: {
								xs: "130px",
							},
						}}
					>
						<Image
							styleSheet={{
								maxWidth: {
									xs: "130px",
									md: "160px",
								},
								width: {
									xs: "130px",
								},
								objectFit: "cover",
							}}
							src={mensagem.texto.replace(":sticker:", "")}
							alt="Mensagem com sticker."
						/>
					</Box>
				) : (
					<Text
						styleSheet={{
							whiteSpace: "pre-line",
							width: "80%",
						}}
					>
						{mensagem.texto}
					</Text>
				)}
			</Box>
			{userImage === mensagem.userImage && (
				<Icon
					name="FaTrash"
					size="1.6ch"
					styleSheet={{
						opacity: ".8",
						cursor: "pointer",
						position: "absolute",
						top: "5px",
						right: "5px",
					}}
					onClick={() => {
						handleDeletaMensagem(mensagem.id);
					}}
				/>
			)}
			<Box
				styleSheet={{
					marginTop: "8px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					paddingLeft: "5px",
				}}
			>
				<Box
					styleSheet={{
						display: "flex",
						alignItems: "center",
						position: "relative",
					}}
				>
					{userImage !== mensagem.userImage && mensagem.provider !== 'google' && (
						<>
							<CSSTransition
								in={modalIsOpen}
								timeout={350}
								classNames="display"
								unmountOnExit
							>
								<ChatInfoModal
									user={mensagem.de}
									setModalIsOpen={() =>
										setModalIsOpen(!modalIsOpen)
									}
								/>
							</CSSTransition>
							<style global jsx>
								{`
									.display-enter {
										opacity: 0;
										transform: scale(0.9);
									}
									.display-enter-active {
										opacity: 1;
										transform: translateX(0);
										transition: opacity 300ms,
											transform 300ms;
									}
									.display-exit {
										opacity: 1;
									}
									.display-exit-active {
										opacity: 0;
										transform: scale(0.9);
										transition: opacity 300ms,
											transform 300ms;
									}
								`}
							</style>
						</>
					)}
					<Image
						styleSheet={{
							width: "20px",
							height: "20px",
							borderRadius: "50%",
							display: "inline-block",
							marginRight: "8px",
							cursor:
								mensagem.provider !== "google"
									? "pointer"
									: "inherit",
						}}
						src={mensagem.userImage}
						disabled={
							mensagem.provider !== "google" &&
							userImage !== mensagem.userImage
						}
						onClick={() => setModalIsOpen(!modalIsOpen)}
						alt="Imagem de avatar do usuário."
					/>
					<Text tag="strong" styleSheet={{ fontSize: "15px" }}>
						{mensagem.userImage === userImage
							? "Você"
							: mensagem.de.length < 10
							? mensagem.de
							: `${mensagem.de
									.replace("_", " ")
									.substring(0, 10)}...`}
					</Text>
				</Box>
				<Text
					styleSheet={{
						fontSize: "10px",
						marginLeft: "8px",
						color: appConfig.theme.colors.neutrals[300],
					}}
					tag="span"
				>
					{formataData(mensagem.created_at)}
				</Text>
			</Box>
		</Text>
	);
}

export default Mensagem;
