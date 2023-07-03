export type FieldProperties = {
    name: string,
    label: string,
    editable?: boolean
    placeholder?: string
    type: "multi-text" | "text" | "switch",
}

export type FieldTypes = boolean | string | string[]

export type FormValues = {
    [key: string]: FieldTypes
}