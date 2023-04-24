import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export function Header() {
  return (
    <div className="flex items-center justify-between pr-6">
      <div className="flex space-x-4">
        <button className="p-2 rounded-full bg-black/80 hover:bg-black/50">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full bg-black/80 hover:bg-black/50">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <button className="flex items-center space-x-2 rounded-full bg-zinc-900 p-1">
        <Image
          src="https://github.com/Eduardo-SO.png"
          alt="Avatar"
          height={30}
          width={30}
          className="rounded-full object-cover h-full"
        />

        <div className="font-semibold">Eduardo</div>

        <ChevronDown className="w-5" />
      </button>
    </div>
  )
}
