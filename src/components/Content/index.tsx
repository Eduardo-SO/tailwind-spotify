import Image from 'next/image'
import { PlayIcon } from 'lucide-react'
import PlaylistCard from '../PlaylistCard'

export function Content() {
  return (
    <div
      id="main-content"
      className="mt-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-thumb-rounded-full pb-6 pr-4"
    >
      <text className="text-3xl font-bold mb-6 block">Good Night</text>

      <div className="grid grid-cols-3 gap-5 font-semibold">
        <div className="group pr-4 flex items-center gap-5 bg-white/5 hover:bg-white/20 h-20 rounded-md overflow-hidden">
          <Image
            alt="Album image"
            src="/assets/mix-daily-5.jpg"
            width={120}
            height={120}
            className="h-full w-auto"
          />
          <text className="flex-1">Daily Mix 5</text>
          <div className="p-3 bg-green-500 shadow-lg rounded-full  hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
            <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
          </div>
        </div>

        <div className="group pr-4 flex items-center gap-5 bg-white/5 hover:bg-white/20 h-20 rounded-md overflow-hidden">
          <Image
            alt="Album image"
            src="/assets/mix-daily-1.jpg"
            width={120}
            height={120}
            className="h-full w-auto"
          />
          <text className="flex-1">Daily Mix 1</text>
          <div className="p-3 bg-green-500 shadow-lg rounded-full  hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
            <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
          </div>
        </div>

        <div className="group pr-4 flex items-center gap-5 bg-white/5 hover:bg-white/20 h-20 rounded-md overflow-hidden">
          <Image
            alt="Album image"
            src="/assets/mix-daily-3.jpg"
            width={120}
            height={120}
            className="h-full w-auto"
          />
          <text className="flex-1">Daily Mix 3</text>
          <div className="p-3 bg-green-500 shadow-lg rounded-full  hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
            <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
          </div>
        </div>

        <div className="group pr-4 flex items-center gap-5 bg-white/5 hover:bg-white/20 h-20 rounded-md overflow-hidden">
          <Image
            alt="Album image"
            src="/assets/liked-songs.png"
            width={120}
            height={120}
            className="h-full w-auto"
          />
          <text className="flex-1">Liked Songs</text>
          <div className="p-3 bg-green-500 shadow-lg rounded-full  hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
            <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
          </div>
        </div>

        <div className="group pr-4 flex items-center gap-5 bg-white/5 hover:bg-white/20 h-20 rounded-md overflow-hidden">
          <Image
            alt="Album image"
            src="/assets/mix-daily-2.jpg"
            width={120}
            height={120}
            className="h-full w-auto"
          />
          <text className="flex-1">Daily Mix 2</text>
          <div className="p-3 bg-green-500 shadow-lg rounded-full  hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
            <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
          </div>
        </div>

        <div className="group pr-4 flex items-center gap-5 bg-white/5 hover:bg-white/20 h-20 rounded-md overflow-hidden">
          <Image
            alt="Album image"
            src="/assets/lp-album.jpg"
            width={120}
            height={120}
            className="h-full w-auto"
          />
          <text className="flex-1">Hybrid Theory</text>
          <div className="p-3 bg-green-500 resize-y shadow-lg rounded-full  hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
            <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
          </div>
        </div>
      </div>

      <text className="text-2xl font-bold mb-6 mt-10 block">
        Made for Eduardo
      </text>

      <div className="grid grid-cols-7 gap-5">
        <PlaylistCard
          title="Hybrid Theory"
          description="Skeler, Akiaura, Sidewalks and Skeletons and more"
          imageSrc="/assets/lp-album.jpg"
        />
        <PlaylistCard
          title="2000 Mix"
          description="Skeler, Akiaura, Sidewalks and Skeletons and more"
          imageSrc="/assets/mix-2000.jpg"
        />
        <PlaylistCard
          title="2010 Mix"
          description="Skeler, Akiaura, Sidewalks and Skeletons and more"
          imageSrc="/assets/mix-2010.jpg"
        />
        <PlaylistCard
          title="Emrod Mix"
          description="Skeler, Akiaura, Sidewalks and Skeletons and more"
          imageSrc="/assets/mix-emrod.jpg"
        />
        <PlaylistCard
          title="Trinity"
          description="Skeler, Akiaura, Sidewalks and Skeletons and more"
          imageSrc="/assets/trinity.jpg"
        />
        <PlaylistCard
          title="Liked Songs"
          description="Skeler, Akiaura, Sidewalks and Skeletons and more"
          imageSrc="/assets/liked-songs.png"
        />
        <PlaylistCard
          title="Daily Mix 3"
          description="Skeler, Akiaura, Sidewalks and Skeletons and more"
          imageSrc="/assets/mix-daily-3.jpg"
        />
      </div>

      <text className="text-2xl font-bold mb-6 mt-10 block">
        Recommended stations
      </text>

      <div className="grid grid-cols-7 gap-5">
        <div className="group p-3 flex flex-col gap-3 bg-white/5 hover:bg-white/20 rounded-md overflow-hidden transition-colors">
          <div className="relative w-full aspect-square ">
            <Image
              alt="Album image"
              src="/assets/mix-daily-1.jpg"
              width={180}
              height={180}
              className="h-full w-auto"
            />
            <div className="p-3 bg-green-500 shadow-lg rounded-full hover:scale-110 transition-all group-hover:-translate-y-3 opacity-0 group-hover:opacity-100 absolute right-3 bottom-0">
              <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
            </div>
          </div>

          <text className="font-semibold">Daily Mix 1</text>
          <p className="text-xs font-semibold text-zinc-400/80">
            Skeler, Akiaura, Sidewalks and Skeletons and more
          </p>
        </div>

        <div className="group p-3 flex flex-col gap-3 bg-white/5 hover:bg-white/20 rounded-md overflow-hidden transition-colors">
          <div className="relative w-full aspect-square ">
            <Image
              alt="Album image"
              src="/assets/mix-daily-2.jpg"
              width={180}
              height={180}
              className="h-full w-auto"
            />
            <div className="p-3 bg-green-500 shadow-lg rounded-full hover:scale-110 transition-all group-hover:-translate-y-3 opacity-0 group-hover:opacity-100 absolute right-3 bottom-0">
              <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
            </div>
          </div>

          <text className="font-semibold">Daily Mix 2</text>
          <p className="text-xs font-semibold text-zinc-400/80">
            Skeler, Akiaura, Sidewalks and Skeletons and more
          </p>
        </div>

        <div className="group p-3 flex flex-col gap-3 bg-white/5 hover:bg-white/20 rounded-md overflow-hidden transition-colors">
          <div className="relative w-full aspect-square ">
            <Image
              alt="Album image"
              src="/assets/mix-daily-3.jpg"
              width={180}
              height={180}
              className="h-full w-auto"
            />
            <div className="p-3 bg-green-500 shadow-lg rounded-full hover:scale-110 transition-all group-hover:-translate-y-3 opacity-0 group-hover:opacity-100 absolute right-3 bottom-0">
              <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
            </div>
          </div>

          <text className="font-semibold">Daily Mix 3</text>
          <p className="text-xs font-semibold text-zinc-400/80">
            Skeler, Akiaura, Sidewalks and Skeletons and more
          </p>
        </div>

        <div className="group p-3 flex flex-col gap-3 bg-white/5 hover:bg-white/20 rounded-md overflow-hidden transition-colors">
          <div className="relative w-full aspect-square ">
            <Image
              alt="Album image"
              src="/assets/mix-daily-4.jpg"
              width={180}
              height={180}
              className="h-full w-auto"
            />
            <div className="p-3 bg-green-500 shadow-lg rounded-full hover:scale-110 transition-all group-hover:-translate-y-3 opacity-0 group-hover:opacity-100 absolute right-3 bottom-0">
              <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
            </div>
          </div>

          <text className="font-semibold">Daily Mix 4</text>
          <p className="text-xs font-semibold text-zinc-400/80">
            Skeler, Akiaura, Sidewalks and Skeletons and more
          </p>
        </div>

        <div className="group p-3 flex flex-col gap-3 bg-white/5 hover:bg-white/20 rounded-md overflow-hidden transition-colors">
          <div className="relative w-full aspect-square ">
            <Image
              alt="Album image"
              src="/assets/mix-daily-5.jpg"
              width={180}
              height={180}
              className="h-full w-auto"
            />
            <div className="p-3 bg-green-500 shadow-lg rounded-full hover:scale-110 transition-all group-hover:-translate-y-3 opacity-0 group-hover:opacity-100 absolute right-3 bottom-0">
              <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
            </div>
          </div>

          <text className="font-semibold">Daily Mix 5</text>
          <p className="text-xs font-semibold text-zinc-400/80">
            Skeler, Akiaura, Sidewalks and Skeletons and more
          </p>
        </div>

        <div className="group p-3 flex flex-col gap-3 bg-white/5 hover:bg-white/20 rounded-md overflow-hidden transition-colors">
          <div className="relative w-full aspect-square ">
            <Image
              alt="Album image"
              src="/assets/mix-daily-6.jpg"
              width={180}
              height={180}
              className="h-full w-auto"
            />
            <div className="p-3 bg-green-500 shadow-lg rounded-full hover:scale-110 transition-all group-hover:-translate-y-3 opacity-0 group-hover:opacity-100 absolute right-3 bottom-0">
              <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
            </div>
          </div>

          <text className="font-semibold">Daily Mix 6</text>
          <p className="text-xs font-semibold text-zinc-400/80">
            Skeler, Akiaura, Sidewalks and Skeletons and more
          </p>
        </div>

        <div className="group p-3 flex flex-col gap-3 bg-white/5 hover:bg-white/20 rounded-md overflow-hidden transition-colors">
          <div className="relative w-full aspect-square ">
            <Image
              alt="Album image"
              src="/assets/mix-rock.jpg"
              width={180}
              height={180}
              className="h-full w-auto"
            />
            <div className="p-3 bg-green-500 shadow-lg rounded-full hover:scale-110 transition-all group-hover:-translate-y-3 opacity-0 group-hover:opacity-100 absolute right-3 bottom-0">
              <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
            </div>
          </div>

          <text className="font-semibold">Rock Mix</text>
          <p className="text-xs font-semibold text-zinc-400/80">
            Skeler, Akiaura, Sidewalks and Skeletons and more
          </p>
        </div>
      </div>
    </div>
  )
}
