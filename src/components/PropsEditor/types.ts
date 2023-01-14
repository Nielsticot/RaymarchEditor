export interface ValueEditorProps<T> {
    value: T,
    onChange: (value: T) => void,
}