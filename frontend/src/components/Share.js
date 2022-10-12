import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Share({ share }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Body>
        <Link to={`/share/${share.SYMBOL}`}>
          <Card.Title as="div">
            <strong>{share.SYMBOL}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="h3">₹{share.OPEN}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default Share;
