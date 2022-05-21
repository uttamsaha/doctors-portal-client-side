import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async(event) => {
    event.preventDefault();
    if(!stripe || !elements) {
        return; // data na pele kar jonno payemnt krsi na pele return kore dibo
    }

    const card = elements.getElement(CardElement); //card er j data dicchi ekhane card setake extract kore niye astache

    if(card === null) {
        return;
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
