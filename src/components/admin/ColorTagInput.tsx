import { useState } from "react";
import { Input } from "@/components/ui/input"; // adjust to your path

export default function ColorTagInput({value, onChange,}: {value: string[]; onChange: (val: string[]) => void;}) {
  const [newColor, setNewColor] = useState("");

  const addColor = () => {
    const color = newColor.trim();
    if (color && !value.includes(color)) {
      onChange([...value, color]);
      setNewColor("");
    }
  };

  const removeColor = (color: string) => {
    onChange(value.filter((c) => c !== color));
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {value.map((color, i) => (
          <div
            key={i}
            className="flex items-center gap-1 px-3 py-1 rounded-full border bg-gray-100 text-sm"
          >
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
            ></span>
            <span>{color}</span>
            <button
              type="button"
              onClick={() => removeColor(color)}
              className="ml-1 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Input and color picker */}
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={/^#([0-9A-F]{3}){1,2}$/i.test(newColor) ? newColor : "#000000"}
          onChange={(e) => setNewColor(e.target.value)}
          className="w-10 h-10 p-0 border rounded"
        />
        <button
          type="button"
          onClick={addColor}
          className="px-3 py-2 border rounded text-sm bg-gray-50 hover:bg-gray-100"
        >
          Add
        </button>
      </div>
    </div>
  );
}
