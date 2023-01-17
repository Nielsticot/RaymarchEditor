import { Canvas } from "./components/Canvas";
import { AppShell, Header, Title } from "@mantine/core";
import { useControls, folder } from "leva";
import { useRaymarchEditorStore } from "./store";
import { useEffect } from "react";

export function App() {
  const [camera, setCamera, setScene] = useRaymarchEditorStore((state) => [state.camera, state.setCamera, state.setScene]);
  const cameraControls = useControls({
    camera: folder({
      position: {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
      },
      rotation: {
        x: camera.rotation.x,
        y: camera.rotation.y,
        z: camera.rotation.z,
      },
    }),
  });

  useEffect(() => {
    setScene({
      SmoothUnion: {
        smoothness: 0.2,
        left: {
          Sphere: {
            position: { x: -0.5, y: 0, z: 0 },
            radius: 1,
          },
        },
        right: {
          SmoothUnion: {
            smoothness: 0.5,
            left: {
              Sphere: {
                position: { x: 0.5, y: 0.5, z: 0 },
                radius: 0.5,
              },
            },
            right: {
              Sphere: {
                position: { x: 0.5, y: -0.2, z: -0.1 },
                radius: 0.3,
              },
            },
          }
        },
      }
    }
    );
  }, []);

  useEffect(() => setCamera({
    position: cameraControls.position,
    rotation: cameraControls.rotation,
  }), [cameraControls]);

  return (
    <AppShell
      header={<Header height={60} p="xs">
        <Title>Raymarch Editor</Title>
      </Header>}
    >
      <Canvas />
    </AppShell>
  );
}
