import React, { useMemo, useState, useContext} from "react"
import { RootStackParamList, RootStackProps } from "../../../../App"
import { useNavigation } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text} from "react-native"
import { Form } from "../../organisms/Form";
import { FieldProperties, FieldTypes, FormValues } from "../../../types/FormTypes";
import { IconButton } from "../../atoms/IconButton/IconButton";
import { createGroup, deleteGroup, getAllGroups, updateGroup } from "../../../api/groups";
import { CurrentUserContext } from "../../../providers/CurrentUserProvider";
import { GroupsContext } from "../../../providers/GroupsProvider";
import { deleteTask } from "../../../api/tasks";

type FormScreenProps = NativeStackScreenProps<RootStackParamList, 'FormScreen'>;


export function FormScreen(props: FormScreenProps): JSX.Element {
    const {entity, values, event} = props.route.params

    const { setGroups } = useContext(GroupsContext);
    const { userToken } = useContext(CurrentUserContext)

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
    }, [entity])
    
    const [formValues, setFormValues] = useState<FormValues>(values)
    
    function goBack() {
        navigation.pop()
    }

    function onUpdateValues(name: string, value: FieldTypes) {
        const newValue = {[name]: value}
        setFormValues(values => {const newValues = ({...values, ...newValue}); console.log(newValues); return newValues})
    }

    async function finishOperation() {
        try{
            if(!userToken) throw Error("No user assigned")
            const groups = await getAllGroups(userToken)
            setGroups(groups)
            navigation.navigate("Home")
        }catch(err){
          navigation.navigate("Login")
        }
    }

    async function onSave(){
        try{
            if(entity === "group"){
                if(event === "create") {
                    await createGroup(userToken!, {
                        name: formValues.name as string,
                        description: formValues.description as string,
                        usersEmails: formValues.users as string[]
                    })
                } if(event == "update") {
                    await updateGroup(userToken!, {
                        id: values.id as string,
                        name: formValues.name as string,
                        description: formValues.description as string,
                        usersEmails: formValues.users as string[]
                    })
                }
            }
            finishOperation()
        }catch(err){
        }
    }

    async function onDelete(){
        try{
            if(entity === "group"){
                await deleteGroup(userToken!, values.id as string)
            }
            if(entity === "task"){
                await deleteTask(userToken!, values.id as string)
            }
            finishOperation()
        }catch(err){
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
                
                {
                event === "update" &&
                    <IconButton
                        style={{flex: 1}}
                        name="trash-can"
                        onPress={onDelete}
                        size={30}
                    />
                }
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
