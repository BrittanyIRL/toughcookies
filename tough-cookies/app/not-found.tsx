import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h2 className="mt-12 text-6xl">None of this is real</h2>
      <Link className="my-6 text-4xl" href="/">
        Go home
      </Link>
      <div className="w-96 h-96 bg-contain bg-[url('https://media3.giphy.com/media/lP3U1zCbXNG0rRm97T/giphy.gif?cid=ecf05e47rneplihw4u6ms1e69vo5xdbonbwuiqqfnk7c0rt4&ep=v1_gifs_related&rid=giphy.gif&ct=g')]" />
    </main>
  );
}
