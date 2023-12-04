import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import AddModal from "./AddModal";
import  {useState} from "react";



const Doctors = ({doctors, appointments, setAppointments }) => {
  const [show, setShow] = useState(false);
  const [selectedDrName, setselectedDrName] = useState()

  const handleClick =(drName) => {
    setShow(true);
    setselectedDrName(drName)
  }
  
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{color:"purple"}}>Our Doctors</h3>
      <Row className="justify-content-center ">
      {doctors.map((dr)=>(
        <Col key={dr.id} xs={6} sm={4} md={3}>
        <img className="img-thumbnail doctor-img" src={dr.img} alt="{dr.name}" 
        onClick={()=>handleClick(dr.name)}/>
        <h5>{dr.name}</h5>
        <h6>{dr.dep}</h6>
        </Col>
      ))}
      </Row>
      <AddModal 
      appointments={appointments} 
      setAppointments={ setAppointments}
      drName={selectedDrName} 
      show={show} 
      handleClose={() => setShow(false)}/>
    </Container>
  );
};

export default Doctors;