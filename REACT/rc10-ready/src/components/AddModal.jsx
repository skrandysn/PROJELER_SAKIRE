import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddModal({show, handleClose, drName}) {
  const handleSubmit =()=>{
 e.preventDefault()

    handleClose()
  }
return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Patient Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name " />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Day&Time</Form.Label>
        <Form.Control type="datetime-local"  />
      </Form.Group>
      <div className='text-center '>
        <Button className='me-2' variant="success" type="submit">
        Save
      </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
         </div>
      
    </Form>
      
      </Modal>
    </>
  );
}

export default  AddModal;