// components/MainImageUploader.tsx
'use client'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'

type MainImageUploaderProps = {
    value: File | string | null
    onChange: (file: File | null) => void
}

export default function MainImageUploader({ value, onChange }: MainImageUploaderProps) {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0]
        if (file) onChange(file)
    }, [onChange])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        multiple: false,
    })

    console.log(value)
    return (
        <div className="space-y-2">
            <div
                {...getRootProps()}
                className="border-2 border-dashed border-gray-300 p-6 text-center rounded-md cursor-pointer"
            >
                <input {...getInputProps({ id: 'mainImage' })} />
                {value ? (
                    <Image
                        src={typeof value === 'string' ? value : URL.createObjectURL(value)}
                        alt="Main image preview"
                        width={300}
                        height={300}
                        className="mx-auto rounded-md object-cover aspect-square"
                    />
                ) : (
                    <p className="text-gray-500">
                        {isDragActive ? 'Drop the file here...' : 'Drag & drop or click to upload main image'}
                    </p>
                )}
            </div>

            {value && (
                <button
                    type="button"
                    onClick={() => onChange(null)}
                    className="text-sm text-red-500 hover:underline"
                >
                    Remove Image
                </button>
            )}
        </div>
    )
}
