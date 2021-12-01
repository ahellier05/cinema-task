import { React, useState } from "react";
import { Button } from "react-bootstrap";
import ExtraForm from "./ExtraForm";
import TotalButton from "./TotalButton";
import OfferForm from "./OfferForm";

function TicketForm() {
  const [standardTicketCount, setStandardTicketCount] = useState(0);
  const [concessionTicketCount, setConcessionTicketCount] = useState(0);
  const [standardTotalPrice, setStandardTotalPrice] = useState(0);
  const [concessionTotalPrice, setConcessionTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [standard3DCount, setStandard3DCount] = useState(0);
  const [concession3DCount, setConcession3DCount] = useState(0);
  const [standardIMAXCount, setStandardIMAXCount] = useState(0);
  const [concessionIMAXCount, setConcessionIMAXCount] = useState(0);
  const [updatedTotalPrice, setUpdatedTotalPrice] = useState(0);
  const [savingAmount, setSavingAmount] = useState(0);

  const increaseStandardTicketCount = () => {
    setStandardTicketCount(
      (prevstandardTicketCount) => prevstandardTicketCount + 1
    );
  };

  const decreaseStandardTicketCount = () => {
    setStandardTicketCount(
      (prevstandardTicketCount) => prevstandardTicketCount - 1
    );
  };

  const increaseConcessionTicketCount = () => {
    setConcessionTicketCount(
      (prevconcessionTicketCount) => prevconcessionTicketCount + 1
    );
  };

  const decreaseConcessionTicketCount = () => {
    setConcessionTicketCount(
      (prevconcessionTicketCount) => prevconcessionTicketCount - 1
    );
  };

  const increaseStandard3DTicketCount = () => {
    setStandard3DCount((prevstandard3DCount) => prevstandard3DCount + 1);
  };

  const decreaseStandard3DTicketCount = () => {
    setStandard3DCount((prevstandard3DCount) => prevstandard3DCount - 1);
  };

  const increaseConcession3DTicketCount = () => {
    setConcession3DCount((prevconcession3DCount) => prevconcession3DCount + 1);
  };

  const decreaseConcession3DTicketCount = () => {
    setConcession3DCount((prevconcession3DCount) => prevconcession3DCount - 1);
  };

  const increaseStandardIMAXTicketCount = () => {
    setStandardIMAXCount((prevstandardIMAXCount) => prevstandardIMAXCount + 1);
  };

  const decreaseStandardIMAXTicketCount = () => {
    setStandardIMAXCount((prevstandardIMAXCount) => prevstandardIMAXCount - 1);
  };

  const increaseConcessionIMAXTicketCount = () => {
    setConcessionIMAXCount(
      (prevconcessionIMAXCount) => prevconcessionIMAXCount + 1
    );
  };

  const decreaseConcessionIMAXTicketCount = () => {
    setConcessionIMAXCount(
      (prevconcessionIMAXCount) => prevconcessionIMAXCount - 1
    );
  };

  return (
    <div>
      <div>
        <div>
          <p>Standard Ticket:</p>{" "}
          <Button onClick={increaseStandardTicketCount} variant="primary">
            +
          </Button>{" "}
          <Button onClick={decreaseStandardTicketCount} variant="primary">
            -
          </Button>{" "}
        </div>
        <div>Standard Ticket Total: {standardTicketCount}</div>
        <br />
        <div>
          <p>Concession Ticket:</p>{" "}
          <Button onClick={increaseConcessionTicketCount} variant="primary">
            +
          </Button>{" "}
          <Button onClick={decreaseConcessionTicketCount} variant="primary">
            -
          </Button>{" "}
        </div>
        <div>Concession Ticket Total: {concessionTicketCount}</div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <ExtraForm
          standard3DCount={standard3DCount}
          concession3DCount={concession3DCount}
          standardIMAXCount={standardIMAXCount}
          concessionIMAXCount={concessionIMAXCount}
          increaseStandard3DTicketCount={increaseStandard3DTicketCount}
          decreaseStandard3DTicketCount={decreaseStandard3DTicketCount}
          increaseConcession3DTicketCount={increaseConcession3DTicketCount}
          decreaseConcession3DTicketCount={decreaseConcession3DTicketCount}
          increaseStandardIMAXTicketCount={increaseStandardIMAXTicketCount}
          decreaseStandardIMAXTicketCount={decreaseStandardIMAXTicketCount}
          increaseConcessionIMAXTicketCount={increaseConcessionIMAXTicketCount}
          decreaseConcessionIMAXTicketCount={decreaseConcessionIMAXTicketCount}
          standardTotalPrice={standardTotalPrice}
          concessionTotalPrice={concessionTotalPrice}
          setStandardTotalPrice={setStandardTotalPrice}
          setConcessionTotalPrice={setConcessionTotalPrice}
          setTotalPrice={setTotalPrice}
        ></ExtraForm>
        <br />
        <div>
          <TotalButton
            standardTicketCount={standardTicketCount}
            concessionTicketCount={concessionTicketCount}
            standard3DCount={standard3DCount}
            concession3DCount={concession3DCount}
            standardIMAXCount={standardIMAXCount}
            concessionIMAXCount={standardIMAXCount}
            standardTotalPrice={standardTotalPrice}
            concessionTotalPrice={concessionTotalPrice}
            setStandardTotalPrice={setStandardTotalPrice}
            setConcessionTotalPrice={setConcessionTotalPrice}
            setTotalPrice={setTotalPrice}
          >
            Calculate Current Total
          </TotalButton>
          <br />
          <div>
            This is the current total for your visit today: {totalPrice}
          </div>
        </div>
        <br />
        <div>
          <OfferForm
            updatedTotalPrice={updatedTotalPrice}
            savingAmount={savingAmount}
            totalPrice={totalPrice}
            setUpdatedTotalPrice={setUpdatedTotalPrice}
            setSavingAmount={setSavingAmount}
          />
        </div>
      </div>
    </div>
  );
}

export default TicketForm;
