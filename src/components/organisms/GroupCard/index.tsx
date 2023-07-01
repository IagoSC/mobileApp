import { PropsWithChildren, useState } from "react";
import { styles } from "./styles";
import { Text, View } from "react-native";
import { GroupType } from "../../../types/GroupType";
import { GroupBar } from "../../molecules/GroupBar";
import { TaskCard } from "../TaskCard";

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

    return (
        <View style={[styles.CardContainer]}>
            <GroupBar
                color={color}
                editGroup={editGroup}
                expandGroup={expandGroup}
                group={group}
            />
            <View style={{flex: 1}}>
                {isExpanded && [{id: "a"}, {id: "b"}].map(task => (
                    <TaskCard
                        key={`task-${task.id}`}
                        title="New Task"
                        description="Task description"
                    />
                ))
                }
            </View> 
        </View>
    )
}