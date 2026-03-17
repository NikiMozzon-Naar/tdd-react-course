import ReactDOM from "react-dom/client";

import { App } from "@/app";
import "@/index.css";

const entryPoint = document.getElementById("root");
if (entryPoint) {
  ReactDOM.createRoot(entryPoint).render(<App />);
}
