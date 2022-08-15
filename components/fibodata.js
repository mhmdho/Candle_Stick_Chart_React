import axios from "axios"


const URL ="http://127.0.0.1:8000/fibodata/?format=json"


function fiboDataFormat(data) {
    return (
      data.map(element => (
        element.label == '0.00' || element.label == '1.00' ? 
        {
          y: element.fibo,
          strokeDashArray: 7,
          borderColor: 'gray',
          fillColor: 'gray',
          opacity: 0.2,
          offsetX: '50%',
          width: '6%',
          label: {
            borderColor: 'red',
            borderRadius: 5,
            orientation: 'vertical',
            offsetY: 5,
            offsetX: 90,
            text: "[".concat(element.label).concat("] ", (parseFloat(element.fibo).toString())),
            style: {
              fontSize: '10px',
              color: 'black',
              background: 'gray',
            },
          }
        } :
        {
          y: element.fibo,
          strokeDashArray: 10,
          borderColor: 'orange',
          fillColor: 'orange',
          opacity: 0.2,
          offsetX: '50%',
          width: '6%',
          label: {
            borderColor: 'orange',
            borderRadius: 5,
            orientation: 'vertical',
            offsetY: 5,
            offsetX: 90,
            text: "[".concat(element.label).concat("] ", (parseFloat(element.fibo).toString())),
            style: {
              fontSize: '10px',
              color: 'black',
              background: 'orange',
            },
          }
        }
        )
      ))
  }


async function fiboData() {
    const response = await axios.get(URL);
    return fiboDataFormat(response.data)
  }


export default fiboData;
