import { PropsWithChildren, useState } from "react";
import { styles } from "./styles";
import { Text, View } from "react-native";
import { GroupType } from "../../../types/GroupType";
import { GroupBar } from "../../molecules/GroupBar";
import { TaskCard } from "../TaskCard";
import { TaskList } from "../../molecules/TaskList";

type GroupCardProps = PropsWithChildren<{
    color: string,
    group: GroupType
}>;


export function GroupCard({color, group}: GroupCardProps): JSX.Element {
    const [isExpanded, setIsExpanded]  = useState<boolean>(true)

    function editGroup() {

    }

    function expandGroup() {
        setIsExpanded(oldState => !oldState)
    }

    const tasks = group.tasks || []

    return (
        <View style={[styles.CardContainer]}>
            <GroupBar
                color={color}
                editGroup={editGroup}
                expandGroup={expandGroup}
                group={group}
                isExpanded={isExpanded}
            />
            <View style={{flex: 1}}>
                {isExpanded && 
                    <TaskList
                        tasks={tasks}
                    />
                }
            </View> 
        </View>
    )
}

