import { Node, ShaderDefinition, ShaderIdentifier } from "gl-react";
import { Surface } from "gl-react-dom";
import { Vector3 } from "../../bindings/Vector3";
import { CameraProps } from "../../types";

interface RayMarchRendererProps {
  shader: ShaderIdentifier | ShaderDefinition,
  camera: CameraProps,
}

function vector3toArray(vec: Vector3): number[] {
  return [vec.x, vec.y, vec.z];
}

export function RaymarchRenderer({ shader, camera }: RayMarchRendererProps) {
  return <Surface width={600} height={400}>
    <Node shader={shader} uniforms={{
      time: 1,
      resolution: [600, 400],
      cameraPosition: vector3toArray(camera.position),
      cameraRotation: vector3toArray(camera.rotation),
    }} />
  </Surface>;
}