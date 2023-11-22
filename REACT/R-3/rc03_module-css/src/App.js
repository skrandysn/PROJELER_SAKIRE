import card from "./componenet/card/Card";
import data from "./utils/data";
function App() {
	console.log(data);
	return (
		<>
			{data.map((item) => (
				<card item={item} />
			))}
		</>
	);
}

export default App;
