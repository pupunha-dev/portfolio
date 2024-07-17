import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col p-2 bg-slate-950 text-white min-h-screen">
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/172621246?v=4" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Link href="/git-github">Git & Github Notes</Link>
      <Link href="/git-github">Javascript</Link>
    </main>
  );
}
