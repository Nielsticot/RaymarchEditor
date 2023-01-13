import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { RaymarchRenderer } from "./RaymarchRenderer";
import { Surface } from "gl-react-dom";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [sdf, setSdf] = useState(
    `float GetDist(vec3 p) {
      vec4 s = vec4(0,1,6,1); //Sphere xyz is position w is radius
      float sphereDist = length(p-s.xyz) - s.w;
      float planeDist  = p.y;
      float d = min(sphereDist,planeDist);
      return d;
    }`
  );

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <h1>Raymarch Renderer</h1>

      <button
        onClick={() => setSdf(
          `float GetDist(vec3 p) {
            vec4 s = vec4(0,1,6,1); //Sphere xyz is position w is radius
            float cubeDist = length(max(abs(p - s.xyz) - s.w, 0.0));
            float planeDist  = p.y;
            float d = min(cubeDist,planeDist);
            return d;
          }`
        )}
      >
        test
      </button>

      <div className="row">
        <Surface width={600} height={400}>
          <RaymarchRenderer sdf={sdf} />
        </Surface>
      </div>
    </div>
  );
}

export default App;
