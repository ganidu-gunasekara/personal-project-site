"use client";

import { useRef } from "react";

interface Props {
  value: string;
  onUpload: (url: string) => void;
}

export default function ImageUploader({ value, onUpload }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_preset"); // Replace with your Cloudinary preset

    const res = await fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    onUpload(data.secure_url);
  };

  return (
    <div>
      {value && <img src={value} alt="preview" className="h-24 mb-2" />}
      <input type="file" ref={inputRef} onChange={handleUpload} />
    </div>
  );
}
