import { create } from 'zustand'
import { BoxNode, CameraProps, RaymarchNode, RaymarchNodeProps, SphereNode, UnionNode, Vector3 } from './types'

interface SceneStore {
    scene: RaymarchNode<RaymarchNodeProps>,
    camera: CameraProps,
    setCamera: (camera: CameraProps) => void,
}

export const useRaymarchEditorStore = create<SceneStore>((set) => ({
    scene: new UnionNode({
        name: "Union",
        left: new SphereNode({
            name: "Sphere 1",
            position: new Vector3(-0.5, 0.0, 0.0),
            radius: 1.0,
        }),
        right: new BoxNode({
            name: "Box 1",
            position: new Vector3(0.5, 0.0, 0.0),
            size: new Vector3(1, 1, 0.2),
        }),
    }),
    camera: {
        position: new Vector3(0, 1, 0),
        rotation: new Vector3(0, 0, 0),
    },
    setCamera: (cam) => {
        console.log(cam)
        set({ camera: cam })
    },
}))