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
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import ColorTagInput from "./ColorTagInput";
import SizeSelector from "./SizeSelector";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  category: z.enum(["men", "women", "unisex"]),
  productNo: z.string().min(1, "Product number is required"),
  fit: z.string().min(1, "Fit is required"),
  composition: z.string().min(1, "Composition is required"),
  price: z.coerce.number().min(0),
  discountPrice: z.coerce.number().optional(),
  colors: z.array(z.string().min(1)).min(1, "At least one color required"),
  sizes: z.array(z.string()).min(1, "At least one size required"),
});

type ProductFormValues = z.infer<typeof formSchema>;

export default function ProductForm({ mode }: { mode: "create" | "edit" }) {
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [additionalImages, setAdditionalImages] = useState<File[]>([]);
  const [tempColor, setTempColor] = useState("#000000");

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "men",
      productNo: "",
      fit: "",
      composition: "",
      price: 0,
      discountPrice: undefined,
      colors: [],
      sizes: [],
    },
  });

  const onSubmit = (values: ProductFormValues) => {
    console.log("Form values:", values);
    console.log("Main image:", mainImage);
    console.log("Additional images:", additionalImages);
  };

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
                    <Input {...field} placeholder="Cotton T-Shirt" />
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
                    <Input type="number" {...field} />
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
                    <Input type="number" {...field} />
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
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="men">Men</SelectItem>
                      <SelectItem value="women">Women</SelectItem>
                      <SelectItem value="unisex">Unisex</SelectItem>
                    </SelectContent>
                  </Select>
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
                  <FormLabel>Colors</FormLabel>
                  <FormControl>
                    <ColorTagInput value={field.value} onChange={field.onChange} />
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
                  <FormLabel>Sizes</FormLabel>
                  <FormControl>
                    <SizeSelector value={field.value} onChange={field.onChange} />
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
              <Label>Main Image</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setMainImage(file);
                }}
                required
              />
              {mainImage && (
                <Image
                  src={URL.createObjectURL(mainImage)}
                  alt="Main preview"
                  width={0}
                  height={0}
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="w-full max-w-60 aspect-square object-cover rounded-md border"
                />

              )}
            </div>

            {/* Additional Images */}
            <div className="space-y-2">
              <Label>Additional Images (4)</Label>
              <Input
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
                required
              />
              {additionalImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {additionalImages.map((file, i) => (
                    <Image
                      key={i}
                      src={URL.createObjectURL(file)}
                      alt={`image-${i}`}
                      width={0}
                      height={0}
                      sizes="(min-width: 768px) 25vw, 50vw"
                      className="w-full h-full aspect-square rounded-md border object-cover"
                    />

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
