import axios from "axios"


const URL_low ="http://127.0.0.1:8000/lowpointsdata/?format=json"
const URL_high ="http://127.0.0.1:8000/highpointsdata/?format=json"


function LowPointsDataFormat(data) {
    return (
      data.map(element => (
          {
            x: new Date(element.openTime),
            y: [element.low]
          }
        )
      ))
  }

async function lowPointsData() {
    const response = await axios.get(URL_low);
    return LowPointsDataFormat(response.data)
  }


function HighPointsDataFormat(data) {
    return (
      data.map(element => (
          {
            x: new Date(element.openTime),
            y: [element.high]
          }
        )
      ))
  }

async function highPointsData() {
    const response = await axios.get(URL_high);
    return HighPointsDataFormat(response.data)
  }


export {lowPointsData, highPointsData};
