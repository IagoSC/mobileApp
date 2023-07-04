const data: any = {}

export function getData(name: string){
    return data[name]
}

export function setData(name: string, value: any){
    data[name] = value
    return data
}