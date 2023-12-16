import React from "react";
import { HomeContainer, HomeImg, MainContainer } from "./Home.style";
import Header from "../../components/header/Header";
import homeImg from "../../assets/books.jpg";
import { useState } from "react";
import axios from "axios";
import Card from "../../components/card/Card";

const Home = () => {
  const [query, setQuery] = useState("");
  // console.log(query)
  const [selectType, setSelectType] = useState("all");
  // console.log(selectType)
  const [myData, setMyData] = useState([]);
  // console.log(myData)
  const APP_KEY = process.env.REACT_APP_apiKey;

  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${selectType}&key=${APP_KEY}`;

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      // console.log(data.items);
      setMyData(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeContainer>
      <Header
        setQuery={setQuery}
        setSelectType={setSelectType}
        getData={getData}
      />

      {myData.length ? (
        <MainContainer wrap="wrap">
          {myData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </MainContainer>
      ) : (
        <HomeImg>
          <img src={homeImg} alt="home" />
        </HomeImg>
      )}
    </HomeContainer>
  );
};

export default Home;
