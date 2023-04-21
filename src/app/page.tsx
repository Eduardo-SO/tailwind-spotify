import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  PlayIcon,
  HeartIcon,
  ListMusicIcon,
  MonitorSpeakerIcon,
  Volume2Icon,
  Maximize2Icon,
  ShuffleIcon,
  SkipBackIcon,
  SkipForwardIcon,
  RepeatIcon,
} from 'lucide-react'
import Image from 'next/image'
import Logo from '../../public/assets/Logo'

export default function Home() {
  return (
    <div className="flex flex-col relative">
      <div className="flex h-screen pb-20">
        <aside className="flex flex-col bg-black w-72">
          <div className="flex-1 flex flex-col p-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-thumb-rounded-full">
            <div className="w-1/2">
              <Logo />
            </div>

            <nav className="space-y-4 py-7 text-sm font-semibold text-zinc-400">
              <a href="#" className="flex items-center gap-2 text-zinc-200">
                <HomeIcon />
                Home
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-zinc-200"
              >
                <SearchIcon />
                Search
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-zinc-200"
              >
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

        <main className="flex flex-col w-full pt-6 pb-6 pl-6 bg-gradient-to-b from-green-700/20 via-green-900/5">
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

          <div
            id="main-content"
            className="max-h-[78vh] mt-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-thumb-rounded-full pr-4"
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
              <div className="group p-3 flex flex-col gap-3 bg-white/5 hover:bg-white/20 rounded-md overflow-hidden transition-colors">
                <div className="relative w-full aspect-square ">
                  <Image
                    alt="Album image"
                    src="/assets/lp-album.jpg"
                    width={180}
                    height={180}
                    className="h-full w-auto"
                  />
                  <div className="p-3 bg-green-500 shadow-lg rounded-full hover:scale-110 transition-all group-hover:-translate-y-3 opacity-0 group-hover:opacity-100 absolute right-3 bottom-0">
                    <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
                  </div>
                </div>

                <text className="font-semibold">Hybrid Theory</text>
                <p className="text-xs font-semibold text-zinc-400/80">
                  Skeler, Akiaura, Sidewalks and Skeletons and more
                </p>
              </div>

              <div className="group p-3 flex flex-col gap-3 bg-white/5 hover:bg-white/20 rounded-md overflow-hidden transition-colors">
                <div className="relative w-full aspect-square ">
                  <Image
                    alt="Album image"
                    src="/assets/mix-2000.jpg"
                    width={180}
                    height={180}
                    className="h-full w-auto"
                  />
                  <div className="p-3 bg-green-500 shadow-lg rounded-full hover:scale-110 transition-all group-hover:-translate-y-3 opacity-0 group-hover:opacity-100 absolute right-3 bottom-0">
                    <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
                  </div>
                </div>

                <text className="font-semibold">2000 Mix</text>
                <p className="text-xs font-semibold text-zinc-400/80">
                  Skeler, Akiaura, Sidewalks and Skeletons and more
                </p>
              </div>

              <div className="group p-3 flex flex-col gap-3 bg-white/5 hover:bg-white/20 rounded-md overflow-hidden transition-colors">
                <div className="relative w-full aspect-square ">
                  <Image
                    alt="Album image"
                    src="/assets/mix-2010.jpg"
                    width={180}
                    height={180}
                    className="h-full w-auto"
                  />
                  <div className="p-3 bg-green-500 shadow-lg rounded-full hover:scale-110 transition-all group-hover:-translate-y-3 opacity-0 group-hover:opacity-100 absolute right-3 bottom-0">
                    <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
                  </div>
                </div>

                <text className="font-semibold">2010 Mix</text>
                <p className="text-xs font-semibold text-zinc-400/80">
                  Skeler, Akiaura, Sidewalks and Skeletons and more
                </p>
              </div>

              <div className="group p-3 flex flex-col gap-3 bg-white/5 hover:bg-white/20 rounded-md overflow-hidden transition-colors">
                <div className="relative w-full aspect-square ">
                  <Image
                    alt="Album image"
                    src="/assets/mix-emrod.jpg"
                    width={180}
                    height={180}
                    className="h-full w-auto"
                  />
                  <div className="p-3 bg-green-500 shadow-lg rounded-full hover:scale-110 transition-all group-hover:-translate-y-3 opacity-0 group-hover:opacity-100 absolute right-3 bottom-0">
                    <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
                  </div>
                </div>

                <text className="font-semibold">Emrod Mix</text>
                <p className="text-xs font-semibold text-zinc-400/80">
                  Skeler, Akiaura, Sidewalks and Skeletons and more
                </p>
              </div>

              <div className="group p-3 flex flex-col gap-3 bg-white/5 hover:bg-white/20 rounded-md overflow-hidden transition-colors">
                <div className="relative w-full aspect-square ">
                  <Image
                    alt="Album image"
                    src="/assets/trinity.jpg"
                    width={180}
                    height={180}
                    className="h-full w-auto"
                  />
                  <div className="p-3 bg-green-500 shadow-lg rounded-full hover:scale-110 transition-all group-hover:-translate-y-3 opacity-0 group-hover:opacity-100 absolute right-3 bottom-0">
                    <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
                  </div>
                </div>

                <text className="font-semibold">Trinity</text>
                <p className="text-xs font-semibold text-zinc-400/80">
                  Skeler, Akiaura, Sidewalks and Skeletons and more
                </p>
              </div>

              <div className="group p-3 flex flex-col gap-3 bg-white/5 hover:bg-white/20 rounded-md overflow-hidden transition-colors">
                <div className="relative w-full aspect-square ">
                  <Image
                    alt="Album image"
                    src="/assets/liked-songs.png"
                    width={180}
                    height={180}
                    className="h-full w-auto"
                  />
                  <div className="p-3 bg-green-500 shadow-lg rounded-full hover:scale-110 transition-all group-hover:-translate-y-3 opacity-0 group-hover:opacity-100 absolute right-3 bottom-0">
                    <PlayIcon className="translate-x-[0.10rem] fill-zinc-800 text-zinc-800" />
                  </div>
                </div>

                <text className="font-semibold">Liked Songs</text>
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
        </main>
      </div>

      <footer className="absolute bottom-0 left-0 right-0 h-20 bg-zinc-900 flex items-center justify-between border-t border-zinc-800 px-6 py-3">
        <div id="music" className="flex-1 flex gap-4 items-center">
          <div className="flex flex-col">
            <strong>Charlie</strong>
            <span className="text-zinc-400 text-sm">Paul Sabin</span>
          </div>

          <button>
            <HeartIcon className="text-green-500 fill-green-500 h-5" />
          </button>
        </div>

        <div id="player" className="flex-grow flex flex-col items-center gap-2">
          <div className="flex gap-4">
            <button>
              <ShuffleIcon className="h-5" />
            </button>
            <button>
              <SkipBackIcon className="h-5" />
            </button>
            <button className="rounded-full bg-white p-2">
              <PlayIcon className="h-5 w-5 translate-x-[0.10rem] text-zinc-800 fill-zinc-800" />
            </button>
            <button>
              <SkipForwardIcon className="h-5" />
            </button>
            <button>
              <RepeatIcon className="h-5" />
            </button>
          </div>

          <div className="flex w-full text-zinc-400 items-center gap-4 text-xs">
            <span>0:00</span>
            <div className="w-full h-1 rounded-full bg-zinc-600 inline-block" />
            <span>0:00</span>
          </div>
        </div>

        <div id="controls" className="flex-1 flex justify-end gap-4">
          <button>
            <ListMusicIcon className="h-5" />
          </button>
          <button>
            <MonitorSpeakerIcon className="h-5" />
          </button>
          <button className="flex gap-2 items-center">
            <Volume2Icon className="h-5" />
            <div className="w-20 h-1 rounded-full bg-zinc-600 inline-block" />
          </button>
          <button>
            <Maximize2Icon className="h-5" />
          </button>
        </div>
      </footer>
    </div>
  )
}
