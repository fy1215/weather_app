import { useState } from "react";

function SearchForm({ onSearch }) {
  const [city, setCity] = useState("");

  const handleClick = () => {
    onSearch(city);
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="都市名を入力"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 p-2 border rounded"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        検索
      </button>
    </div>
  );
}

export default SearchForm;
