import { error } from "console";
import { NextResponse } from "next/server";

async function fetchSearchMedia(searchTerm) {
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        searchTerm
      )}&limit=24`,
      { method: "GET" }
    );

    if (!response.ok) {
      throw new Error(`Network response not ok: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching media:", error);
    throw error;
  }
}

export async function GET(request) {
  try {
    const { query } = request;
    const searchTerm = query?.searchTerm;

    const media = await fetchSearchMedia(searchTerm);
    return NextResponse.json(media);
  } catch (error) {
    console.error("Error in GET function:", error);
    return NextResponse.error(error.message, { status: 500 });
  }
}
