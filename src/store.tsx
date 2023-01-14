import { create } from 'zustand'
import { BoxNode, CameraProps, RaymarchNode, RaymarchNodeProps, SmoothUnionNode, SphereNode, UnionNode, Vector3 } from './types'

interface SceneStore {
    scene: RaymarchNode<RaymarchNodeProps>,
    camera: CameraProps,
    setCamera: (camera: CameraProps) => void,
}

export const useRaymarchEditorStore = create<SceneStore>((set) => ({
    scene: new SmoothUnionNode({
        name: "Smooth Union",
        smooth: 0.5,
        left: new SphereNode({
            name: "Sphere 1",
            position: new Vector3(-0.5, 0.0, 0.0),
            radius: 1.0,
        }),
        right: new UnionNode({
            name: "Union",
            left: new BoxNode({
                name: "Box 1",
                position: new Vector3(0.5, 0.0, 0.0),
                size: new Vector3(1, 1, 0.2),
            }),
            right: new SphereNode({
                name: "Small Sphere",
                position: new Vector3(-1.5, 0.3, -0.3),
                radius: 0.6,
            })
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