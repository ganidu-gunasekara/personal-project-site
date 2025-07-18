const BACKEND_URL = process.env.NEXT_PUBLIC_NEST_API_URL;


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

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.toString();

  const response = await fetch(`${BACKEND_URL}/products${query ? `?${query}` : ''}`);
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: { 'Content-Type': 'application/json' },
  });
}
