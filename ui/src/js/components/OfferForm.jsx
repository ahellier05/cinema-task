import React from "react";
import { Button } from "react-bootstrap";

function OfferForm(props) {
  const totalPrice = props.totalPrice;

  const handleUpdateOfferPrice = () => {
    props.setUpdatedTotalPrice(getUpdatedPrice().toFixed(2));
    props.setSavingAmount(getSaving().toFixed(2));
  };

  const getUpdatedPrice = () => {
    const p = (totalPrice / 100) * 66;
    const result = totalPrice - p;
    return result;
  };

  const getSaving = () => {
    const saving = props.totalPrice - props.updatedTotalPrice;
    return saving;
  };

  return (
    <div>
      <h3>!!!EXCLUSIVE THURSDAY OFFER!!!</h3>
      <br />
      <Button onClick={handleUpdateOfferPrice}>
        Click to see your updated pricing and saving for today!
      </Button>
      <br />
      <br />
      <div>
        Today you pay: £{props.updatedTotalPrice}, which is a saving of £
        {props.savingAmount}!!
      </div>
    </div>
  );
}

export default OfferForm;
