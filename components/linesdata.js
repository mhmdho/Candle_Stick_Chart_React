import axios from "axios"


const URL ="http://127.0.0.1:8000/linesdata/?format=json"


function linesDataFormat(data) {
    return (
      data.map(element => (
        {
          y: element.point,
          strokeDashArray: 0,
          borderColor: 'purple',
          fillColor: 'purple',
          dashArray: 0,
          label: {
            borderColor: 'purple',
            style: {
              fontSize: '12px',
              color: '#fff',
              background: 'purple',
            },
            orientation: 'vertical',
            offsetY: 5,
            offsetX: 120,
            text: (parseFloat(element.point).toString()).concat("--", element.rank)
          },
        }
        )
      ))
  }


async function linesData() {
    const response = await axios.get(URL);
    return linesDataFormat(response.data)
  }


export default linesData;
