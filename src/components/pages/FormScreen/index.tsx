import React, { useMemo, useState } from "react"
import { RootStackParamList, RootStackProps } from "../../../../App"
import { useNavigation } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, TextInput, Button, Text} from "react-native"
import { Form } from "../../organisms/Form";
import { FieldProperties, FieldTypes, FormValues } from "../../../types/FormTypes";
import { IconButton } from "../../atoms/IconButton/IconButton";
import { createGroup, deleteGroup } from "../../../api/groups";

type FormScreenProps = NativeStackScreenProps<RootStackParamList, 'FormScreen'>;


export function FormScreen(props: FormScreenProps): JSX.Element {
    const {entity, values, event} = props.route.params

    const navigation = useNavigation<RootStackProps>()
    
    const formFields = useMemo(() => {
        switch (entity) {
            case "group":
                return [
                    {
                        name: "name",
                        type: "text",
                        placeholder: "New Group",
                    },
                    {
                        name: "description",
                        type: "text",
                        placeholder: "Group Description",
                    },
                    {
                        name: "users",
                        type: "multi-text",
                        placeholder: "",
                    }
                ] as FieldProperties[] 
            case "task":
                return [
                    {   name:"title",
                        type: "text",
                        placeholder: "New Task"
                    },
                    {   name: "description",
                        type: "text",
                        placeholder: "Task description"
                    }
                 ] as FieldProperties[] 
            case "alarm":
                return [] as FieldProperties[] 
            default:
                return [] as FieldProperties[] 
        }
    }, [props.route.params])
    
    const [formValues, setFormValues] = useState<FormValues>(values)
    
    function goBack() {
        navigation.pop()
    }

    function onUpdateValues(name: string, value: FieldTypes) {
        const newValue = {[name]: value}
        setFormValues(values => {const newValues = ({...values, ...newValue}); console.log(newValues); return newValues})
    }

    async function onSave(){
        console.log(formValues)
        if(entity === "group"){
            if(event === "create") {
                const newGroup = await createGroup({
                    name: formValues.name as string,
                    description: formValues.description as string,
                    usersEmails: formValues.users as string[]
                })
            }
        }
    }

    async function onDelete(){
        if(entity === "group"){
            await deleteGroup(values.id as string)
        }
    } 

    return (
        <View
            style={{flex: 1}}   
        >   
            <View
                style={{height: 50, flexDirection: "row", alignItems: "center", backgroundColor: "#aaa"}}
            >
                <IconButton
                    style={{flex: 1}}
                    name="chevron-left"
                    onPress={goBack}
                    size={30}
                />
                
                <Text
                    style={{flex: 8, alignSelf: "center"}}
                >{`${event.toUpperCase()} GROUP`}</Text>
                
                <IconButton
                    style={{flex: 1}}
                    name="trash-can"
                    onPress={onDelete}
                    size={30}
                />
            </View>
            <Form
                formFields={formFields}
                values={formValues}
                onChange={onUpdateValues}
                onSave={onSave}
            />
        </View>
    )
}
