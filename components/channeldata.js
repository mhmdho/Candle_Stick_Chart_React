import axios from "axios"


const URL_Downline = process.env.NEXT_PUBLIC_HOST + "/channeldowndata/?format=json"
const URL_Upline = process.env.NEXT_PUBLIC_HOST + "/channelupdata/?format=json"


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
