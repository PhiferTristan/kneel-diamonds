import { setStyleChoice } from "./TransientState.js";

const handleStyleChoice = (changeEvent) => {
  if (changeEvent.target.name === "style") {
    setStyleChoice(parseInt(changeEvent.target.value));
  }
};

export const styleOptions = async () => {
  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();

  document.addEventListener("change", handleStyleChoice);

  // Fill in the rest
  let stylesOptionsHTML = "<h2>Styles</h2>";

  const stylesStringArray = styles.map((style) => {
    return `<div>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
            </div>`;
  });

  stylesOptionsHTML += stylesStringArray.join("");

  return stylesOptionsHTML;
};
