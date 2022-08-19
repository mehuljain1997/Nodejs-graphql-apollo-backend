import people from "./dataset"
export const query ={
    getEmployees: () => people,
    getEmployee: (_:any, args:any)=> {
        return people.find((person)=> person.empId === args.empId)
    }
}