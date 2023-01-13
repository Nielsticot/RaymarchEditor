import { useState } from "react";
import { RaymarchRenderer } from "../RaymarchRenderer";
import { ButtonGroup } from "@blueprintjs/core";
import { Button } from "@blueprintjs/core/lib/esm/components";

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

export function Canvas() {
    const [sdf, setSdf] = useState(planeSdf);

    return <>
        <div>
            <ButtonGroup minimal={true}>
                <Button
                    icon="database"
                    onClick={() => setSdf(planeSdf)}
                >Reset</Button>
                <Button
                    icon="function"
                    onClick={() => setSdf(cubeSdf)}
                >Cube</Button>
                <Button
                    icon="function"
                    onClick={() => setSdf(sphereSdf)}
                >Sphere</Button>
            </ButtonGroup>
        </div>

        <div>
            <RaymarchRenderer sdf={sdf} />
        </div>
    </>;
}
