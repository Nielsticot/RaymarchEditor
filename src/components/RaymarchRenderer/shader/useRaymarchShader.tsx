import { Shaders } from "gl-react";
import { useMemo } from "react";
import { createRaymarchShader } from "./raymarchShader";

export function useRayMarchShader(sdfScene: string) {
    return useMemo(() => {
        const shader = createRaymarchShader(sdfScene);
        return Shaders.create({
            raymarch: { frag: shader },
        });
    }, [sdfScene]);
}