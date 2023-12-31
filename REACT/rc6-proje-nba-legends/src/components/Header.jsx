import React from "react";
import { Container, Image } from "react-bootstrap";
import nbalogo from "../assets/nba-logo.png";

const Header = () => {
	return (
		<Container>
			<Image src={nbalogo} width="200px"></Image>
			<h1 className="my-2 font-monospace display-4 fw-bold">NBA Legends</h1>
		</Container>
	);
};

export default Header;
