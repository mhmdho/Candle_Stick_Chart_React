import axios from "axios"


const URL ="http://127.0.0.1:8000/trenddata/?format=json"


function trendDataFormat(data) {
    return (
      data.map(element => (
        {
          x: element.start,
          x2: element.end,
          borderColor: element.color,
          fillColor: element.color,
          opacity: 0.06,
          label: {
            borderColor: element.color,
            style: {
              fontSize: '12px',
              color: '#fff',
              background: element.color,
              padding:{
                left:12,
                right:12,
              }
            },
            orientation: 'vertical',
            offsetY: 7,
            text: element.trend
          }
        }
        )
      ))
  }


async function trendData() {
    const response = await axios.get(URL);
    return trendDataFormat(response.data)
  }


export default trendData;
