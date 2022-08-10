import axios from "axios"


const URL ="http://127.0.0.1:8000/fibodata/?format=json"


function fiboDataFormat(data) {
    return (
      data.map(element => (
        {
          y: element.fibo,
          x: 1660082400000,
          strokeDashArray: 0,
          borderColor: 'orange',
          fillColor: 'orange',
          dashArray: 0,
          label: {
            borderColor: 'orange',
            style: {
              fontSize: '10px',
              color: '#fff',
              background: 'orange',
            },
            orientation: 'vertical',
            offsetY: 5,
            offsetX: 100,
            text: parseFloat(element.fibo)
          },
        }
        )
      ))
  }


async function fiboData() {
    const response = await axios.get(URL);
    return fiboDataFormat(response.data)
  }


export default fiboData;
