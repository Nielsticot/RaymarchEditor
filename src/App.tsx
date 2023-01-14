import { Canvas } from "./components/Canvas";
import { AppShell, Header, Navbar, Title } from "@mantine/core";

export function App() {
  return (
    <AppShell
      header={<Header height={60} p="xs">
        <Title>Raymarch Editor</Title>
      </Header>}
      navbar={<Navbar width={{ base: 150 }} p="xs">
        <Title order={3}>Scene</Title>
      </Navbar>}
    >
      <Canvas />
    </AppShell>
  );
}
