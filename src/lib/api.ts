export async function getAllProducts() {
  const res = await fetch("/api/products");
  return res.json();
}

export async function getProductBySlug(slug:string) {
  const res = await fetch(`/api/products/${slug}`)
  if (!res.ok) {
    const errorBody = await res.json(); 
    throw new Error(errorBody.message || "Unknown server error");
  }
  return res.json();
}

export async function getProductById(id: string) {
  const res = await fetch(`/api/products/id/${id}`);

  if (!res.ok) {
    const errorBody = await res.json();
    throw new Error(errorBody.message || "Unknown server error");
  }

  return res.json();
}

export async function createProduct(data: FormData) {
  const res = await fetch("/api/products", {
    method: "POST",
    body: data,
  });

  if (!res.ok) {
    const errorBody = await res.json();
    throw new Error(errorBody.message || "Unknown server error");
  }

  return res.json();
}

export async function updateProduct(slug: string, data: FormData) {
  const res = await fetch(`/api/products/${slug}`, {
    method: "PATCH",
    body: data,
  });
  return res.json();
}

export async function deleteProduct(id: string) {
  await fetch(`/api/products/${id}`, { method: "DELETE" });
}
