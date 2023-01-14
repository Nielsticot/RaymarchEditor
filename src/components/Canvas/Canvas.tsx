import { useState } from "react";
import { RaymarchRenderer } from "../RaymarchRenderer";
import { Button, Container, Stack } from "@mantine/core";

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

  return <Stack spacing="md">
    <Container>
      <Button.Group>
        <Button variant="default" onClick={() => setSdf(planeSdf)}>Reset</Button>
        <Button variant="default" onClick={() => setSdf(sphereSdf)}>Sphere</Button>
        <Button variant="default" onClick={() => setSdf(cubeSdf)}>Cube</Button>
      </Button.Group>
    </Container>

    <Container>
      <RaymarchRenderer sdf={sdf} />
    </Container>
  </Stack>;
}
