import { invoke } from "@tauri-apps/api";
import { Node } from "./bindings/Node";

export function getShader(scene: Node): Promise<string> {
    return invoke("get_shader", { scene });
}