import type { NextPage } from 'next'
import MyHead from '../components/head'
import Footer from '../components/footer'
import dynamic from 'next/dynamic'


const DynamicChartWithNoSSR = dynamic(
  () => import('../components/main'),
  { ssr: false }
)


const style = {
  wrapper: 'h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between',
}


const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <MyHead />
      <DynamicChartWithNoSSR />
      <Footer />
    </div>
  )
}


export default Home
