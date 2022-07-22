import axios from "axios"


const URL_low ="http://127.0.0.1:8000/lowpointsdata/?format=json"
const URL_high ="http://127.0.0.1:8000/highpointsdata/?format=json"
const URL_low_a ="http://127.0.0.1:8000/lowpointsdataaux/?format=json"
const URL_high_a ="http://127.0.0.1:8000/highpointsdataaux/?format=json"


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

async function lowPointsDataAux() {
  const response = await axios.get(URL_low_a);
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

async function highPointsDataAux() {
  const response = await axios.get(URL_high_a);
  return HighPointsDataFormat(response.data)
}

export {lowPointsData, highPointsData, lowPointsDataAux, highPointsDataAux};
