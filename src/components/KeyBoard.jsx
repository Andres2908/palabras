import CardCustom from "./CardCustom"
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css"


export default function KeyBoard({ handleClick }) {
    const [lastKeyClicked, setLastKeyClicked] = useState(null);

    const arrayAux2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const keyBoard = "qwertyuiop"
    const keyBoard2 = "asdfghjklñ"
    const keyBoard3 = "zxcvbnm"

    let paddingLeft0 = { paddingLeft: 10 } 
    let paddingLeft1 = { paddingLeft: 60 } 
    let paddingLeft2 = {paddingLeft: 25} 

    return (    
        <Container className="paddingContainer">
            <Row style={paddingLeft0}>
                {
                    arrayAux2.map((item, index) => (
                        <Col key={index}>
                            <Card>
                                <Button onClick={() => handleClick(keyBoard[index])} variant="secondary">{keyBoard[index]}</Button>
                            </Card>
                        </Col> 
                    ))
                }
            </Row>
            <Row style={paddingLeft1}>
                {
                    arrayAux2.map((item, index) => (
                        <Col key={index}>
                            <Card>
                                <Button onClick={() => handleClick(keyBoard2[index])} variant="secondary">{keyBoard2[index]}</Button>
                            </Card>
                        </Col> 
                    ))
                }
            </Row>
            <Row style={paddingLeft2}>
                {
                    arrayAux2.map((item, index) => (
                        <Col key={index}>
                            <Card>
                                <Button onClick={() => handleClick(keyBoard3[index])} variant="secondary">{keyBoard3[index]}</Button>
                            </Card>
                        </Col> 
                    ))
                }
            </Row>
        </Container>
)
}