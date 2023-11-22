//* Harici bir dosya icerisinde olusturulan bir componenet
//* export default ile proje icerisinde herhangi bir yerde
//* kullanıma acilmis olur. Kullanmak icin hedef dosya
//* import .... from "./..." ile import yapmak yeterlidir.

function Header() {
	return (
		<header>
			<h1>Header 12</h1>
		</header>
	);
}

export default Header;
