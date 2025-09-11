import type { APIRoute } from "astro";
import { getAll, add, type Employee } from "./_db";

export const GET: APIRoute = () => {
    return new Response(JSON.stringify(
        getAll()), 
        { 
            status: 200, 
            headers: { "Content-Type": "application/json" } 
        }
    );
}

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json() as Omit<Employee, "id">;
    const newAnsatt = add(body);
    return new Response(JSON.stringify(newAnsatt), { status: 201 });
}