import { Group, Slider, Text } from "@mantine/core";
import { ValueEditorProps } from "./types";

export function NumberEditor({ value, onChange }: ValueEditorProps<number>) {
    return <Group noWrap>
        <Text size="xs">{value.toPrecision(3)}</Text>
        <Slider
            value={value}
            onChangeEnd={onChange}
            min={-20}
            max={20}
            step={0.05}
            size="xs"
            w="100%"
        />
    </Group>;
}