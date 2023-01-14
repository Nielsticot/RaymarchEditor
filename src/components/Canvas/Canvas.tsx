import { useMemo } from "react";
import { RaymarchRenderer } from "../RaymarchRenderer";
import { Vector3 } from "../../types";
import { useRaymarchEditorStore } from "../../store";

export function Canvas() {
  const store = useRaymarchEditorStore();

  const sdf = useMemo(() => store.scene.getSdf({
    position: new Vector3(0, 1, 4),
  }), [store.scene]);

  return <RaymarchRenderer sdf={sdf} />;
}
