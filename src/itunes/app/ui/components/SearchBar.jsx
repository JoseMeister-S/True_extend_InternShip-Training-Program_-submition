"use client";

import Link from "next/link";
import { useState } from "react";

export default function SearchBar({ getSearchResults }) {
  const [query, setQuery] = useState("");
  const handleSumbit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/script/search?query=${query}`);
    const data = await response.json();
    getSearchResults(data);
  };
  return (
    <div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSumbit}
      >
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="E.g: Jack Johnson"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
