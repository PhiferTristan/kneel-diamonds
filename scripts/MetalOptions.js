export const metalOptions = async () => {
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  let metalsOptionsHTML = "";
  for (const metal of metals) {
    metalsOptionsHTML += `<input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}`;
  }
  return metalsOptionsHTML;
};
