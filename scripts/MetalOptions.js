// The setMetalChoice() function used below is just an example.
// Change it to the name of the setter function you created.
import { setMetalChoice } from "./TransientState.js";

const handleMetalChoice = (changeEvent) => {
  // Make sure you change this condition if you named your inputs differently
  if (changeEvent.target.name === "metal") {
    setMetalChoice(parseInt(changeEvent.target.value));
  }
};

export const metalOptions = async () => {
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  document.addEventListener("change", handleMetalChoice);

  let metalOptionsHTML = "<h2>Metals</h2>";

  const metalStringArray = metals.map((metal) => {
    return `<div>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </div>`;
  });

  metalOptionsHTML += metalStringArray.join("");

  return metalOptionsHTML;
};
