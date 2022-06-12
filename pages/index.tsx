import type { NextPage } from 'next'
import GoogleChart from '../components/chart'
import MyHead from '../components/head'
import Image from 'next/image'


const style = {
  wrapper: 'h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between',
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <MyHead />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <GoogleChart />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://www.TradingHills.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/logo.png" alt="TradingHills Logo" width={118} height={33} />
        </a>
      </footer>
    </div>
  )
}

export default Home
