use ts_rs::TS;

use super::{Vector3, SdfComposer};

#[derive(TS)]
#[ts(export, export_to = "../src/bindings/")]
pub struct Sphere {
    pub radius: f32,
    pub position: Vector3,
}

impl SdfComposer for Sphere {
    const SHADER: &'static str = "sphere shader code";
    fn compose_sdf(self) -> String {
        return String::from("sdf()");
    }
}