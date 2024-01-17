import Image from "next/image";
export default function DisplayCards({ media }) {
  return (
    <ul className="grid grid-cols-4 grid-rows-10 gap-4">
      {media.map((res) => (
        <li key={res.trackId}>
          <h2>{res.trackName}</h2>
          <p>{res.artistName}</p>
          <Image
            className="flex justify-center items-center"
            src={res.artworkUrl100}
            alt={res.trackId}
            width={100}
            height={100}
          />
          <p>{res.trackPrice}</p>
        </li>
      ))}
    </ul>
  );
}
