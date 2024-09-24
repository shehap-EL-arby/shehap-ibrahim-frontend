
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import '../style/books.css';

// example image
import img1 from '../image-books/Bootstrap4.jpg';

export default function BooksPage(){
        const [data, setData] = useState([]);
        useEffect(() => {
          fetchCourses();
        }, []);
        const fetchCourses = () => {
          axios
            .get("http://127.0.0.1:8000/api/booksnews")
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
        <div className='total'>    
            <h2>BOOKS</h2>
            <Row xs={1} md={2} lg={3} xl={3} className="total-card">
                    {data.map((item, index) => (
                    <Col key={index}>
                        <Card style={{ width: '95%' }}>
                            <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Card.Text>
                                    <strong>{item.price}<span> $</span></strong>
                                </Card.Text>
                                <Button variant="secondary"><Link to='/login' className='nav-link items'>Buy now</Link></Button>
                                </Card.Body>
                        </Card>
                    </Col>
                    ))};
            </Row>
        </div>
        </>
    );
}