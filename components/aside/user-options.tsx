import Image from "next/image";

export default function UserOptions() {
  return (
    <div className="mt-12 my-5">
      <nav className="text-zinc-300 flex flex-col gap-4">
        <a href="#" className="flex gap-6 items-center hover:text-white">
          <Image
            alt="home icon"
            src="/icons/plus-outlined.svg"
            width={30}
            height={30}
          />

          <span>Create Playlist</span>
        </a>

        <a href="#" className="flex gap-6 items-center hover:text-white">
          <Image alt="home icon" src="/icons/love.svg" width={30} height={30} />

          <span>Liked Songs</span>
        </a>

        <a href="#" className="flex gap-6 items-center hover:text-white">
          <Image
            alt="home icon"
            src="/icons/bookmark.svg"
            width={30}
            height={30}
          />

          <span>Your Episodes</span>
        </a>
      </nav>
    </div>
  );
}
