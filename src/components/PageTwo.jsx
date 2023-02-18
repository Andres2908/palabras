import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import KeyBoard from "./KeyBoard";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

export default function PageTwo({ handleContinue }) {
  const [row, setRow] = useState(0);
  const [letter, setLetter] = useState("");
  const [array, setArray] = useState([]);
  const [array2, setArray2] = useState([]);
  const [array3, setArray3] = useState([]);
  const [array4, setArray4] = useState([]);
   const [array5, setArray5] = useState([]);

  const arrayAux = ["", "", "", "", ""];

  // const array1 = []
  // const array2 = []
  // const array3 = []
  // const array4 = []
  // const array5 = []
  // const array = [[], ["","","","",""], ["","","","",""], ["","","","",""], ["","","","",""]]

  // let copyArrayAux
  const handleClick = (value) => {
    setLetter(value);
    console.log(value);
    
    if (array.length < 5) setArray((prevArray) => [...prevArray, ...value]);
    if (array2.length < 5) setArray2((prevArray) => [...prevArray, ...value]);
    if (array3.length < 5) setArray3((prevArray) => [...prevArray, ...value]);
    if (array4.length < 5) setArray4((prevArray) => [...prevArray, ...value]);
    if(array5.length < 5) setArray5((prevArray) => [...prevArray, ...value]);

    console.log(array);
  };

  return (
    <div>
      <Container>
        {
          <>
            <Row>
              {arrayAux.map((item, index) => (
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Text>{array[index]}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        }
      </Container>

      <KeyBoard handleClick={handleClick} />
    </div>
  );
}
