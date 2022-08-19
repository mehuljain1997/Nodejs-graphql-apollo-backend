import people from "./dataset"
import { query } from "./query"
import mutation from "./mutations"
const Resolvers = {
    Query: query,
    Mutation: mutation
    
};
export default Resolvers
