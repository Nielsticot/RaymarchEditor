import { Stack } from "@mantine/core";
import { Vector3 } from "../../types";
import { ValueEditorProps } from "./types";
import { NumberEditor } from "./NumberEditor";

export function Vector3Editor({ value: vector, onChange }: ValueEditorProps<Vector3>) {
    return <Stack>
        <NumberEditor
            value={vector.x}
            onChange={(value) => onChange(new Vector3(value, vector.y, vector.z))}
        />
        <NumberEditor
            value={vector.y}
            onChange={(value) => onChange(new Vector3(vector.x, value, vector.z))}
        />
        <NumberEditor
            value={vector.z}
            onChange={(value) => onChange(new Vector3(vector.x, vector.y, value))}
        />
    </Stack>;
}