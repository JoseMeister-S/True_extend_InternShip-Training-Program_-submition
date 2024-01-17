"use client";
import { useState, useEffect } from "react";
import DisplayCards from "./ui/components/DisplayCards";
export default function Home() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      const response = await fetch("/scripts");
      console.log(response);
      const media = await response.json();
      setMedia(media.results);
    };
    getMedia();
  }, []);
  return (
    <main className="text-center">
      <h1 className="font-sans">Itunes</h1>
      <DisplayCards media={media} />
    </main>
  );
}
