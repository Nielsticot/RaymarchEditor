import { create } from 'zustand'
import { BoxNode, CameraProps, RaymarchNode, RaymarchNodeProps, SphereNode, UnionNode, Vector3 } from './types'

interface SceneStore {
    scene: RaymarchNode<RaymarchNodeProps>,
    camera: CameraProps,
}

export const useRaymarchEditorStore = create<SceneStore>((set) => ({
    scene: new UnionNode({
        name: "Union",
        left: new SphereNode({
            name: "Sphere 1",
            position: new Vector3(-0.5, 0.0, 0.0),
            radius: 1.0,
        }),
        right: new SphereNode({
            name: "Sphere 2",
            position: new Vector3(0.5, 0.0, 0.0),
            radius: 1.1,
        }),
    }),
    camera: {
        position: new Vector3(0, 0, 0),
        rotation: new Vector3(0, 0, 0),
    }
}))