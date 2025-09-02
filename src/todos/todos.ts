import Task from "./task";
import { Priority } from "./priority"
import Checklist from "./checklist";
import { Tag } from "./tag";

export default interface Todo extends Task {
    description: string,
    date: Date,
    priority: Priority,
    tags: [Tag],
    checklist: Checklist<Task>,
}