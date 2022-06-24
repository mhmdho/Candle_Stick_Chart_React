// import GoogleChart from '../components/chart'
import ApexChart from '../components/chart2'


const style = {
  mainStyle: `flex-11 w-full flex-1 flex-col items-center justify-center px-2 text-center`,
}

const Main = () => {
    return (
      <main className={style.mainStyle}>
        {/* <GoogleChart /> */}
        <ApexChart />
      </main>
    )
}
        
export default Main
