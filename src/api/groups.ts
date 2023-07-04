import { GroupType } from "../types/GroupType";
import { api } from ".";
import { getData } from "../storage";


export async function getAllGroups(): Promise<GroupType[]> {
    return api.get(`/groups/`)
        .then(res => {
            return res.data.groups
        })
        .catch(err => {
            console.error(JSON.stringify(err));
            return []
        })
}

type ICreateGroup = {
    name: string,
    description: string,
    usersEmails: string[]
}
export async function createGroup({name, description, usersEmails}: ICreateGroup): Promise<GroupType> {
    console.log(usersEmails)
    return api.post(`/groups`, {
        userId: getData("user").id,
        group: {
            name,
            description,
        },
        users: usersEmails
    })
    .then(res => res.data)
    .catch(err => {
        console.error(err);
        return null
    })

}

export async function deleteGroup(id: string): Promise<void> {
    return api.delete(`/groups/${id}`)
}

