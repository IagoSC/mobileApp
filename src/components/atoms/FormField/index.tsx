import React from "react"
import { TextInput } from "react-native"
import { FieldProperties } from "../../../types/FormTypes"

type FormFieldProperties = FieldProperties & {
    name: string
    onChange: (...params: any[]) => void
}


export function FormField(props: FormFieldProperties): JSX.Element {
    const {
        type,
        onChange,
        placeHolder,
        editable = true,
        name,
    } = props

    switch(type){
        case "text":
            return <TextInput
                        style={{}}
                        placeholder={placeHolder}
                        onChange={onChange}
                    />
        case "multi-text":
            return <></>
        default:
            return <></>
    }
}