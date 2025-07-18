import { NextRequest } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_NEST_API_URL;

type Params = {
  params: {
    id: string;
  };
};

export async function GET(req: NextRequest, { params }: Params) {
  const res = await fetch(`${BACKEND_URL}/products/id/${params.id}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}
