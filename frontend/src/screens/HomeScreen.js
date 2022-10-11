import React from "react";
import { Row, Col } from "react-bootstrap";
import Share from "../components/Share";
import data from "../sharesData";

function HomeScreen() {
  return (
    <div>
      <Row>
        {data.map((d) => (
          <Col key={d.ID} sm={12} md={6} lg={4} xl={3}>
            {d.SYMBOL}
            <Share share={d} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
