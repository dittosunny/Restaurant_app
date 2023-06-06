import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


function RestaurantCard({ restaurants }) {
  console.log(restaurants);
  return (
    <div>
      <Link to={`/view/${restaurants.id}`} style={{textDecoration:'none'}}>
        <Card className="m-4">
          <Card.Img variant="top" src={restaurants.photograph} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {restaurants.name}
            </Card.Title>
            <Card.Text>
              <p>{restaurants.neighborhood}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default RestaurantCard;
