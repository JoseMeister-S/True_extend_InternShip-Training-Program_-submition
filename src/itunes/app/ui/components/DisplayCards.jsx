import Image from "next/image";
export default function DisplayCards({ media }) {
  return (
    <ul className="grid grid-cols-4 grid-rows-10 gap-4">
      {media.map((res) => (
        <li className="border border-gray-300 p-4 rounded-md" key={res.trackId}>
          <h2 className="font-sans">{res.trackName}</h2>
          <p className="font-sans">{res.artistName}</p>
          <div className="flex justify-center items-center">
            <Image
              src={res.artworkUrl100}
              alt={res.trackId}
              width={100}
              height={100}
              className="rounded-md"
            />
          </div>
          <p className="font-sans">{res.trackPrice}</p>
        </li>
      ))}
    </ul>
  );
}