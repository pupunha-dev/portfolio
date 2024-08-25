import { fontNunito, fontPixel } from "@/assets/fonts";

import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <header className="sm:flex space-x-4 pl-8 py-4 sm:w-4/5 w-full">
      <div className="flex items-center space-x-4 sm:w-1/5 w-full">
        <Link href="/">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/172621246?v=4" />
            <AvatarFallback>Pupunha Dev</AvatarFallback>
          </Avatar>
        </Link>
        <Link href="/">
          <h1 className={`text-2xl font-black ${fontPixel.className}`}>PupunhaDev</h1>
        </Link>
      </div>
      <div className={`sm:flex items-center space-x-7 ${fontPixel.className} sm:w-4/5`}>
        <Link href="/jsnotes" className="hover:text-yellow-400 transition duration-100 ease-in">Javascript</Link>
        <Link href="/gitnotes" className="hover:text-yellow-400 transition duration-100 ease-in">Git & Github Notes</Link>
      </div>
    </header>
  )
}
