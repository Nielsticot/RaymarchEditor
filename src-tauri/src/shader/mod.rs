use crate::{nodes::{Node, SdfComposer, SHADER_FUNCTIONS}};

const SHADER: &str = include_str!("shader.glsl");

pub fn compose_shader(scene: Node) -> String {
    let sdf = scene.compose_sdf();
    return SHADER
        .replace("{shaderFunctions}", SHADER_FUNCTIONS)
        .replace("{sdf}", &sdf);
}
