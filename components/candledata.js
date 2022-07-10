import axios from "axios"


const URL ="http://127.0.0.1:8000/indexdata/?format=json"


function CandlestickDataFormat(data) {
    return (
      data.map(element => (
          {
            x: new Date(element.openTime),
            y: [element.open, element.high, element.low, element.close]
          }
        )
      ))
  }


async function candlestickData() {
    const response = await axios.get(URL);
    return CandlestickDataFormat(response.data)
  }


export default candlestickData;
