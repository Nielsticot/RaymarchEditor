use serde::{Serialize, Deserialize};
use ts_rs::TS;

use super::{Node, SdfComposer};

#[derive(Debug, Serialize, Deserialize, TS)]
#[ts(export, export_to = "../src/bindings/")]
pub struct SmoothUnion {
    left: Box<Node>,
    right: Box<Node>,
    smoothness: f32,
}

impl SdfComposer for SmoothUnion {
    fn compose_sdf(self) -> String {
        let left = self.left.compose_sdf();
        let right = self.right.compose_sdf();
        return format!("opSmoothUnion({}, {}, {:.10})", left, right, self.smoothness);
    }
}
