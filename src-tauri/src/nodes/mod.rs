use serde::{Deserialize, Serialize};
use ts_rs::TS;
pub mod sphere;
use sphere::Sphere;
pub mod union;
use union::Union;
pub mod smooth_union;
use smooth_union::SmoothUnion;

pub trait SdfComposer {
    fn compose_sdf(self) -> String;
}

macro_rules! handle_nodes {
    ($name:ident, $([$variant:ident, $shader_path:expr]),+) => {
        #[derive(Debug, Serialize, Deserialize, TS)]
        #[ts(export, export_to = "../src/bindings/")]
        pub enum $name {
            $( $variant($variant), )+
        }

        impl SdfComposer for $name {
            fn compose_sdf(self) -> String {
                match self {
                    $($name::$variant(x) => x.compose_sdf(),)+
                }
            }
        }

        pub const SHADER_FUNCTIONS: &str = concat!($(include_str!($shader_path), )+);
    }
}

handle_nodes!(
    Node,
    [Sphere, "shaders/sphere.glsl"],
    [Union, "shaders/union.glsl"],
    [SmoothUnion, "shaders/smooth_union.glsl"]
);
