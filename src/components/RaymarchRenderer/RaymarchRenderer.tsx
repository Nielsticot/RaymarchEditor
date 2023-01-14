import { Node } from "gl-react";
import { useRayMarchShader } from "./shader";
import { Surface } from "gl-react-dom";
import { useRaymarchEditorStore } from "../../store";

interface RayMarchRendererProps {
  sdf: string,
}

export function RaymarchRenderer({ sdf }: RayMarchRendererProps) {
  const store = useRaymarchEditorStore();
  const shaders = useRayMarchShader(sdf);

  return <Surface width={600} height={400}>
    <Node shader={shaders.raymarch} uniforms={{
      time: 1,
      resolution: [600, 400],
      cameraPosition: store.camera.position.toArray(),
      cameraRotation: store.camera.rotation.toArray(),
    }} />
  </Surface>;
}