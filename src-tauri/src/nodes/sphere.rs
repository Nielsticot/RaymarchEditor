use serde::{Serialize, Deserialize};
use ts_rs::TS;

use crate::vector::Vector3;

use super::SdfComposer;

#[derive(Debug, Serialize, Deserialize, TS)]
#[ts(export, export_to = "../src/bindings/")]
pub struct Sphere {
    pub radius: f32,
    pub position: Vector3,
}

impl SdfComposer for Sphere {
    fn compose_sdf(self) -> String {
        return format!("sdSphere(p+{}, {:.10})", self.position.to_glsl(), self.radius);
    }
}
