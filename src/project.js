export const project = function(data){
    return{
        projectName: data.projectName,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        priority: data.priority,
        tasks: [],
    }
}