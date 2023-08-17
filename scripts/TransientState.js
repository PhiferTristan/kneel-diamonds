// Setup of the transient state for our orders
const transientState = {
    styleId: 0,
    sizeId: 0,
    metalId: 0,
};

// Functions to modify the properties of our transient state
export const setStyleChoice = (chosenStyle) => {
    transientState.styleId = chosenStyle;
    console.log(transientState)
}

export const setSizeChoice = (chosenSize) => {
    transientState.sizeId = chosenSize;
    console.log(transientState)
}

export const setMetalChoice = (chosenMetal) => {
    transientState.metalId = chosenMetal;
    console.log(transientState)
}