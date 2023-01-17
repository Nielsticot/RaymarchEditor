use std::ops::Add;

use serde::{Serialize, Deserialize};
use ts_rs::TS;


#[derive(Debug, Serialize, Deserialize, Clone, TS)]
#[ts(export, export_to = "../src/bindings/")]
pub struct Vector3 {
    pub x: f32,
    pub y: f32,
    pub z: f32,
}

impl Vector3 {
    pub fn to_glsl(self) -> String {
        return format!("vec3({:.10},{:.10},{:.10})", self.x, self.y, self.z);
    }
}

impl Add for Vector3 {
    type Output = Vector3;

    fn add(self, other: Vector3) -> Vector3 {
        Vector3 {
            x: self.x + other.x,
            y: self.y + other.y,
            z: self.z + other.z,
        }
    }
}