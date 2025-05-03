

export const task = function(data){
    return {
        name: data.taskName,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        priority: data.priority,
    }
}