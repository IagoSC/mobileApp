import { GroupType } from "../types/GroupType";
import { api } from ".";
import { TaskType } from "../types/TaskType";
import { Http2ServerRequest } from "http2";


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

export async function getGroup(id: string): Promise<GroupType> {
    return api.get(`/groups/${id}`)
        .then(res => res.data)
        .catch(err => {console.error(err); return null})
}

export async function getTask(groupId: string, taskId: string): Promise<TaskType> {
    return api.get(`/groups/${groupId}/tasks/${taskId}`).then(res => res.data)
}

export async function createGroup(title: string, description: string): Promise<GroupType> {
    return api.post(`/group`, {
        title,
        description
    })
    .then(res => res.data)
    .catch(err => {
        console.error(err);
        return null
    })

}

export async function createTask(groupId: string, title: string, description: string): Promise<TaskType> {
    return api.post(`/groups/${groupId}/tasks`, {
        title,
        description
    })
    .then(res => res.data)
    .catch(err => {
        console.error(err);
        return null
    })
}

export async function updateGroup(id: string, title: string, description: string): Promise<GroupType> {
    return api.put(`/groups/${id}`, {
        title,
        description
    })
    .then(res => res.data)
    .catch(err => {
        console.error(err);
        return null
    })
}

export async function updateTask(groupId: string, taskId: string, title: string, description: string): Promise<TaskType> {
    return api.put(`/groups/${groupId}/tasks/${taskId}`, {
        title,
        description
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

export async function deleteTask(groupId: string, taskId: string): Promise<void> {
    return api.delete(`/groups/${groupId}/tasks/${taskId}`)
}

