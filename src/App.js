// import logo from './logo.svg';
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import Container from "react-bootstrap/Container";
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./components/css/styles.css";

export function App() {
  const [pageActive, setPageActive] = useState(0);

  const handleContinue = () => {
    setPageActive(1);
  };

  return (
    <>
      {pageActive === 0 && <PageOne handleContinue={handleContinue} />}
      {pageActive === 1 && <PageTwo />}
    </>
  );
}
