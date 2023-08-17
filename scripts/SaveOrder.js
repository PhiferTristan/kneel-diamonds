import { savePlacedOrder } from "./TransientState.js";

const handlePlaceOrderClick = (clickEvent) => {
  if (clickEvent.target.id === "placeOrder") {
    savePlacedOrder();
  }
};

export const placeOrder = () => {
  document.addEventListener("click", handlePlaceOrderClick);

  return "<div><button id='placeOrder'>Place Order</button></div>";
};
