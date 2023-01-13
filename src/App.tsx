import "./style.css";
import { Canvas } from "./components/Canvas";

export function App() {
  return (
    <div className="container">
      <h1>Raymarch Renderer</h1>

      <Canvas />
    </div>
  );
}
