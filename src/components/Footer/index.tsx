import {
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

export function Footer() {
  return (
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
  )
}
