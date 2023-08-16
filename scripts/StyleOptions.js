export const styleOptions = async () => {
  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();

  // Fill in the rest
  let stylesOptionsHTML = "";
  for (const style of styles) {
    stylesOptionsHTML += `<input type="radio" name="style" value="${style.id}" /> ${style.style}`;
  }

  return stylesOptionsHTML;
};
