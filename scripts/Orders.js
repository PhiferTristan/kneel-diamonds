export const Orders = async () => {
  const fetchResponse = await fetch("http://localhost:8088/orders");
  const orders = await fetchResponse.json();

  let ordersHTML = "";

  let ordersStringArray = orders.map((order) => {
    return `<section class="order">
            <div>Order #${order.id}</div></section>`;
  });
  ordersHTML += ordersStringArray.join("");

  return ordersHTML;
};
