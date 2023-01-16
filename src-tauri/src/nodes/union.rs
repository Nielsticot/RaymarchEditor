use serde::{Serialize, Deserialize};
use ts_rs::TS;

use super::{Node, SdfComposer};

#[derive(Debug, Serialize, Deserialize, TS)]
#[ts(export, export_to = "../src/bindings/")]
pub struct Union {
    left: Box<Node>,
    right: Box<Node>,
}

impl SdfComposer for Union {
    fn compose_sdf(self) -> String {
        let left = self.left.compose_sdf();
        let right = self.right.compose_sdf();
        return format!("sdUnion({},{})", left, right);
    }
}
