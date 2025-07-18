"use client";

import {
  useForm,
} from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
  FormDescription,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCallback, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import ColorTagInput from "./ColorTagInput";
import SizeSelector from "./SizeSelector";
import { createProduct, updateProduct } from "@/lib/api";
import { toast } from "sonner";
import { fi } from "zod/v4/locales";
import MainImageUploader from "./MainImageUploader";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  category: z.enum(["men", "women", "unisex"]),
  productNo: z.string().min(1, "Product number is required"),
  fit: z.string().min(1, "Fit is required"),
  composition: z.string().min(1, "Composition is required"),
  price: z.coerce
    .number({ invalid_type_error: "Price is required" })
    .min(1, { message: "Price is required" }),
  discountPrice: z
    .union([
      z.coerce.number().refine((val) => !isNaN(val), {
        message: "Discount must be a number",
      }),
      z.literal(undefined),
    ])
    .optional(),
  colors: z.array(z.string().min(1)).min(1, "At least one color required"),
  sizes: z.array(z.string()).min(1, "At least one size required"),
  status: z.enum(["active", "inactive"], {
    required_error: "Status is required",
    invalid_type_error: "Status must be either 'active' or 'inactive'",
  }),
});

type ProductFormValues = z.infer<typeof formSchema>;
type ProductWithImages = ProductFormValues & {
  slug?: string;
  mainImageUrl?: string;
  imageUrls?: string[];
};

type ProductFormProps = {
  mode: "create" | "edit";
  product?: ProductWithImages | null;
};

export default function ProductForm({ mode, product }: ProductFormProps) {
  const keepMainImageUrl = product?.mainImageUrl
  const [mainImage, setMainImage] = useState<File | string | null>(product?.mainImageUrl || null);
  const [additionalImages, setAdditionalImages] = useState<(File | string)[]>(product?.imageUrls || []);

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: product?.name || "",
      description: product?.description || "",
      category: product?.category || "men",
      productNo: product?.productNo || "",
      fit: product?.fit || "",
      composition: product?.composition || "",
      price: product?.price ?? undefined,
      discountPrice: product?.discountPrice ?? undefined,
      colors: product?.colors || [],
      sizes: product?.sizes || [],
      status: product?.status || "active",
    },
  });

  const onSubmit = async (values: ProductFormValues) => {
    if (!mainImage || additionalImages.length !== 4) return;

    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("category", values.category);
    formData.append("productNo", values.productNo);
    formData.append("fit", values.fit);
    formData.append("composition", values.composition);
    formData.append("price", values.price.toString());
    formData.append("status", values.status.toString());
    console.log(values.price)
    if (values.discountPrice !== undefined) {
      formData.append("discountPrice", values.discountPrice.toString());
    }

    values.colors.forEach((color) => formData.append("colors[]", color));
    values.sizes.forEach((size) => formData.append("sizes[]", size));


    additionalImages.forEach((file, index) => {
      if (file instanceof File) {
        formData.append("images", file);
      } else {
        formData.append("keepImageUrls", file)
      }

    });

    if (mainImage instanceof File) {
      formData.append("mainImage", mainImage);
    } else if (mode === "edit" && keepMainImageUrl) {
      formData.append("keepMainImageUrl", keepMainImageUrl);
    }

    try {
      if (mode === "create") {
        const response = await createProduct(formData);
        toast.success("Product created successfully!");
      } else {
        if (product && product.slug) {
          const response = await updateProduct(product?.slug, formData);
          toast.success("Product created successfully!");
        }
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to create product.");
    }

  };

  const handleMainImageChange = useCallback((file: File | null) => {
    setMainImage(file);
  }, []);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-10 pb-10"
      >
        {/* Section: Product Details */}
        <Card>
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Cotton T-Shirt"
                      autoComplete="off" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="productNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="SKU12345" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fit</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Regular, Slim, Oversized..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="composition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Composition</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="100% cotton, etc." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Section: Pricing */}
        <Card>
          <CardHeader>
            <CardTitle>Pricing</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="discountPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discount Price</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormDescription>Optional</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Section: Classification */}
        <Card>
          <CardHeader>
            <CardTitle>Classification</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <span className="text-sm font-medium">Category</span>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger id="category-trigger" >
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="men">Men</SelectItem>
                      <SelectItem value="women">Women</SelectItem>
                      <SelectItem value="unisex">Unisex</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="category" value={field.value} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <span className="text-sm font-medium">Status</span>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="active"> Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="category" value={field.value} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Section: Attributes */}
        <Card>
          <CardHeader>
            <CardTitle>Colors & Sizes</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="colors"
              render={({ field }) => (
                <FormItem>
                  <span className="text-sm font-medium">Colors</span>
                  <FormControl>
                    <div>
                      <ColorTagInput value={field.value} onChange={field.onChange} />
                      <input
                        type="hidden"
                        name="colors"
                        value={field.value.join(",")}
                      />
                    </div>
                  </FormControl>

                  <FormDescription>
                    Enter comma-separated colors or pick one.
                  </FormDescription>

                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="sizes"
              render={({ field }) => (
                <FormItem>
                  <span className="text-sm font-medium">Sizes</span>
                  <FormControl>
                    <div>
                      <SizeSelector value={field.value} onChange={field.onChange} />
                      <input
                        type="hidden"
                        name="sizes"
                        value={field.value.join(",")}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


          </CardContent>
        </Card>

        {/* Section: Images */}
        <Card>
          <CardHeader>
            <CardTitle>Product Images</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Image */}
            <div className="space-y-2">
              <Label htmlFor="mainImage">Main Image</Label>
              <MainImageUploader
                value={mainImage as File | string | null}
                onChange={handleMainImageChange}
              />

            </div>

            {/* Additional Images */}
            <div className="space-y-2">
              <Label htmlFor="additionalImages">Additional Images (4)</Label>
              <Input
                id="additionalImages"
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => {
                  const files = Array.from(e.target.files || []);
                  const remainingSlots = 4 - additionalImages.length;

                  if (remainingSlots <= 0) {
                    console.log("Image limit reached");
                    return;
                  }

                  const filesToAdd = files.slice(0, remainingSlots);
                  setAdditionalImages([...additionalImages, ...filesToAdd]);
                }}
              />
              {additionalImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {additionalImages.map((file, i) => (
                    <div key={i} className="relative w-fit group">
                      <Image
                        key={i}
                        src={typeof file === "string"
                          ? file
                          : URL.createObjectURL(file)
                        }
                        alt={`image-${i}`}
                        width={0}
                        height={0}
                        sizes="(min-width: 768px) 25vw, 50vw"
                        className="w-full h-full aspect-square rounded-md border object-cover"
                      />

                      <button
                        type="button"
                        className="absolute top-1 right-2 bg-white text-black text-lg px-2 rounded-full text-center justify-center"
                        onClick={() => {
                          const items = additionalImages.filter(
                            (_, index) => index !== i
                          )
                          setAdditionalImages(items)
                        }}
                      >
                        &times;
                      </button>
                    </div>


                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Submit */}
        <div className="pt-4">
          <Button
            type="submit"
            disabled={!mainImage || additionalImages.length !== 4}
            className="w-full md:w-auto"
          >
            {mode === "create" ? "Create Product" : "Update Product"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
