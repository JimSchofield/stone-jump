const prop = (prop: string) => (obj: { [key:string]: any}) => obj[prop];

export default {
    prop,
}