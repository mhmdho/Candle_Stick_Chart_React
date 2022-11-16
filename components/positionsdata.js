import axios from "axios"


const URL = process.env.NEXT_PUBLIC_HOST + "/positionsdata/?format=json"


function positionsDataFormat(data) {
  let pos = []
  data.map(element => (
    pos.push(
              {
                x: new Date(element.Entery_time),
                y: [parseFloat(element.ENTERY_PRICE)]
              },
              {
                x: new Date(element.Exit_time),
                y: [parseFloat(element.Exit_price)]
              },
              {
                x: new Date(0),
                y: null
              },
            )
            )
          )
      return (
        pos
      )
  }


async function positionsData() {
    const response = await axios.get(URL);
    return positionsDataFormat(response.data)
  }


export default positionsData;
