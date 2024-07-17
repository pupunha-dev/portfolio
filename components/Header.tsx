import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <header className="text-[#fafafa] flex space-x-4 pl-8 py-4">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/172621246?v=4" />
          <AvatarFallback>Pupunha Dev</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-black">PupunhaDev</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/gitnotes" className="hover:text-purple-400 transition duration-100 ease-in">Git & Github Notes</Link>
        <Link href="/jsnotes" className="hover:text-yellow-400 transition duration-100 ease-in">Javascript</Link>
      </div>
    </header>
  )
}