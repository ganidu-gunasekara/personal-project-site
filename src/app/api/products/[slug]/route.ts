import { NextRequest } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_NEST_API_URL;

export async function GET(req: NextRequest, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;

  const response = await fetch(`${BACKEND_URL}/products/${slug}`);
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PATCH(req: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;

  const body = await req.formData();
  const response = await fetch(`${BACKEND_URL}/products/${slug}`, {
    method: "PATCH",
    body,
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}
