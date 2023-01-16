use serde::{Serialize, Deserialize};
use ts_rs::TS;


#[derive(Debug, Serialize, Deserialize, TS)]
#[ts(export, export_to = "../src/bindings/")]
pub struct Vector3 {
    pub x: f32,
    pub y: f32,
    pub z: f32,
}

impl Vector3 {
    pub fn to_glsl(self) -> String {
        return format!("({},{},{})", self.x, self.y, self.z);
    }
}