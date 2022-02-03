import { Text, Image, Box } from "@skynexui/components";
import appConfig from "../../config.json";

function ListaStickers({ onStickerClick, setOpenState }) {
	return (
		<Box
			styleSheet={{
				display: "flex",
				flexDirection: "column",
				borderRadius: "5px",
				position: "absolute",
				backgroundColor: appConfig.theme.colors.neutrals[800],
				width: {
					xs: "400px",
					sm: "290px",
				},
				height: "300px",
				right: "30px",
				overflow: "hidden",
				zIndex: "1000",
				bottom: "30px",
				padding: "16px",
				boxShadow:
					"rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px",
			}}
			onClick={() => setOpenState(false)}
		>
			<Text
				styleSheet={{
					color: appConfig.theme.colors.neutrals["000"],
					fontWeight: "bold",
				}}
			>
				Stickers
			</Text>
			<Box
				tag="ul"
				styleSheet={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-between",
					flex: 1,
					paddingTop: "16px",
					overflowY: "scroll",
					marginRight: "-35px",
					paddingRight: "15px",
				}}
			>
				{appConfig.stickers.map((sticker) => (
					<Text
						onClick={() => {
							if (onStickerClick) {
								onStickerClick(sticker);
							}
						}}
						tag="li"
						key={sticker}
						styleSheet={{
							width: "50%",
							borderRadius: "5px",
							padding: "10px",
							focus: {
								backgroundColor:
									appConfig.theme.colors.neutrals[600],
							},
							hover: {
								backgroundColor:
									appConfig.theme.colors.neutrals[600],
							},
						}}
					>
						<Image src={sticker} />
					</Text>
				))}
			</Box>
		</Box>
	);
}

export default ListaStickers;
