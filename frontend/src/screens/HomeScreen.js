import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Share from "../components/Share";

import axios from "axios";

//import data from "../sharesData";

function HomeScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(){
        const { tempData } = await axios.get('/api/data/')
        console.log(tempData)
        setData(tempData)
    }
    
    fetchData()
    
  }, []);

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
