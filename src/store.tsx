import { create } from 'zustand'
import { BoxNode, RaymarchNode, RaymarchNodeProps, SphereNode, UnionNode, Vector3 } from './types'

interface SceneStore {
    scene: RaymarchNode<RaymarchNodeProps>,
}

export const useSceneStore = create<SceneStore>((set) => ({
    scene: new UnionNode({
        name: "Union",
        left: new UnionNode({
            name: "Union",
            left: new SphereNode({
                name: "Sphere 1",
                position: new Vector3(-0.5, 0.0, 0.0),
                radius: 1.0,
            }),
            right: new BoxNode({
                name: "Box 1",
                position: new Vector3(0, 0, 0),
                size: new Vector3(1, 0.5, 1.5),
            }),
        }),
        right: new SphereNode({
            name: "Sphere 2",
            position: new Vector3(0.5, 0.0, 0.0),
            radius: 1.1,
        }),
    }),
}))