export type Employee = {
    id: number;
    name: string;
    position: string;
    email: string;
}

let employees: Employee[] = [
    {
        id: 1,
        name: "Kristian Selnæs",
        position: "Utvikler",
        email: "kristian.selnaes@kantega.no"
    },
    {
        id: 2,
        name: "Ola Nordmann",
        position: "Designer",
        email: "ola.nordmann@kantega.no"
    }
];

export const getAll = () => employees;

export const getById = (id: number) => employees.find(a => a.id === id);

export const add = (ansatt: Omit<Employee, "id">) => {
    const newAnsatt = {
        id: employees.length + 1,
        ...ansatt
    };
    employees.push(newAnsatt);
    return newAnsatt;
};

export const remove = (id: number) => {
    const index = employees.findIndex(a => a.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        return true;
    }
    return false;
};
