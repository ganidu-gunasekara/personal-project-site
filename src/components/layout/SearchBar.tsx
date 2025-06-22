import { FaSearch } from "react-icons/fa"; // search icon

export default function SearchBar() {
  return (
    <div className="flex items-center bg-gray-100 py-2 rounded-md w-full max-w-md">
      <FaSearch className="text-gray-500 mr-3" />
      <input
        type="text"
        placeholder="Search for a Product"
        className="bg-transparent focus:outline-none text-sm text-gray-800 w-full"
      />
    </div>
  );
}
