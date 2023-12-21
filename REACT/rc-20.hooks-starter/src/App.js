import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";
import TaxComp from "./components/TaxComp";
import UseRefComp from "./components/UseRefComp";
import axios from "axios";
import Card from "./components/Card";
import ClearButton from "./components/ClearButton";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("nicolas");
  const [taxDataState, setTaxDataState] = useState({ taxRate: 0.18, ship: 25 });
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const taxData = { taxRate: 0.18, ship: 25 };
  const taxData1 = useRef({ taxRate: 0.18, ship: 25 });
  console.log(taxData1.current.ship);

  const getData = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    // console.log(data.products);
    setData(data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  // console.log(filteredData);

  const filteredMemoData = useMemo(() => {
    console.log("useMemo Çalıştı");
    return data.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  // const calculation = expensiveCalculation(count);

  // const calculationMemo = useMemo(
  //   () => expensiveCalculationMemo(count),
  //   [count]
  // ); 

  const handleClear = () => {
    setSearch("");
    setUser("nicolas");
  };

  const handleClearCallBack = useCallback(() => {
    setSearch("");
    setUser("nicolas");
  }, []);

  return (
    <div className="container mt-2">
      <div>
        <Header />
      </div>
      <hr />
      <div className="">
        <p className="text-center">Count : {count}</p>
        <button
          className="btn btn-danger d-flex mx-auto"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger mt-2 d-flex mx-auto"
          onClick={() => setUser("Faruk")}
        >
          Change User
        </button>
      </div>
      <hr />
      {/* <HeaderMemo user={user} /> */}
      <HeaderMemo />
      <hr />
      {/* <TaxComp taxData={taxData} /> */}
      {/* <TaxComp taxData={taxDataState} /> */}
      {/* <TaxComp taxData={taxData1} /> */}
      <hr />
      {/* <UseRefComp /> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input type="text" value={search} onChange={handleSearch} />
      </div>

      {/* <Card data={filteredData} /> */}
      {/* <Card data={filteredMemoData} /> */}
      <hr />
      {/* <p>Expensive Calculation : {calculation} </p> */}
      {/* <p>Expensive Calculation : {calculationMemo} </p> */}
      <hr />
      {/* <ClearButton handleClear={handleClear} /> */}
      <ClearButton handleClear={handleClearCallBack} />
    </div>
  );
}

export default App;

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 10000000000; i++) {
//     num += 1;
//   }
//   console.log("Calculating completed...");
//   return num;
// };

// const expensiveCalculationMemo = (num) => {
//   console.log("Calculating Memo...");
//   for (let i = 0; i < 10000000000; i++) {
//     num += 1;
//   }
//   console.log("Calculating memo completed...");
//   return num;
// };

//? Sonuç olarak memo componentin kendisini belleğe alır
//? Sonuç olarak useMemo fonksiyon ya da değer bazında yapılan işlemin sonucunu belleğe alır
//? Sonuç olarak useCallback işlerin kendisini fonksiyon gibi belleğe alır
//? useRef hafızada değişmeyen bir referans oluşturur ama değişkenin kendisi değişebilir değişse bile komponenti render etmiyor
