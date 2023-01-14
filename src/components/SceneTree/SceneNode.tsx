import { ActionIcon, Group } from "@mantine/core";
import { IconCaretDown, IconCaretRight } from "@tabler/icons";
import { useState } from "react";

export function SceneNode() {
    const [opened, setOpened] = useState(false);

    const Caret = opened ? IconCaretDown : IconCaretRight;

    return <>
        <Group position="left" w="100%">
            <ActionIcon
                variant="subtle"
                onClick={() => setOpened(!opened)}
            >
                <Caret size={18} />
            </ActionIcon>
        </Group>
    </>;
}