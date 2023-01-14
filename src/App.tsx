import { Canvas } from "./components/Canvas";
import { AppShell, Aside, Center, Header, Navbar, Space, Stack, Title } from "@mantine/core";
import { SceneTree } from "./components/SceneTree";
import { useRaymarchEditorStore } from "./store";
import { PropsEditor } from "./components/PropsEditor";

export function App() {
  const store = useRaymarchEditorStore();

  return (
    <AppShell
      header={<Header height={60} p="xs">
        <Title>Raymarch Editor</Title>
      </Header>}
      navbar={<Navbar width={{ base: 200 }} p="xs">
        <Stack>
          <Title order={3}>Scene</Title>
          <SceneTree scene={store.scene} />
        </Stack>
      </Navbar>}
      aside={<Aside width={{ base: 200 }} p="xs">
        <Stack>
          <Title order={3}>Camera</Title>
          <PropsEditor
            value={store.camera}
            onChange={(value) => store.setCamera(value)}
          />
        </Stack>
      </Aside>}
    >
      <Center>
        <Canvas />
      </Center>
    </AppShell>
  );
}
