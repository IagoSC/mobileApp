import { View } from "react-native"
import { FormField } from "../../atoms/FormField"
import { FormFields } from "../../../types/FormTypes"


type FormProps = {
    formFields: FormFields
    onChange: (...params: any[]) => void
}

export function Form({formFields, onChange}: FormProps): JSX.Element {
    return (
        <View>
            {
                Object.entries(formFields).map(([fieldName, fieldProperties]) => {
                    return <FormField 
                        name={fieldName}
                        onChange={onChange}
                        {...fieldProperties}
                    />
                })
            }
        </View>
    )
}