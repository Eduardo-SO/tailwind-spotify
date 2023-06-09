import { PlayIcon } from 'lucide-react'
import Image from 'next/image'

interface PlaylistCardProps {
  title: string
  description: string
  imageSrc: string
}

export default function PlaylistCard({
  title,
  description,
  imageSrc,
}: PlaylistCardProps) {
  return (
    <div className="group p-3 flex flex-col gap-3 flex-none w-1/3 md:w-1/5 lg:w-1/6 xl:w-[13%] bg-white/5 hover:bg-white/20 rounded-md transition-colors">
      <div className="relative aspect-square">
        <Image
          alt="Album image"
          src={imageSrc}
          width={180}
          height={180}
          className="w-full"
        />
        <div className="p-3 bg-green-500 shadow-lg rounded-full hover:scale-110 transition-all group-hover:-translate-y-3 opacity-0 group-hover:opacity-100 absolute right-3 bottom-0">
          <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
        </div>
      </div>

      <text className="font-semibold">{title}</text>
      <p className="text-xs font-semibold text-zinc-400/80">{description}</p>
    </div>
  )
}
