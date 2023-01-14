import { useMemo, useEffect } from "react";
import { RaymarchRenderer } from "../RaymarchRenderer";
import { RaymarchNode, RaymarchNodeProps, SphereNode, UnionNode, Vector3 } from "../../types";

export function Canvas() {
  const scene: RaymarchNode<RaymarchNodeProps> = useMemo(() => new UnionNode({
    name: "root",
    left: new SphereNode({
      name: "sphere1",
      position: new Vector3(-0.5, 0.0, 0.0),
      radius: 1.0,
    }),
    right: new SphereNode({
      name: "sphere2",
      position: new Vector3(0.5, 0.0, 0.0),
      radius: 1.1,
    }),
  }), []);

  const sdf = useMemo(() => scene.getSdf({
    position: new Vector3(0, 1, 4),
  }), [scene]);

  return <RaymarchRenderer sdf={sdf} />;
}
