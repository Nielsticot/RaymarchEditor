import { ActionIcon, Collapse, Group, Paper, Stack, Text } from "@mantine/core";
import { IconCaretDown, IconCaretRight } from "@tabler/icons";
import { useState } from "react";
import { OperatorNode, OperatorNodeProps, RaymarchNode, RaymarchNodeProps } from "../../../types";

interface SceneNodeProps {
    node: RaymarchNode<RaymarchNodeProps>,
}

export function SceneNode({ node }: SceneNodeProps) {
    const [opened, setOpened] = useState(false);

    const isOperator = node instanceof OperatorNode;
    const Caret = opened ? IconCaretDown : IconCaretRight;

    return <div>
        <Paper bg="gray">
            <Group position="left" spacing={0}>
                {isOperator && <ActionIcon
                    variant="subtle"
                    onClick={() => setOpened(!opened)}
                >
                    <Caret size={18} />
                </ActionIcon>}
                <Text ml="xs">{node.props.name}</Text>
            </Group>
        </Paper>
        {isOperator && <Collapse in={opened} transitionDuration={100} transitionTimingFunction="ease-in">
            <Stack ml="xs" mt="xs" spacing="xs">
                <SceneNode node={(node as OperatorNode<OperatorNodeProps>).props.left} />
                <SceneNode node={(node as OperatorNode<OperatorNodeProps>).props.right} />
            </Stack>
        </Collapse>}
    </div>;
}