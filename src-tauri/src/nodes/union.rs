use ts_rs::TS;

use super::{Node, SdfComposer};

#[derive(TS)]
#[ts(export, export_to = "../src/bindings/")]
pub struct Union {
    left: Box<Node>,
    right: Box<Node>,
}

impl SdfComposer for Union {
    fn compose_sdf(self) -> String {
        return String::from("sdf()");
    }
}