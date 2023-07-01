import { PropsWithChildren } from "react";
import { Text, View } from "react-native";
import { GroupType } from "../../../types/GroupType";
import { StyleSheet } from "react-native";
import { IconButton } from "../../atoms/IconButton/IconButton";

type GroupBarProps = PropsWithChildren<{
    expandGroup: () => void,
    editGroup: () => void,
    color: string,
    group: GroupType
}>;

export function GroupBar({expandGroup, editGroup, color, group}: GroupBarProps): JSX.Element {
    return (
        <View style={[styles.BarContainer]}>
            <IconButton
                onPress={expandGroup}
                size={35}
                name="chevron-down"
            />
            
            <Text style={{fontSize: 18, fontWeight: "bold"}}>{group.title}</Text>

            <IconButton
                style={{}}
                size={20}
                onPress={editGroup}
                name="square-edit-outline"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    BarContainer: {
        flex: 1,
        marginVertical: 10,
        height: 50,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        justifyContent: "space-between",
    },
})