//? Componenet ler fonksiyonlarda oldugu gibi 3 farklı yöntemle yazılabilir.
//? JSX icerisinde degişkenler {} icerisinde gösterilir.

//* Footer comp.

export const Footer = () => {
	return (
		<footer>
			<p>Copyright by EYPES {new Date().getFullYear()}</p>
		</footer>
	);
};
