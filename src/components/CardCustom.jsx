import React from "react";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";

export default function CardCustom({ word }) {
  return (
    <Container>
      <Row xs="auto" className="d-flex align-items-center justify-content-center">
        {word.split('').map((letter, index) => {
          return (
            <Col key={index}>
              <Card className={index === 0 && letter === "G" ? "colorCardSuccess" : index === 2 && letter === "C" ? "colorCardWarning" : index === 4 && letter === "O" ? "colorCardUndefined" : "colorNull"}>
                <Card.Body>
                  <Card.Text>{letter}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  );
}