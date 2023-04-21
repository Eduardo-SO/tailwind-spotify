import { SearchIcon, HomeIcon, LibraryIcon } from 'lucide-react'
import Image from 'next/image'
import Logo from '../../../public/assets/Logo'

export function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col bg-black w-72">
      <div className="flex-1 flex flex-col p-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-thumb-rounded-full">
        <div className="w-1/2">
          <Logo />
        </div>

        <nav className="space-y-4 py-7 text-sm font-semibold text-zinc-400">
          <a href="#" className="flex items-center gap-2 text-zinc-200">
            <HomeIcon />
            Home
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-zinc-200">
            <SearchIcon />
            Search
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-zinc-200">
            <LibraryIcon />
            Library
          </a>
        </nav>

        <nav className="space-y-1 pt-7 border-t border-zinc-800 text-sm text-zinc-400">
          <a href="#" className="flex gap-2 hover:text-zinc-200">
            The most played 2023
          </a>
          <a href="#" className="flex gap-2 hover:text-zinc-200">
            Black Magic
          </a>
          <a href="#" className="flex gap-2 hover:text-zinc-200">
            Linkin Park
          </a>
          <a href="#" className="flex gap-2 hover:text-zinc-200">
            Skeler
          </a>
          <a href="#" className="flex gap-2 hover:text-zinc-200">
            Slipknot
          </a>
        </nav>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60" />
        <Image
          alt="Album image"
          src="/assets/muse-album.jpg"
          width={700}
          height={700}
          className="h-auto w-full"
        />
      </div>
    </aside>
  )
}
