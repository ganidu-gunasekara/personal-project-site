const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

export default function SizeSelector({
  value,
  onChange,
}: {
  value: string[];
  onChange: (val: string[]) => void;
}) {
  const toggleSize = (size: string) => {
    if (value.includes(size)) {
      onChange(value.filter((s) => s !== size));
    } else {
      onChange([...value, size]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {SIZES.map((size) => (
        <button
          key={size}
          type="button"
          onClick={() => toggleSize(size)}
          className={`
            px-3 py-1 rounded-full border text-sm
            ${value.includes(size)
              ? "bg-black text-white border-black"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}
          `}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
