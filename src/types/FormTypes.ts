type BaseFieldProperties = {
    name: string,
    label: string,
    editable?: boolean
    placeholder?: string
}

type MultiTextFieldProperties = {
    type: "multi-text",
    // value: string[]
}

type TextFieldProperties = {
    type: "text",
    // value: string
}

type SwitchFieldProperties = {
    type: "switch",
    // value: boolean
}

export type FieldProperties = BaseFieldProperties & (MultiTextFieldProperties | TextFieldProperties | SwitchFieldProperties)

export type FormFields = FieldProperties[]

export type FormValues = {
    [key: string]: boolean | string | string[]
}