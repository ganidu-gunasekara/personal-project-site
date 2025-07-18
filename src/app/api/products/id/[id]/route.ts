import { NextRequest } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_NEST_API_URL;

export async function GET(req: NextRequest, {params} : {params : {id : string}}) {

    const res = await fetch (`${BACKEND_URL}/products/id/${params.id}`, {cache : "no-store"})
    const data = await res.json();

    return new Response(JSON.stringify(data),{
        status : res.status,
        headers: { "Content-Type": "application/json" },
    })
}