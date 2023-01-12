import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { RaymarchRenderer } from "./RaymarchRenderer";
import { Surface } from "gl-react-dom";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <h1>Raymarch Renderer</h1>

      <div className="row">
        <Surface width={300} height={300}>
          <RaymarchRenderer blue={0.5}/>
        </Surface>
      </div>
    </div>
  );
}

export default App;
