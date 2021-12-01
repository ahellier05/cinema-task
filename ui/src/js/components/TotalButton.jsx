import React from "react";
import { Button } from "react-bootstrap";

function TotalButton(props) {
  const standardTicketCount = props.standardTicketCount;
  const concessionTicketCount = props.concessionTicketCount;
  const standard3DCount = props.standard3DCount;
  const concession3DCount = props.concession3DCount;
  const standardIMAXCount = props.standardIMAXCount;
  const concessionIMAXCount = props.concessionIMAXCount;

  const handleCalculatePrice = () => {
    handleCalculateStandardTickets();
    handleCalculateConcessionTickets();
    handleCalculateStandard3DTickets();
    handleCalculateConcession3DTickets();
    handleCalculateStandardIMAXTickets();
    handleCalculateConcessionIMAXTickets();
    props.setTotalPrice(
      (props.standardTotalPrice + props.concessionTotalPrice).toFixed(2)
    );
  };

  const handleCalculateStandardTickets = () => {
    if (props.standardTicketCount > 0) {
      props.setStandardTotalPrice(standardTicketCount * 7.9);
    }
  };

  const handleCalculateConcessionTickets = () => {
    if (props.concessionTicketCount > 0) {
      props.setConcessionTotalPrice(concessionTicketCount * 5.4);
    }
  };

  const handleCalculateStandard3DTickets = () => {
    if (props.standard3DCount > 0) {
      props.setStandardTotalPrice(
        props.standardTotalPrice + standard3DCount * (7.9 + 0.9)
      );
    }
  };

  const handleCalculateConcession3DTickets = () => {
    if (props.concession3DCount > 0) {
      props.setConcessionTotalPrice(
        props.concessionTotalPrice + concession3DCount * (5.4 + 0.9)
      );
    }
  };

  const handleCalculateStandardIMAXTickets = () => {
    if (props.standardIMAXCount > 0) {
      props.setStandardTotalPrice(
        props.standardTotalPrice + standardIMAXCount * (7.9 + 1.5)
      );
    }
  };

  const handleCalculateConcessionIMAXTickets = () => {
    if (props.concessionIMAXCount > 0) {
      props.setConcessionTotalPrice(
        props.concessionTotalPrice + concessionIMAXCount * (5.4 + 1.5)
      );
    }
  };

  return (
    <div>
      <Button variant="primary" size="lg" onClick={handleCalculatePrice}>
        Calculate Current Total
      </Button>
    </div>
  );
}

export default TotalButton;
