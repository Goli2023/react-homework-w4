import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Weather App</h1>
    <Weather />
    <div>
      <a
        href="https://github.com/Goli2023/react-homework-w4"
        target="-blank"
        alt=""
      >
        Open source{" "}
      </a>{" "}
      by Goli
    </div>
  </StrictMode>
);
