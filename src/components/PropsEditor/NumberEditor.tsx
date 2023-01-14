import { Group, Slider, Text } from "@mantine/core";
import { ValueEditorProps } from "./types";

export function NumberEditor({ value, onChange }: ValueEditorProps<number>) {
    return <Group noWrap>
        <Text size="xs">{value.toPrecision(3)}</Text>
        <Slider
            value={value}
            onChange={onChange}
            min={-5}
            max={5}
            step={0.01}
            size="xs"
            w="100%"
        />
    </Group>;
}