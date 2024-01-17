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
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="E.g: Jack Johnson"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
