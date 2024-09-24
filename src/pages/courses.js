// example image
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "../style/courses.css";
import { Container } from "react-bootstrap";

export default function Courses() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchCourses();
  }, []);
  const fetchCourses = () => {
    axios
      .get("http://127.0.0.1:8000/api/coursesnew")
      .then((response) => {
        console.log(response);
        setData(response.data.data || []);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };
  return (
    <>
      <div className="total">
        <div  className="total-card">
          <h2>COURSES</h2>
          <Row xs={1} md={2} lg={3} xl={3} className="g-4">
            {data.map((item, index) => (
              <Col key={index} sm={12} md={6} lg={3} className="mb-4">
                <Card>
                  
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>{item.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}
