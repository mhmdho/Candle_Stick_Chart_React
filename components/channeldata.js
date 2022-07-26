import axios from "axios"


const URL_Downline ="http://127.0.0.1:8000/channeldowndata/?format=json"
const URL_Upline ="http://127.0.0.1:8000/channelupdata/?format=json"


function ChannelDataFormat(data) {
    return (
      data.map(element => (
          {
            x: new Date(element.time),
            y: [element.point]
          }
        )
      ))
  }

  async function channelDownData() {
    const response = await axios.get(URL_Downline);
    return ChannelDataFormat(response.data)
  }
  
  async function channelUpData() {
    const response = await axios.get(URL_Upline);
    return ChannelDataFormat(response.data)
  }

export {channelDownData, channelUpData};
