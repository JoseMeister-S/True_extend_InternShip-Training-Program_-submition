"use client";
import { useState, useEffect } from "react";
import DisplayCards from "./ui/components/DisplayCards";
import SearchBar from "./ui/components/SearchBar";
import { resourceLimits } from "worker_threads";
export default function Home() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      const response = await fetch("/scripts/display");
      console.log(response);
      const media = await response.json();

      setMedia(media.results);
    };
    getMedia();
  }, []);
  return (
    <main className="text-center mx-auto my-auto">
      <h1 className="font-sans text-xl">Itunes</h1>
      <SearchBar getSearchResults={(results: any) => setMedia(results)} />
      <DisplayCards media={media} />
    </main>
  );
}
