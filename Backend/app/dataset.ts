export interface employee {
  empId: number;
  name: string;
  date_of_birth: string;
  age: number;
  gender: string;
  address: { city: string; state: string; pinCode: number };
  sallery: number;
  department: string;
  profile: string;
}

let people: employee[] = [
  {
    empId: 1,
    name: "Cassie",
    date_of_birth: "15/07/1997",
    age: 25,
    gender: "Male",
    address: { city: "Indore", state: "MP", pinCode: 465110 },
    sallery: 27000,
    department: "Engineering",
    profile: "Full stack developer",
  },
  {
    empId: 2,
    name: "Rue",
    date_of_birth: "12/06/1997",
    age: 24,
    gender: "Female",
    address: { city: "Indore", state: "MP", pinCode: 465101 },
    sallery: 2700,
    department: "Marketing",
    profile: "Management",
  },
];
export default people;
