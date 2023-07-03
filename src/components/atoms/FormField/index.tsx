import React from "react"
import { TextInput } from "react-native"
import { useState, useEffect } from "react"
import { FieldProperties } from "../../../types/FormTypes"
import { MultiSelect } from "../MultiSelect"

type FormFieldProperties = FieldProperties & {
    onChange: (name: string, value: string[] | string | boolean) => void
    value: string[] | string | boolean
}


export function FormField(props: FormFieldProperties): JSX.Element {
    const {
        type,
        onChange,
        placeholder,
        editable = true,
        name,
        value,
    } = props


    switch(type){
        case "text":
            return <TextInput
                        editable={editable}
                        value={value as string}
                        style={{}}
                        placeholder={placeholder}
                        onChangeText={value => onChange(name, value)}
                    />
        case "multi-text":
            return (
                <MultiSelect
                    values={value as string[] || []}
                    onChange={values => onChange(name, values)}
                />
            )
        default:
            return <></>
    }
}