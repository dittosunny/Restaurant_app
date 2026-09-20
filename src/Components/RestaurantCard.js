import React, { memo } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


function RestaurantCard({ restaurants }) {
  return (
    <div>
      <Link
        to={`/view/${restaurants.id}`}
        style={{textDecoration:'none'}}
        onMouseEnter={() => {
          // prefetch the detail route chunk
          import('./ViewRestaurant')
        }}
      >
        <Card className="m-4">
          <Card.Img variant="top" src={restaurants.photograph} loading="lazy" />
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

export default memo(RestaurantCard);
