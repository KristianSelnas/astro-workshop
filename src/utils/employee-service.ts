import type { Employee } from "../pages/api/ansatte/_db";

const baseUrl = 'http://localhost:4321/api';

export const fetchEmployees: () => Promise<Employee[]> = async () => {
    const response = await fetch(`${baseUrl}/ansatte`);
    if (!response.ok) {
        throw new Error('Failed to fetch employees');
    }
    return response.json();
}

export const fetchEmployeeById: (id: number) => Promise<Employee> = async (id: number) => {
    const response = await fetch(`${baseUrl}/ansatte/${id}`);
    if (!response.ok) {
        throw new Error('Employee not found');
    }
    return response.json();
}

export const addEmployee: (employee: Omit<Employee, 'id'>) => Promise<Employee> = async (employee: Omit<Employee, 'id'>) => {
    const response = await fetch(`${baseUrl}/ansatte`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    });
    if (!response.ok) {
        throw new Error('Failed to add employee');
    }
    return response.json();
}

export const deleteEmployee: (id: number) => Promise<boolean> = async (id: number) => {
    const response = await fetch(`${baseUrl}/ansatte/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete employee');
    }
    return true;
}