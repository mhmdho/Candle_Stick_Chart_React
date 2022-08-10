import axios from "axios"


const URL ="http://127.0.0.1:8000/fibodata/?format=json"


function fiboDataFormat(data) {
    return (
      data.map(element => (
        {
          y: element.fibo,
          strokeDashArray: 8,
          borderColor: 'orange',
          fillColor: 'orange',
          opacity: 0.2,
          offsetX: 1500,
          width: '59%',
          label: {
            borderColor: 'orange',
            borderRadius: 5,
            orientation: 'vertical',
            offsetY: 5,
            offsetX: 90,
            text: parseFloat(element.fibo),
            style: {
              fontSize: '10px',
              color: 'black',
              background: 'orange',
            },
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
