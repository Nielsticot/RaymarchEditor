use ts_rs::TS;


#[derive(TS)]
#[ts(export, export_to = "../src/bindings/")]
pub struct Vector3 {
    pub x: f32,
    pub y: f32,
    pub z: f32,
}