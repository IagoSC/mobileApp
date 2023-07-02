import React, { useMemo, useState } from "react"
import { RootStackParamList, RootStackProps } from "../../../../App"
import { useNavigation } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, TextInput, Button} from "react-native"
import { Form } from "../../organisms/Form";
import { FieldProperties, FormFields, FormValues } from "../../../types/FormTypes";

type FormScreenProps = NativeStackScreenProps<RootStackParamList, 'FormScreen'>;


export function FormScreen(props: FormScreenProps): JSX.Element {
    const {entity, values} = props.route.params

    const navigation = useNavigation<RootStackProps>()
    
    const formFields = useMemo(() => {
        switch (entity) {
            case "group":
                return [
                    {
                        name: "name",
                        type: "text",
                        placeHolder: "New Group",
                    },
                    {
                        name: "description",
                        type: "text",
                        placeHolder: "Group Description",
                    },
                    {
                        name: "users",
                        type: "multi-text",
                        placeHolder: "",
                    }
                ]
            case "task":
                return [
                    {   name:"title",
                        type: "text",
                        placeHolder: "New Task"
                    },
                    {   name: "description",
                        type: "text",
                        placeHolder: "Task description"
                    }
                 ]
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
        setFormValues(newValues)
    }

    function onSave(){

    }

    return (
        <View
            style={{flex: 1}}   
        >
            <Form
                formFields={formFields}
                values={formValues}
                onChange={onUpdateValues}
                onSave={onSave}
            />
        </View>
    )
}
