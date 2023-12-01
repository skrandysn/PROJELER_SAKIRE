import axios from "axios";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([])
  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const getTutorials = async () => {
  
    try {
      const { data } = await axios(BASE_URL); //*data dan veri çektik
      setTutorials(data)
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
console.log(tutorials)
  //? componentDidMount // axios la çekilen varileri  çekmek için kullandık
  useEffect(() => {
  getTutorials();
  }, []);



  return (
    <>
      <AddTutorial  getTutorials={ getTutorials}/>
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;