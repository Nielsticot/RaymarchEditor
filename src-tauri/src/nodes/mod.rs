use ts_rs::TS;

pub mod sphere;
use sphere::Sphere;
pub mod union;
use union::Union;

#[derive(TS)]
#[ts(export, export_to = "../src/bindings/")]
pub struct Vector3 {
    pub x: f32,
    pub y: f32,
    pub z: f32,
}

#[derive(TS)]
#[ts(export, export_to = "../src/bindings/")]
struct Difference {
    left: Box<Node>,
    right: Box<Node>,
}

#[derive(TS)]
#[ts(export, export_to = "../src/bindings/")]
struct Intersect {
    left: Box<Node>,
    right: Box<Node>,
}

#[derive(TS)]
#[ts(export, export_to = "../src/bindings/")]
struct Cube {
    size: Vector3,
    position: Vector3,
}

trait SdfComposer {
    const SHADER: &'static str;
    fn compose_sdf(self) -> String;
}

macro_rules! handle_nodes {
    ($name:ident, $($variant:ident),+) => {
        #[derive(TS)]
        #[ts(export, export_to = "../src/bindings/")]
        pub enum $name {
            $( $variant($variant), )+
        }

        impl SdfComposer for $name {
            const SHADER: &'static str = concat!($(stringify!($variant::SHADER), " "),*);
            fn compose_sdf(self) -> String {
                match self {
                    $($name::$variant(x) => x.compose_sdf(),)+
                }
            }
        }
    }
}

handle_nodes!(Node, Sphere, Union);
// handle_nodes!(Node, Union, Difference, Intersect, Cube, Sphere);
