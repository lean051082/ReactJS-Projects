import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TituloDinamico from "./TituloDinamico.jsx";
import Acceso from "./Acceso.jsx";
import Alternador from "./Alternador.jsx";
import ListaCompra from "./ListaCompra.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListaCompra />
  </StrictMode>
);
