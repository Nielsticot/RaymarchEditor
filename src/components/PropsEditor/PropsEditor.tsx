import { Card, Center, Stack, Text } from "@mantine/core";
import { Vector3 } from "../../types";
import { Vector3Editor } from "./Vector3Editor";
import { ValueEditorProps } from "./types";

export function PropsEditor<T extends Object>({ value: props, onChange }: ValueEditorProps<T>) {
    return <Stack spacing="xs">
        {Object.entries(props).map(([key, value]) => {
            let input = <Text c="red">No editor</Text>

            if (value instanceof Vector3)
                input = <Vector3Editor value={value} onChange={(val) => onChange({
                    ...props,
                    [key]: val,
                })} />;

            return <Card key={key}>
                <Card.Section withBorder inheritPadding py={3}>
                    <Center>
                        <Text weight={500}>{key}</Text>
                    </Center>
                </Card.Section>
                <Card.Section inheritPadding py="xs">
                    {input}
                </Card.Section>
            </Card>;
        })}
    </Stack>;
}