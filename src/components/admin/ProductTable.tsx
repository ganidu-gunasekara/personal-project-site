"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Trash, Pencil } from "lucide-react";
import { getAllProducts, deleteProduct } from "@/lib/api";
import Image from "next/image";


export default function ProductTable() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data.items)
    });
  }, []);

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-4">
      <table className="w-full text-left border border-zinc-200">
        <thead>
          <tr className="bg-zinc-100 text-sm uppercase">
            <th className="p-2">Image</th>
            <th className="p-2">Name</th>
            <th className="p-2">Price</th>
            <th className="p-2">Category</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t">
              <td className="p-2">
                <Image
                  src={product.mainImageUrl}
                  alt={product.name}
                  width={100}
                  height={100}
                />
              </td>
              <td className="p-2">{product.name}</td>
              <td className="p-2"> LKR {product.price}</td>
              <td className="p-2">{product.category}</td>
              <td className="p-2">
                {product.status == "active" ? "Active" : "Inactive"}
              </td>
              <td className="p-2 space-x-2">
                <Link href={`/admin/products/${product.slug}/edit`}>
                  <Button variant="outline" size="sm">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(product.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
