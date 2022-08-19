import people from "./dataset"
import {employee} from "./dataset"

const mutation = {
    addEmployee: async (_:any, args:any) => {
        console.log('calling');
        const employeeDetail = { empId: parseInt(`${people.length+1}`), name:args.name, date_of_birth:args.date_of_birth, age:args.age,gender: args.gender,address:args.address,sallery:args.sallery,department:args.department,profile:args.profile}
        console.log('employee',employeeDetail)
        people.push(employeeDetail)
        return {
            data: employeeDetail,
            ok: true,
            error: ''
        };
    },

    // updateBook: async ({ id, title, author, description }, context) => {
    //     const book = books.find(book => book.id === id);
    //     if (!book) {
    //         return {
    //             data: null,
    //             ok: false,
    //             error: 'Book not found'
    //         };
    //     }

    //     if (author) book.author = author
    //     if (title) book.title = title
    //     if (description) book.description = description
    //     books = books.map(b => b.id === id ? book : b)
    //     return {
    //         data: book,
    //         ok: true,
    //         error: ''
    //     };
    // },

    // deleteBook: async ({ id }, context) => {
    //     const book = books.find(book => book.id === id)
    //     if (!book) {
    //         return {
    //             data: null,
    //             ok: false,
    //             error: 'Book not found'
    //         };
    //     }

    //     books = books.filter(book => book.id !== id)
    //     return {
    //         data: book,
    //         ok: true,
    //         error: ''
    //     };
    // }
}


export default mutation