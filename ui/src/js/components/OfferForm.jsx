import { React, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function OfferForm(props) {

  const [ result, setResult ] = useState(0);

  const handleUpdateOfferPrice = () => {
    props.setSavingAmount(getSaving().toFixed(2));
  };

  useEffect(() => {
    props.setUpdatedTotalPrice(result);

  }, [result]);

  useEffect(() => {
    setResult((props.totalPrice - (props.totalPrice / 100) * 66).toFixed(2));

  }, [props.totalPrice]);


  const getSaving = () => {
    const saving = props.totalPrice - props.updatedTotalPrice;
    return saving;
  };

  return (
    <div>
      <h3>!!!EXCLUSIVE THURSDAY OFFER!!!</h3>
      <br/>
      <div>
        Your exclusive Thursday offer price: £{props.updatedTotalPrice}
      </div>
      <br />
      <Button onClick={handleUpdateOfferPrice}>
        Click to see your savings for today!
      </Button>
      <br />
      <br />
      <div>
        Today you have saved  £{props.savingAmount}!!
      </div>
    </div>
  );
}

export default OfferForm;
