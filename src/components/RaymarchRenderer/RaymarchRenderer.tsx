import { Node } from "gl-react";
import { useRayMarchShader } from "./shader";
import { Surface } from "gl-react-dom";

interface Props {
  sdf: string,
}

export function RaymarchRenderer({ sdf }: Props) {
  const shaders = useRayMarchShader(sdf);

  return <Surface width={600} height={400}>
    <Node shader={shaders.raymarch} uniforms={{
      time: 1,
      resolution: [600, 400],
    }} />
  </Surface>;
}