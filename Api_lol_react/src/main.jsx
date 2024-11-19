import ReactDOM from "react-dom/client";
import { App } from './App.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza solo `App`, que ya maneja las tarjetas
root.render(
  <App />
);
