import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { base_url } from "./Base_url";
import axios from "axios";
import { Col, Row, Image } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Restop from "./Restop";
import RestReview from "./RestReview";

function ViewRestaurant() {
  const [RestDetails, setrestDetails] = useState({});

  //destructuring - use id instead of pathparams
  //const pathparams = useparams()
  //console.log(pathaparams) //{id:3}

  //destructuring
  const { id } = useParams();
  console.log(id);

  //api call for fetch particular restaurant details

  const fetchData = async () => {
    const { data } = await axios.get(`${base_url}/restaurants/${id}`);
    console.log(data);
    setrestDetails(data);
  };
  console.log(RestDetails);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {RestDetails ? (
        <Row>
          <Col sm={12} md={3}>
            <Image className="m-3 border rounded" src={`${RestDetails.photograph}`} fluid />
          </Col>
          <Col className="mt-3" md={8}>
            <h2>{RestDetails.name}</h2>
            <h5>{RestDetails.neighborhood}</h5>
            <ListGroup>
              <ListGroup.Item style={{color:'black'}}>
                Cuisine:{RestDetails.cuisine_type}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <Restop op={RestDetails.operating_hours} />{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <RestReview review={RestDetails.reviews} />{" "}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      ) : (
        ""
      )}
    </div>
  );
}

export default ViewRestaurant;
