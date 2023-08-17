// Setup of the transient state for our orders
const transientState = {
  metalId: 0,
  styleId: 0,
  sizeId: 0,
};

// Functions to modify the properties of our transient state
export const setStyleChoice = (chosenStyle) => {
  transientState.styleId = chosenStyle;
  console.log(transientState);
};

export const setSizeChoice = (chosenSize) => {
  transientState.sizeId = chosenSize;
  console.log(transientState);
};

export const setMetalChoice = (chosenMetal) => {
  transientState.metalId = chosenMetal;
  console.log(transientState);
};

// Function to convert transient state to perm state
export const savePlacedOrder = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };

  const response = await fetch("http://localhost:8088/orders", postOptions);

  const customEvent = new CustomEvent("newOrderPlaced");
  document.dispatchEvent(customEvent);
};
