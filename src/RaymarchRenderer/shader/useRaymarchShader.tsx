import { GLSL, Shaders } from "gl-react";
import { useMemo } from "react";
import { createRaymarchShader } from "./raymarchShader";

export function useRayMarchShader(sdfScene: string) {
    return useMemo(() => Shaders.create({
        raymarch: {
            frag: createRaymarchShader(sdfScene),
        }
    }), [sdfScene]);
}