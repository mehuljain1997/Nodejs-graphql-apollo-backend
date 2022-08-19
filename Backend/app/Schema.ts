import { gql } from "apollo-server-express"
const Schema =  gql`
    input Address {
        city: String, state: String, pinCode: Int 
    }
    type AddressDetail {
        city: String, state: String, pinCode: Int 
    }
    type Employee {
        empId: ID!
        name: String
        date_of_birth: String
        age: Int
        gender: String
        address: AddressDetail
        sallery: Int
        department: String
        profile: String
    }
    type Query {
        getEmployees: [Employee]
        getEmployee(empId: Int): Employee
    }
    type Mutation {
        addEmployee(name: String!, date_of_birth: String!, age: Int!,gender: String!, address: Address!, sallery: Int!, department: String!,profile: String!): EmployeeResponse
        deleteBook(empId: ID!): EmployeeResponse
    }
    type EmployeeResponse {
        data: Employee
        error: String
        ok: Boolean
    }


`;
export default Schema