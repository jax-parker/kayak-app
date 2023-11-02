import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
// import Sales from "./Sales"

function SalePage() {
    const { id } = useParams();
    const [sale, setSale] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
          try {
            const [{ data: sale }] = await Promise.all([
              axiosReq.get(`/sales/${id}`),
            ]);
            setSale({ results: [sale] });
            console.log(sale);
          } catch (err) {
            console.log(err);
          }
        };
        handleMount();
    }, [id]);


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        
        <p>Sale component</p>
        
      </Col>
      
    </Row>
  );
}

export default SalePage;