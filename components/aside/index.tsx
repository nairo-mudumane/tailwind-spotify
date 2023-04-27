import Image from "next/image";
import MainNav from "./main-nav";
import UserOptions from "./user-options";

export function Aside() {
  return (
    <aside className="p-6">
      <div className="mt-2 mb-8">
        <a href="/">
          <Image width={140} height={140} src="/spotify-logo.svg" alt="logo" />
        </a>
      </div>

      <MainNav />

      <UserOptions />

      <div className="bg-zinc-700 w-full h-[1px]" />
    </aside>
  );
}
