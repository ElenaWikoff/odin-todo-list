
export enum TagColor {
    Grey = "#e2e2df",
    Black = "#d2d2cf",
    Red = "#fec5bb",
    Orange = "#fcd2af",
    Yellow = "#fcf5c7",
    Green = "#dbfdd8",
    Blue = "#d7e3fc",
    Purple = "#e5d9f2",
    Pink = "#ffc4d6",
}

export interface Tag {
    id: string,
    name: string,
    color: TagColor,
}