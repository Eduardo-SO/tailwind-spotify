import PlaylistCard from '../PlaylistCard'
import MixCard from '../MixCard'

const mixes = [
  {
    title: 'Daily Mix 5',
    imageSrc: '/assets/mix-daily-5.jpg',
  },
  {
    title: 'Daily Mix 1',
    imageSrc: '/assets/mix-daily-1.jpg',
  },
  {
    title: 'Daily Mix 3',
    imageSrc: '/assets/mix-daily-3.jpg',
  },
  {
    title: 'Liked Songs',
    imageSrc: '/assets/liked-songs.png',
  },
  {
    title: 'Daily Mix 2',
    imageSrc: '/assets/mix-daily-2.jpg',
  },
  {
    title: 'Hybrid Theory',
    imageSrc: '/assets/lp-album.jpg',
  },
]

const customPlaylists = [
  {
    title: 'Hybrid Theory',
    description: 'Skeler, Akiaura, Sidewalks and Skeletons and more',
    imageSrc: '/assets/lp-album.jpg',
  },
  {
    title: '2000 Mix',
    description: 'Skeler, Akiaura, Sidewalks and Skeletons and more',
    imageSrc: '/assets/mix-2000.jpg',
  },
  {
    title: '2010 Mix',
    description: 'Skeler, Akiaura, Sidewalks and Skeletons and more',
    imageSrc: '/assets/mix-2010.jpg',
  },
  {
    title: 'Emrod Mix',
    description: 'Skeler, Akiaura, Sidewalks and Skeletons and more',
    imageSrc: '/assets/mix-emrod.jpg',
  },
  {
    title: 'Trinity',
    description: 'Skeler, Akiaura, Sidewalks and Skeletons and more',
    imageSrc: '/assets/trinity.jpg',
  },
  {
    title: 'Liked Songs',
    description: 'Skeler, Akiaura, Sidewalks and Skeletons and more',
    imageSrc: '/assets/liked-songs.png',
  },
  {
    title: 'Daily Mix 3',
    description: 'Skeler, Akiaura, Sidewalks and Skeletons and more',
    imageSrc: '/assets/mix-daily-3.jpg',
  },
]

const recommendedStations = [
  {
    title: 'Daily Mix 1',
    description: 'Skeler, Akiaura, Sidewalks and Skeletons and more',
    imageSrc: '/assets/mix-daily-1.jpg',
  },
  {
    title: 'Daily Mix 2',
    description: 'Skeler, Akiaura, Sidewalks and Skeletons and more',
    imageSrc: '/assets/mix-daily-2.jpg',
  },
  {
    title: 'Daily Mix 3',
    description: 'Skeler, Akiaura, Sidewalks and Skeletons and more',
    imageSrc: '/assets/mix-daily-3.jpg',
  },
  {
    title: 'Daily Mix 4',
    description: 'Skeler, Akiaura, Sidewalks and Skeletons and more',
    imageSrc: '/assets/mix-daily-4.jpg',
  },
  {
    title: 'Daily Mix 5',
    description: 'Skeler, Akiaura, Sidewalks and Skeletons and more',
    imageSrc: '/assets/mix-daily-5.jpg',
  },
  {
    title: 'Daily Mix 6',
    description: 'Skeler, Akiaura, Sidewalks and Skeletons and more',
    imageSrc: '/assets/mix-daily-6.jpg',
  },
  {
    title: 'Rock Mix',
    description: 'Skeler, Akiaura, Sidewalks and Skeletons and more',
    imageSrc: '/assets/mix-rock.jpg',
  },
]

export function Content() {
  return (
    <div className="mt-6 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-full pb-6 pr-4">
      <text className="text-3xl font-bold mb-6 block">Good Night</text>

      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 font-semibold">
        {mixes.map((mix) => (
          <MixCard key={mix.title} title={mix.title} imageSrc={mix.imageSrc} />
        ))}
      </div>

      <text className="text-2xl font-bold mb-6 mt-10 block">
        Made for Eduardo
      </text>

      <div className="flex gap-5 pb-1 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-full">
        {customPlaylists.map((playlist) => (
          <PlaylistCard
            key={playlist.title}
            title={playlist.title}
            description={playlist.description}
            imageSrc={playlist.imageSrc}
          />
        ))}
      </div>

      <text className="text-2xl font-bold mb-6 mt-10 block">
        Recommended stations
      </text>

      <div className="flex gap-5 pb-1 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-full">
        {recommendedStations.map((station) => (
          <PlaylistCard
            key={station.title}
            title={station.title}
            description={station.description}
            imageSrc={station.imageSrc}
          />
        ))}
      </div>
    </div>
  )
}
