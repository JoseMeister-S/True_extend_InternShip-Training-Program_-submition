import { error } from "console";
import { NextResponse } from "next/server";

async function fetchMedia() {
  try {
    const response = await fetch(
      "https://itunes.apple.com/search?term=jack+johnson&limit=24",
      { method: "GET" }
    );
    if (!response.ok) {
      throw error(`Network response not ok: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching media:", error);
    throw error;
  }
}

export async function GET(request) {
  const media = await fetchMedia();
  return NextResponse.json(media);
}
