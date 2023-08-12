import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';
import {Row,Col,Image,ListGroup,Button, Card} from 'react-bootstrap'
import axios from "axios";

function ShareScreen({match}) {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      
      const tempData = await axios.get(`/api/data/${match.prams.SYMBOL}`);
      console.log(tempData.data)
      setData(tempData.data);
    }

    fetchData();
  }, []);
  return <div>Share Screen</div>;
}

export default ShareScreen;
