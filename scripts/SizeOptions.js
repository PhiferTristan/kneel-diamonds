import { setSizeChoice } from "./TransientState.js";

const handleSizeChoice = (changeEvent) => {
  if (changeEvent.target.name === "size") {
    setSizeChoice(parseInt(changeEvent.target.value));
  }
};

export const sizeOptions = async () => {
  const response = await fetch("http://localhost:8088/sizes");
  const sizes = await response.json();

  document.addEventListener("change", handleSizeChoice);

  // Fill in the rest
  let sizesOptionsHTML = "<h2>Sizes</h2>";

  const sizesStringArray = sizes.map((size) => {
    return `<div>
        <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </div>`;
  });
  sizesOptionsHTML += sizesStringArray.join("");

  return sizesOptionsHTML;
};
