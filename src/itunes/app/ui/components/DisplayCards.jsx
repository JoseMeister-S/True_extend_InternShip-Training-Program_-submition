import Image from "next/image";
import DefaultImage from "../../public/Default_Image.png";
export default function DisplayCards({ media }) {
  return (
    <ul className="grid grid-cols-4 grid-rows-10 gap-4">
      {media.map((res) => (
        <li
          className="border border-gray-300 rounded-md mx-1 flex flex-col justify-center items-center"
          key={res.trackId}
        >
          <h2 className="font-sans text-3xl ">{res.trackName}</h2>
          <p className="font-sans">{res.artistName}</p>
          <div className="flex justify-center items-center">
            {res.artworkUrl100 ? (
              <Image
                src={res.artworkUrl100}
                alt={res.trackId}
                width={100}
                height={100}
                className="rounded-md"
              />
            ) : (
              <Image
                src={DefaultImage}
                alt="Placeholder"
                width={100}
                height={100}
                className="rounded-md"
              />
            )}
          </div>
          <p className="font-sans">{res.trackPrice}</p>
        </li>
      ))}
    </ul>
  );
}
