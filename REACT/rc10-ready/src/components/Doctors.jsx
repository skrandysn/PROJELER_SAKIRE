import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";


const Doctors = ({doctors}) => {

  
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{color:"purple"}}>Our Doctors</h3>
      <Row className="justify-content-center ">
      {doctors.map((dr)=>(
        <Col key={dr.id} md={}>
        <img src={dr.img} alt="{dr.name}" />
        <h5>{dr.name}</h5>
        <h6>{dr.dep}</h6>


        </Col>
      ))}
      </Row>

    </Conta