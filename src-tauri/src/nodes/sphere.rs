use ts_rs::TS;

use crate::types::Vector3;

use super::SdfComposer;

#[derive(TS)]
#[ts(export, export_to = "../src/bindings/")]
pub struct Sphere {
    pub radius: f32,
    pub position: Vector3,
}

impl SdfComposer for Sphere {
    fn compose_sdf(self) -> String {
        return String::from("sdf()");
    }
}
