export const sizeOptions = async () => {
  const response = await fetch("http://localhost:8088/sizes");
  const sizes = await response.json();

  // Fill in the rest
  let sizesOptionsHTML = "";
  for (const size of sizes) {
    sizesOptionsHTML += `<input type="radio" name="size" value="${size.id}" /> ${size.carets}`;
  }

  return sizesOptionsHTML;
};
