import { View, Button} from "react-native"
import { FormField } from "../../atoms/FormField"
import { FormFields, FormValues } from "../../../types/FormTypes"


type FormProps = {
    formFields: FormFields
    onChange: (...params: any[]) => void
    onSave: (...params: any[]) => void
    values: FormValues
}

export function Form(props: FormProps): JSX.Element {
    const {
        formFields,
        onChange,
        onSave,
        values
    } = props

    return (
        <View
            style={{flex: 1, margin: 5}}
        >
            {
                formFields.map(({value, ...fieldProperties}) => {
                    return <FormField
                        value={values[fieldProperties.name]}
                        onChange={onChange}
                        {...fieldProperties}
                    />
                })
            }
            <Button
                title="SAVE"
                onPress={onSave}
            />
        </View>
    )
}