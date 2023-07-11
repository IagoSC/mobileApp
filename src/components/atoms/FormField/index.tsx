import React from "react"
import { FieldProperties, Option } from "../../../types/FormTypes"
import { MultiSelect } from "../MultiSelect"
import { LabeledTextInput } from "../LabeledTextInput"
import {Picker} from '@react-native-picker/picker';

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
            return <LabeledTextInput
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
        case "select":
            return (
                <Picker
                    selectedValue={value as string}
                    onValueChange={(value) => onChange(name, value as string)}
                >
                    {
                        props.options.map(option => {
                           return <Picker.Item
                                key={`picker-option-${option}`}
                                value={option.value}
                                label={option.label}
                           />
                        })
                    }
                </Picker>
            )
        default:
            return <></>
    }
}