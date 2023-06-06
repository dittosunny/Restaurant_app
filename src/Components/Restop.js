import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";

function Restop({ op }) {
  console.log(op);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item style={{color:'black'}}>Monday:{op?.Monday}</ListGroup.Item>
            <ListGroup.Item style={{color:'black'}}>Tuesday:{op?.Tuesday}</ListGroup.Item>
            <ListGroup.Item style={{color:'black'}}>Wednesday:{op?.Wednesday}</ListGroup.Item>
            <ListGroup.Item style={{color:'black'}}>Thursday:{op?.Thursday}</ListGroup.Item>
            <ListGroup.Item style={{color:'black'}}>Friday:{op?.Friday}</ListGroup.Item>
            <ListGroup.Item style={{color:'black'}}>Saturday:{op?.Saturday}</ListGroup.Item>
            <ListGroup.Item style={{color:'black'}}>Sunday:{op?.Sunday}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Restop;
