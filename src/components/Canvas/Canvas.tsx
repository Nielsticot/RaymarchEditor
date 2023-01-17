import { RaymarchRenderer } from "../RaymarchRenderer";
import { useRaymarchEditorStore } from "../../store";
import { Text } from "@mantine/core";

export function Canvas() {
  const [shader, camera] = useRaymarchEditorStore((state) => [state.shader, state.camera]);

  if (shader == null)
    return <Text color="red">No shader to show</Text>
  return <RaymarchRenderer shader={shader.raymarch} camera={camera} />;
}
