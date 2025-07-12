const BACKEND_URL = process.env.NEST_API_URL;


export async function POST(req: Request) {
  const body = await req.formData();
  const response = await fetch(`${BACKEND_URL}/products`, {
    method: "POST",
    body: body,
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function GET() {
  const response = await fetch(`${BACKEND_URL}/products`)
  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}
