#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use nodes::Node;
use shader::compose_shader;

mod vector;
mod nodes;
mod shader;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn get_shader(scene: Node) -> String {
    return compose_shader(scene);
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_shader])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
