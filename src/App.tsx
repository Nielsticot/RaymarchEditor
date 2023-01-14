import { Canvas } from "./components/Canvas";
import { AppShell, Header, Navbar, Space, Title } from "@mantine/core";
import { SceneTree } from "./components/SceneTree";

export function App() {
  return (
    <AppShell
      header={<Header height={60} p="xs">
        <Title>Raymarch Editor</Title>
      </Header>}
      navbar={<Navbar width={{ base: 150 }} p="xs">
        <Title order={3}>Scene</Title>
        <Space h="sm" />
        <SceneTree />
      </Navbar>}
    >
      <Canvas />
    </AppShell>
  );
}
