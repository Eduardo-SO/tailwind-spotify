import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Content } from '../components/Content'
import { Player } from '@/components/Player'

export default function Home() {
  return (
    <div className="flex flex-col relative">
      <div className="flex h-screen pb-20">
        <Sidebar />

        <main className="flex flex-col flex-1 pt-6 pl-6 bg-gradient-to-b from-green-700/20 via-green-900/5">
          <Header />
          <Content />
        </main>
      </div>

      <Player />
    </div>
  )
}
