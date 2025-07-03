export async function getAllProducts() {
  const res = await fetch("/api/products");
  return res.json();
}

export async function getProductById(id: string) {
  const res = await fetch(`/api/products/${id}`);
  return res.json();
}

export async function createProduct(data: FormData) {
  const res = await fetch("/api/products", {
    method: "POST",
    body: data,
  });

  if (!res.ok) {
    const errorBody = await res.json(); // Read the response
    throw new Error(errorBody.message || "Unknown server error");
  }

  return res.json();
}

export async function updateProduct(id: string, data: any) {
  const res = await fetch(`/api/products/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
}

export async function deleteProduct(id: string) {
  await fetch(`/api/products/${id}`, { method: "DELETE" });
}
