// /admin/products/new/page.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ProductForm from "@/components/admin/ProductForm";
import Breadcrumbs from "@/components/admin/Breadcrumbs";

export default function NewProductPage() {
  return (

    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/admin/products" },
            { label: "Add New Product" },
          ]}
        />
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Add New Product
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter product details and upload exactly 5 images (1 main + 4 additional).
        </p>
      </div>

      {/* Form wrapper with subtle styling */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm p-6 space-y-8">
        <ProductForm mode="create" />
      </div>
    </div>
  );
}

