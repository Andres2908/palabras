import CardCustom from "./CardCustom"
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css"


export default function PageOne({handleContinue}) {
  const arrayExamples = ["GATOS", "VOCAL", "CANTO"];
  const arrayText = [
    "La letra G está en la palabra y en la posición correcta.",
    "La letra C está en la palabra pero en la posición incorrecta.",
    "La letra O no está en la palabra.",
  ];

  return (
    <Container fluid="sm" className="containerCustom">
      <h1>
        <b>Cómo jugar</b>
      </h1>

      <p>
        Adivina la palabra oculta en cinco intentos. Cada intento debe ser una
        palabra válida de 5 letras. Después de cada intento el color de las
        letras cambia para mostrar qué tan cerca estás de acertar la palabra.
      </p>

      <h4>
        <b>Ejmeplos:</b>
      </h4>

      {arrayExamples.map((word, index) => {
        return (
          <div>
            <CardCustom word={word} key={index} />
            <p>{arrayText[index]}</p>
          </div>
        );
      })}

      <p>
        Puede haber letras repetidas. Las pistas son independientes para cada
        letra.
      </p>

      <p>¡Una palabra nueva cada 5 minutos!</p>

      <Button variant="success" onClick={handleContinue}>
        Success
      </Button>
    </Container>
  );
}