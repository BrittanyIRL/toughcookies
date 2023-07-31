import Link from "next/link";

// const volumeOne: { [k: number]: string } = {
//   1: "one",
//   2: "two",
//   3: "three",
// };

// const volumes = {
//   one: volumeOne,
// };

export default function Volume({ params }: { params: { slug?: string } }) {
  return (
    <main className="flex flex-col items-center">
      <Link className="my-6 text-4xl text-[#0b85db] bg-[#3ec9b0] px-2" href="/">
        Go away, still cooking.
      </Link>
      <div className="m-8 max-w-screen-md min-w-screen-sm">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tJa0c8h7yVE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <p className="lg:py-4 mt-12 text-3xl">Like come back soon, ya know</p>
    </main>
  );

  // if (!params.slug) {
  //   return <p>nah</p>;
  // }
  // // @ts-expect-error fix this later
  // const requestedVolume = params.slug && volumes?.[params.slug];

  // if (!requestedVolume) {
  //   return <p>nope</p>;
  // }

  // const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = Object.keys(requestedVolume).length;

  // const onForward = () => {
  //   setCurrentPage((prev) => prev + 1);
  // };

  // const onBackward = () => {
  //   setCurrentPage((prev) => prev - 1);
  // };

  // return (
  //   <main className="flex min-h-screen flex-col items-center justify-between">
  //     <>
  //       {totalPages}
  //       {requestedVolume?.[currentPage]}
  //       <Pagination
  //         onForward={onForward}
  //         onBackward={onBackward}
  //         currentPage={currentPage}
  //         totalPages={totalPages}
  //       />
  //     </>
  //   </main>
  // );
}
