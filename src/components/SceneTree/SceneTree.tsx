import { Container, Stack } from "@mantine/core";
import { SceneNode } from "./SceneNode";
import { RaymarchNode, RaymarchNodeProps } from "../../types";

interface SceneTreeProps {
    scene: RaymarchNode<RaymarchNodeProps>,
}

export function SceneTree({ scene }: SceneTreeProps) {
    return <SceneNode node={scene} />;
}