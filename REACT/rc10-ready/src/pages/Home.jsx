import { useState } from "react";
import Doctors from "../components/Doctors";
import { doctorData, appointmentData } from "../helper/data";
import AppointmentList from "../components/AppointmentList";

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [appointments, setAppointments] = useState(appointmentData);

  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">EYPES HOSPITAL</h1>
      <Doctors
        appointments={appointments}
        setAppointments={setAppointments}
        doctors={doctors}
      />
      <AppointmentList
        setAppointments={setAppointments}
        appointments={appointments}
      />
    </main>
  );
};

export default Home;
