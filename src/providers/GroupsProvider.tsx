import { PropsWithChildren, createContext, useState } from "react";
import { GroupType } from "../types/GroupType";

type IGroupsContext = {
    groups: GroupType[]
    cleanUpContext: () => void
    setGroups: (groups: GroupType[]) => void
}

const InitialState: IGroupsContext = {
    groups: [],
    cleanUpContext: () => {},
    setGroups: () => {},
}

export const GroupsContext = createContext<IGroupsContext>(InitialState)

export function GroupsProvider(props: PropsWithChildren<{}>){
    const [groups, setGroups] = useState<GroupType[]>(InitialState.groups)

    function cleanUpContext() {
        setGroups(InitialState.groups)
    }

    return (
        <GroupsContext.Provider value={{groups, cleanUpContext, setGroups}}>
            {props.children}
        </GroupsContext.Provider>
    )
}