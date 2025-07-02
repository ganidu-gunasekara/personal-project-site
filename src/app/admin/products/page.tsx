// /admin/products/page.tsx

import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ProductTable from "@/components/admin/ProductTable";

export default function ProductListPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-sm text-muted-foreground">
            View, manage, and edit your product inventory.
          </p>
        </div>
        <Link href="/admin/products/new">
          <Button variant="default" className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Product
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Product List</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <ProductTable />
        </CardContent>
      </Card>
    </div>
  );
}
