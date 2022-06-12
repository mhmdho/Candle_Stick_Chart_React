import GoogleChart from '../components/chart'


const style = {
  mainStyle: `flex w-full flex-1 flex-col items-center justify-center px-20 text-center`,
}

const Main = () => {
    return (
      <main className={style.mainStyle}>
          <GoogleChart />
      </main>
    )
}
        
export default Main
