import { useState } from "react";
import "./App.css";
import { RaymarchRenderer } from "./RaymarchRenderer";

const planeSdf = `
  float GetDist(vec3 p) {
    float planeDist = p.y;
    return planeDist;
  }`;

const sphereSdf = `
  float GetDist(vec3 p) {
    vec4 s = vec4(0,1,6,1); //Sphere xyz is position w is radius
    float sphereDist = length(p-s.xyz) - s.w;
    float planeDist  = p.y;
    float d = min(sphereDist,planeDist);
    return d;
  }`;

const cubeSdf = `
  float GetDist(vec3 p) {
    vec4 s = vec4(0,1,6,1); //Sphere xyz is position w is radius
    float cubeDist = length(max(abs(p - s.xyz) - s.w, 0.0));
    float planeDist  = p.y;
    float d = min(cubeDist,planeDist);
    return d;
  }`;

function App() {
  const [sdf, setSdf] = useState(planeSdf);

  return (
    <div className="container">
      <h1>Raymarch Renderer</h1>

      <div className="row">
        <button
          onClick={() => setSdf(planeSdf)}
        >Reset</button>
        <button
          onClick={() => setSdf(cubeSdf)}
        >Cube</button>
        <button
          onClick={() => setSdf(sphereSdf)}
        >Sphere</button>
      </div>

      <div className="row">
        <RaymarchRenderer sdf={sdf} />
      </div>
    </div>
  );
}

export default App;
