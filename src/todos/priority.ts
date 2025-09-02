
enum PriorityColor {
    Grey = "#cccccc",
    Yellow = "#fac05e",
    Blue = "#3fa7d6",
    Red = "#ee6352",
}

enum PriorityLevel {
    Low = "Low",
    Medium = "Medium",
    High = "High",
    Urgent = "Urgent",
}

export interface Priority {
    level: PriorityLevel,
    color: PriorityColor,
}

export const LowPriority: Priority = {
    level: PriorityLevel.Low,
    color: PriorityColor.Grey,
} 

export const MediumPriority: Priority = {
    level: PriorityLevel.Medium,
    color: PriorityColor.Blue,
} 

export const HighPriority: Priority = {
    level: PriorityLevel.High,
    color: PriorityColor.Yellow,
} 

export const UrgentPriority: Priority = {
    level: PriorityLevel.Urgent,
    color: PriorityColor.Red,
} 