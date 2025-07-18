export async function getAllProducts(params?: Record<string, any>) {
  const query = new URLSearchParams();

  if (params) {
    for (const key in params) {
      const value = params[key];

      if (key === "size") {
        const sizes = Array.isArray(value) ? value : [value];

        if (sizes.length === 1) {
          query.append("size", String(sizes[0]));
          query.append("size", String(sizes[0]));
        } else {
          sizes.forEach((v) => query.append("size", String(v)));
        }

        continue;
      }
      if (Array.isArray(value)) {
        value.forEach((v) => query.append(key, String(v)));
      } else if (value !== undefined && value !== null) {
        query.append(key, String(value));
      }
    }
  }

  const queryString = query.toString();
  const url = `/api/products${queryString ? `?${queryString}` : ''}`;

  const res = await fetch(url);
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
