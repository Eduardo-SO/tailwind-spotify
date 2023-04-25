import { PlayIcon } from 'lucide-react'
import Image from 'next/image'

interface MixCardProps {
  title: string
  imageSrc: string
}

export default function MixCard({ title, imageSrc }: MixCardProps) {
  return (
    <div className="group pr-4 flex items-center gap-5 bg-white/5 hover:bg-white/20 h-20 rounded-md overflow-hidden">
      <Image
        alt="Album image"
        src={imageSrc}
        width={120}
        height={120}
        className="h-full w-auto"
      />
      <text className="flex-1">{title}</text>
      <div className="p-3 bg-green-500 resize-y shadow-lg rounded-full  hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
        <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
      </div>
    </div>
  )
}
