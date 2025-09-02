
export default interface Task {
    id: string,
    title: string,
    complete: boolean,
    compare: (a: Task, b: Task) => number,
}