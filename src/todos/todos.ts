import Task from "./task";
import { Priority } from "./priority"
import Checklist from "./checklist";

export default interface Todo extends Task {
    description: string,
    date: Date,
    priority: Priority,
    checklist: Checklist<Task>,
}