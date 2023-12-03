
import { useState } from "react";
import Doctors from "../components/Doctors";
import { doctorData} from "../helper/data"

const Home = () => {
 const [doctors, setDoctors] = useState(doctorData);

  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">EYPES HOSPITAL</h1>

      <Doctors doctors={doctors}/>
      
    </main>
  );
};

export default Home;
