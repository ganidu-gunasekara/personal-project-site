import ProductForm from "@/components/admin/ProductForm";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface EditPageProps {
  params: { productId: string };
}

export default function EditProductPage({ params }: EditPageProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Edit Product</CardTitle>
          <p className="text-sm text-muted-foreground">Modify existing product information.</p>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <ProductForm mode="edit" productId={params.productId} />
        </CardContent>
      </Card>
    </div>
  );
}
