import type { APIRoute } from "astro";
import { getById, remove } from "./_db";

export const GET: APIRoute = ({ params }) => {
    const id = params.id;
    const ansatt = getById(Number(id));
    if (ansatt) {
        return new Response(JSON.stringify(ansatt));
    }
    return new Response(null, { status: 404 });
}

export const DELETE: APIRoute = ({ params }) => {
    const id = params.id;
    if (remove(Number(id))) {
        return new Response(null, { status: 204 });
    }
    return new Response(null, { status: 404 });
}