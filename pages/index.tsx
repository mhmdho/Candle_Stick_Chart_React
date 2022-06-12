import type { NextPage } from 'next'
import MyHead from '../components/head'
import Main from '../components/main'
import Footer from '../components/footer'


const style = {
  wrapper: 'h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between',
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <MyHead />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
