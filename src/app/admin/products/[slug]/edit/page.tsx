"use client";

import ProductForm from "@/components/admin/ProductForm";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProductBySlug } from "@/lib/api";
import { use, useEffect, useState } from "react";

interface EditPageProps {
  params:  Promise<{ slug: string }>;
}
export default function EditProductPage({ params }: EditPageProps) {
  const { slug } = use(params); 
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductBySlug(slug);
        setProduct(data);
      } catch (err: any) {
        setError(err.message || "Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) return <div>Loading product...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;


  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Edit Product</CardTitle>
          <p className="text-sm text-muted-foreground">Modify existing product information.</p>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <ProductForm mode="edit" product={product}/>
        </CardContent>
      </Card>
    </div>
  );
}