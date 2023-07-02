export type FieldProperties = {
    type: "text" | "switch" | "multi-text"
    placeHolder: string
    editable?: boolean
}

export type FormFields = Record<string, FieldProperties>

export type MultiTextFieldValue = string[]
export type TextFieldValue = string

export type FormValues = Record<
    string,
    MultiTextFieldValue | TextFieldValue
>
