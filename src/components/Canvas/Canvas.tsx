import { useMemo } from "react";
import { RaymarchRenderer } from "../RaymarchRenderer";
import { Vector3 } from "../../types";
import { useRaymarchEditorStore } from "../../store";

export function Canvas() {
  const sceneStore = useRaymarchEditorStore();

  const sdf = useMemo(() => sceneStore.scene.getSdf({
    position: new Vector3(0, 1, 4),
  }), [sceneStore.scene]);

  return <RaymarchRenderer sdf={sdf} />;
}
