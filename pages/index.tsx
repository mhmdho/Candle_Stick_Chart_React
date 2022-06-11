import type { NextPage } from 'next'
import GoogleChart from '../components/chart'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>TradingHills</title>
        <link rel="icon" href="/CLogo.svg" />
      </Head>

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
