"use client";
import { useState } from "react";

export default function SearchBar({ getSearchResults }) {
  const [query, setQuery] = useState("");
  const [mediaType, setMediaType] = useState("");
  const handleSumbit = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      const response = await fetch(
        `/api/search?query=${query}&entity=${mediaType}`
      );
      if (!response.ok) {
        throw new Error(`Network response not ok: ${response.status}`);
      }
      const data = await response.json();
      if (!data) {
        throw new Error("Empty response from the server");
      }
      getSearchResults(data);
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
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
        <select
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={mediaType}
          onChange={(e) => setMediaType(e.target.value)}
        >
          <option value="">All</option>
          <option value="song">Songs</option>
          <option value="ebook">Books</option>
          <option value="album">Album</option>
          <option value="podcast">Podcast</option>
          <option value="musicArtist">Artists</option>
        </select>
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
