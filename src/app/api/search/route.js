import { NextResponse } from "next/server";

async function fetchSearchMedia(query, entity) {
  try {
    let madeLink = "";
    if (entity === "") {
      madeLink = `https://itunes.apple.com/search?term=${query}&limit=25`;
    } else {
      madeLink = `https://itunes.apple.com/search?term=${query}&&entity=${entity}&limit=25`;
    }
    const response = await fetch(madeLink, { method: "GET" });
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
    const searchParams = request.nextUrl.searchParams;
    console.log(searchParams);
    const query = searchParams.get("query");
    const entity = searchParams.get("entity");
    const media = await fetchSearchMedia(query, entity);
    return NextResponse.json(media);
  } catch (error) {
    console.error("Error in GET function:", error);
    return NextResponse.error(error.message, { status: 500 });
  }
}
