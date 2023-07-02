import React from "react"
import { TextInput } from "react-native"
import { FieldProperties} from "../../../types/FormTypes"

type FormFieldProperties = FieldProperties & {
    onChange: (...params: any[]) => void
}


export function FormField(props: FormFieldProperties): JSX.Element {
    const {
        type,
        onChange,
        placeholder,
        editable = true,
        name,
        label,
        value,
    } = props

    console.log(value)

    switch(type){
        case "text":
            return <TextInput
                        editable={editable}
                        value={value}
                        style={{}}
                        placeholder={placeholder}
                        onChange={onChange}
                    />
        case "multi-text":
            return <></>
        default:
            return <></>
    }
}