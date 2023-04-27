import Image from "next/image";

export default function MainNav() {
  return (
    <nav className="text-zinc-300 my-8 flex flex-col gap-4">
      <a href="#" className="flex gap-6 items-center hover:text-white">
        <Image alt="home icon" src="/icons/home.svg" width={30} height={30} />

        <span>Home</span>
      </a>

      <a href="#" className="flex gap-6 items-center hover:text-white">
        <Image alt="home icon" src="/icons/search.svg" width={30} height={30} />

        <span>Search</span>
      </a>

      <a href="#" className="flex gap-6 items-center hover:text-white">
        <Image
          alt="home icon"
          src="/icons/library.svg"
          width={30}
          height={30}
        />

        <span>Your Library</span>
      </a>
    </nav>
  );
}
