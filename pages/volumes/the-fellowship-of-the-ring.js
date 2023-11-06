import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
import pic from "../../public/images/the-fellowship-of-the-ring.png";
export default function theFellowshipOfTheRing(arr) {
  // console.log(volumes)
  const found = volumes.find(
    (volume) => volume.slug === "the-fellowship-of-the-ring"
  );
  console.log(found.description);
  return (
    <>
      <Link href="/volumes">Link to volumes</Link>
      <h1>{found.title}</h1>
          <p>{found.description}</p>
          <ul >
              {found.books.map(book => {
                  return (
                      <li key={book.ordinal}>{book.ordinal}, { book.title}</li>
                  )
              })}
          </ul>
          <Image
              src={pic}
              alt="cover"
              height={230}
          />
    </>
    // <p>{ volumes[0].slug}</p>
  );
}
