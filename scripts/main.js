import { metalOptions } from "./MetalOptions.js";
import { sizeOptions } from "./SizeOptions.js";
import { styleOptions } from "./StyleOptions.js";

const container = document.querySelector("#container");

const render = async () => {
  const metalOptionsHTML = await metalOptions();
  const styleOptionsHTML = await styleOptions();
  const sizeOptionsHTML = await sizeOptions();

  const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                ${styleOptionsHTML}
            </section>

            <section class="choices__styles options">
                ${sizeOptionsHTML}
            </section>
        </article>

        <article class="order">

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>

        </article>
    `;

  container.innerHTML = composedHTML;
};

render();
