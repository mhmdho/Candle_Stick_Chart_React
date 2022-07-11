import axios from "axios"


const URL_low ="http://127.0.0.1:8000/lowpointsdata/?format=json"
const URL_high ="http://127.0.0.1:8000/highpointsdata/?format=json"


function LowDataFormat(data) {
    return (
      data.map(element => (
          {
            x: new Date(element.openTime),
            y: [element.low]
          }
        )
      ))
  }

async function lowData() {
    const response = await axios.get(URL_low);
    return LowDataFormat(response.data)
  }


function HighDataFormat(data) {
    return (
      data.map(element => (
          {
            x: new Date(element.openTime),
            y: [element.high]
          }
        )
      ))
  }

async function highData() {
    const response = await axios.get(URL_high);
    return HighDataFormat(response.data)
  }


export {lowData, highData};
