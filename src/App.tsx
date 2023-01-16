import { Canvas } from "./components/Canvas";
import { AppShell, Aside, Button, Center, Header, Navbar, Space, Stack, Title } from "@mantine/core";
// import { SceneTree } from "./components/SceneTree";
// import { useRaymarchEditorStore } from "./store";
// import { PropsEditor } from "./components/PropsEditor";
import { useControls, folder } from "leva";
import { useEffect } from "react";
// import { Vector3 } from "./types";
import { invoke } from "@tauri-apps/api";
import { Node } from "./bindings/Node";

const scene: Node = {
  Union: {
    left: {
      Union: {
        left: {
          Sphere: {
            position: { x: 0, y: 0, z: 2 },
            radius: 1,
          },
        },
        right: {
          Sphere: {
            position: { x: 0, y: 2, z: 0 },
            radius: 1,
          },
        },
      },
    },
    right: {
      Union: {
        left: {
          Union: {
            left: {
              Sphere: {
                position: { x: 1, y: 0, z: 0 },
                radius: 1,
              },
            },
            right: {
              Sphere: {
                position: { x: 0, y: 1, z: 0 },
                radius: 1,
              },
            },
          },
        },
        right: {
          Sphere: {
            position: { x: 0, y: 0, z: 1 },
            radius: 1,
          },
        },
      },
    },
  },
};

export function App() {
  // const store = useRaymarchEditorStore();
  const camera = useControls({
    camera: folder({
      position: {
        x: 0,
        y: 1,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
    }),
  });

  // useEffect(() => store.setCamera({
  //   position: new Vector3(camera.position.x, camera.position.y, camera.position.z),
  //   rotation: new Vector3(camera.rotation.x, camera.rotation.y, camera.rotation.z),
  // }), [camera]);

  return (
    <AppShell
      header={<Header height={60} p="xs">
        <Title>Raymarch Editor</Title>
      </Header>}
    // navbar={<Navbar width={{ base: 200 }} p="xs">
    //   <Stack>
    //     <Title order={3}>Scene</Title>
    //     <SceneTree scene={store.scene} />
    //   </Stack>
    // </Navbar>}
    // aside={<Aside width={{ base: 200 }} p="xs">
    //   <Stack>
    //     <Title order={3}>Camera</Title>
    //     <PropsEditor
    //       value={store.camera}
    //       onChange={(value) => store.setCamera(value)}
    //     />
    //   </Stack>
    // </Aside>}
    >
      <Button onClick={async () => {
        const sdf = await invoke("get_shader", { scene });
        console.log(sdf);
      }
      }>Test</Button>
      {/* <Canvas /> */}
    </AppShell>
  );
}
