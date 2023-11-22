import flowers from "./img/flowers.jpg";
import "./Content.css";

const Content = () => {
	//? Local Style Object
	const pStyle = {
		fontFamily: "Tahoma",
		fontSize: "1.3rem",
		lineHeight: "1.5",
	};

	const imgStyle = {
		display: "block",
		margin: "1rem auto",
		width: "400px",
	};
	return (
		<div>
			{/*JSX */}
			{/* Inline Styling */}
			<h2 style={{ color: "white", backgroundColor: "red" }}>React JS</h2>
			<p style={pStyle}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
				temporibus.
			</p>
			<img
				style={imgStyle}
				src="https://cdn.pixabay.com/photo/2018/02/25/17/31/crocus-3181187_640.jpg"
				alt="spring-img1"
			/>

			<img style={imgStyle} src={flowers} alt="flowers-img2" />

			<p className="par">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo
				officia asperiores et magni, sunt ullam quaerat iste, consectetur
				veritatis inventore nulla at reprehenderit dolor quidem laboriosam
				excepturi voluptatum placeat id, architecto nemo rem tempore ipsum ab!
				Architecto, odit culpa.
			</p>
			<p className="par">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
				quo hic, error aut voluptate animi. Ipsa harum non pariatur quas.
			</p>
		</div>
	);
};

export default Content;
