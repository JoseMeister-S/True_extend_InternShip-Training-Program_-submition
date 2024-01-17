import { NextResponse } from "next/server";

async function fetchMedia(){
    const response = await fetch('https://itunes.apple.com/search?term=jack+johnson&limit=25',
    {"method": "GET"})
    console.log('Response:', response);
    
    const data = await response.json();
    return data;
}

export async function GET(request){
    const media =await fetchMedia();
    return NextResponse.json(media);
}
