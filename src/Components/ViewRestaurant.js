import React, { useEffect, useState, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { base_url } from "./Base_url";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
const Restop = lazy(() => import("./Restop"));
const RestReview = lazy(() => import("./RestReview"));

function ViewRestaurant() {
  const [RestDetails, setrestDetails] = useState({});

  //destructuring - use id instead of pathparams
  //const pathparams = useparams()
  //console.log(pathaparams) //{id:3}

  //destructuring
  const { id } = useParams();

  //api call for fetch particular restaurant details

  useEffect(() => {
    let isMounted = true
    const cacheKey = `restaurants:detail:${id}`
    const cached = localStorage.getItem(cacheKey)
    if (cached) {
      try {
        const parsed = JSON.parse(cached)
        if (isMounted) setrestDetails(parsed)
      } catch {}
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`${base_url}/restaurants/${id}`)
        if (!response.ok) {
          throw new Error(`Failed to fetch restaurant: ${response.status}`)
        }
        const data = await response.json()
        if (isMounted) setrestDetails(data)
        localStorage.setItem(cacheKey, JSON.stringify(data))
      } catch (err) {
        // ignore, keep cached
      }
    }
    fetchData()
    return () => { isMounted = false }
  }, [id])

  

  return (
    <div>
      {RestDetails ? (
        <Row>
          <Col sm={12} md={3}>
            <Image className="m-3 border rounded" src={`${RestDetails.photograph}`} loading="lazy" fluid />
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
                <Suspense fallback={null}>
                  <Restop op={RestDetails.operating_hours} />
                </Suspense>{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <Suspense fallback={null}>
                  <RestReview review={RestDetails.reviews} />
                </Suspense>{" "}
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
