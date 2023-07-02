import React, { useMemo, useState } from "react"
import { RootStackParamList, RootStackProps } from "../../../../App"
import { useNavigation } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, TextInput, Button} from "react-native"
import { Form } from "../../organisms/Form";
import { FormFields, FormValues } from "../../../types/FormTypes";

type FormScreenProps = NativeStackScreenProps<RootStackParamList, 'FormScreen'>;


export function FormScreen(props: FormScreenProps): JSX.Element {
    const {entity, values} = props.route.params

    const navigation = useNavigation<RootStackProps>()
    
    const formFields = useMemo(() => {
        switch (entity) {
            case "group":
                return {
                    name: {
                        type: "text",
                        placeHolder: "New Group"
                    },
                    description: {
                        type: "text",
                        placeHolder: "Group Description"
                    },
                    users: {
                        type: "multi-text",
                        placeHolder: ""
                    }
                } as FormFields
            case "task":
                return {
                    title: {
                        type: "text",
                        placeHolder: "New Task"
                    },
                    description: {
                        type: "text",
                        placeHolder: "Task description"
                    }
                } as FormFields
            case "alarm":
                return {} as FormFields
            default:
                return {} as FormFields
        }
    }, [props.route.params])
    
    const [formValues, setFormValues] = useState<FormValues>(values)
    
    function fun() {
        navigation.navigate("Home")
    }

    function onUpdateValues(newValues: FormValues) {
        
    }

    function onSaveValue(){

    }

    return (
        <View
            style={{flex: 1}}   
        >
            <Form
                formFields={formFields}
                onChange={onUpdateValues}
            />
            <Button
                title="SAVE"
                onPress={onSaveValue}
            />
        </View>
    )
}
