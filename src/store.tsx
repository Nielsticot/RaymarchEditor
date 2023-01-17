import { create } from 'zustand'
import { Node } from './bindings/Node'
import { CameraProps } from './types'
import { invoke } from '@tauri-apps/api'
import { getShader } from './commands'
import { Shaders, ShadersSheet } from 'gl-react'

interface SceneStore {
    shader: ShadersSheet | null,

    scene: Node | null,
    setScene: (scene: Node) => void,

    camera: CameraProps,
    setCamera: (camera: CameraProps) => void,
}

export const useRaymarchEditorStore = create<SceneStore>((set) => ({
    shader: null,

    scene: null,
    setScene: async (scene) => {
        set({ scene });
        const shaderCode: string = await getShader(scene);
        console.log(shaderCode)
        const shader = Shaders.create({
            raymarch: { frag: shaderCode },
        });
        set({ shader });
    },

    camera: {
        position: { x: 0, y: 0, z: -2 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    setCamera: (camera) => set({ camera }),
}));