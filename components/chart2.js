import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import dayjs from "dayjs";
import candlestickData from "./candledata";
import {lowPointsData, highPointsData, lowPointsDataAux, highPointsDataAux} from "./pointsdata";
import {channelUpData, channelDownData} from "./channeldata";
import trendData from "./trenddata";
import linesData from "./linesdata";
import fiboData from "./fibodata";
import positionsData from "./positionsdata";


const myOptions= {
  chart: {
      height: 350,
      type: 'candlestick',
      id: 'candles',
    //   toolbar: {
    //     autoSelected: 'pan',
    //     show: true
    //   },
      zoom: {
        enabled: true,
        type: 'xy',
      },
  },
  fill: {
    opacity: 1,
    type: ['solid', 'gradient'],
    gradient:{
      opacityFrom: [0.8, 0.3],
      opacityTo: [1, 0.4],
    }
  },
  stroke: {
    curve: 'straight',
    width: [1, 3],
    dashArray: [0, 8],
    lineCap: 'square'
  },
  dataLabels:{
    enabled: true,
    enabledOnSeries: [1],
    formatter: function (val, opts) {
      return '(' + val + ')'
    },
    textAnchor: 'end',
    background: {
      enabled: true,
      opacity: 0.7,
    },
    dropShadow: {
      enabled: true,
      left: 0,
      top: 0,
      opacity: 0.1
    },
  },
  title: {
    text: 'CandleStick Chart - Category X-axis',
    align: 'left'
  },
  annotations: {
    xaxis: [],
    yaxis: [],
    },  
  tooltip: { 
    enabled: true,
    theme: 'dark',
    shared: false,
    intersect: true,
  },
  xaxis: {
      type: 'datetime',
      labels: {
        show: false,
        formatter: function(val) {
            return dayjs(val).format('MMM DD HH:mm')
      }
    }
  },
  yaxis: {
    opposite: true,
    tooltip: {
      enabled: true
    },
    labels: {
      minWidth: 200,
    },
  },
  markers: {
    size: [8, 1, 2, 2],
    strokeWidth: 0,
    fillOpacity: 0.6,
    shape: 'circle',
    showNullDataPoints: false,
  },
};


const seriesIndicator= [{
    name: 'RSI',
    data: [
        {
          x: new Date(1538778600000),
          y: [61]
        },
        {
          x: new Date(1538780400000),
          y: [32]
        },
        {
          x: new Date(1538782200000),
          y: [63]
        },
        {
          x: new Date(1538784000000),
          y: [35]
        },
        {
          x: new Date(1538785800000),
          y: [66]
        },
        {
          x: new Date(1538787600000),
          y: [31]
        },
        {
          x: new Date(1538789400000),
          y: [62]
        },
        {
          x: new Date(1538791200000),
          y: [72]
        },
        {
          x: new Date(1538793000000),
          y: [81]
        },
        {
          x: new Date(1538794800000),
          y: [52]
        },
        {
          x: new Date(1538796600000),
          y: [38]
        },
        {
          x: new Date(1538798400000),
          y: [22]
        },
        {
          x: new Date(1538800200000),
          y: [89]
        },
        {
          x: new Date(1538802000000),
          y: [82]
        },
        {
          x: new Date(1538803800000),
          y: [37]
        },
        {
          x: new Date(1538805600000),
          y: [24]
        },
        {
          x: new Date(1538807400000),
          y: [19]
        },
        {
          x: new Date(1538809200000),
          y: [55]
        },
        {
          x: new Date(1538811000000),
          y: [35]
        },
        {
          x: new Date(1538812800000),
          y: [53]
        },
        {
          x: new Date(1538814600000),
          y: [19]
        },
        {
          x: new Date(1538816400000),
          y: [20]
        },
        {
          x: new Date(1538818200000),
          y: [20]
        },
        {
          x: new Date(1538820000000),
          y: [61]
        },
        {
          x: new Date(1538821800000),
          y: [58]
        },
        {
          x: new Date(1538823600000),
          y: [86]
        },
        {
          x: new Date(1538825400000),
          y: [16]
        },
        {
          x: new Date(1538827200000),
          y: [64]
        },
        {
          x: new Date(1538829000000),
          y: [81]
        },
        {
          x: new Date(1538830800000),
          y: [78]
        },
        {
          x: new Date(1538832600000),
          y: [79]
        },
        {
          x: new Date(1538834400000),
          y: [96]
        },
        {
          x: new Date(1538836200000),
          y: [92]
        },
        {
          x: new Date(1538838000000),
          y: [22]
        },
        {
          x: new Date(1538839800000),
          y: [18]
        },
        {
          x: new Date(1538841600000),
          y: [25]
        },
        {
          x: new Date(1538843400000),
          y: [97]
        },
        {
          x: new Date(1538845200000),
          y: [12]
        },
        {
          x: new Date(1538847000000),
          y: [95]
        },
        {
          x: new Date(1538848800000),
          y: [12]
        },
        {
          x: new Date(1538850600000),
          y: [91]
        },
        {
          x: new Date(1538852400000),
          y: [92]
        },
        {
          x: new Date(1538854200000),
          y: [34]
        },
        {
          x: new Date(1538856000000),
          y: [86]
        },
        {
          x: new Date(1538857800000),
          y: [11]
        },
        {
          x: new Date(1538859600000),
          y: [25]
        },
        {
          x: new Date(1538861400000),
          y: [99]
        },
        {
          x: new Date(1538863200000),
          y: [81]
        },
        {
          x: new Date(1538865000000),
          y: [96]
        },
        {
          x: new Date(1538866800000),
          y: [39]
        },
        {
          x: new Date(1538868600000),
          y: [27]
        },
        {
          x: new Date(1538870400000),
          y: [55]
        },
        {
          x: new Date(1538872200000),
          y: [22]
        },
        {
          x: new Date(1538874000000),
          y: [31]
        },
        {
          x: new Date(1538875800000),
          y: [16]
        },
        {
          x: new Date(1538877600000),
          y: [89]
        },
        {
          x: new Date(1538879400000),
          y: [35]
        },
        {
          x: new Date(1538881200000),
          y: [86]
        },
        {
          x: new Date(1538883000000),
          y: [17]
        },
        {
          x: new Date(1538884800000),
          y: [16]
        },
      ]
    }];


const optionsIndicator = {
    chart: {
      height: 160,
      type: 'area',
      brush: {
        enabled: true,
        target: 'candles'
      },
    //   selection: {
    //     enabled: true,
    //     xaxis: {
    //       min: 1538778600000,
    //       max: 1538884800000
    //     },
    //     fill: {
    //       color: '#ccc',
    //       opacity: 0.4
    //     },
    //     stroke: {
    //       color: '#0D47A1',
    //     }
    //   },
    },
    dataLabels: {
      enabled: false
    },
    // plotOptions: {
    //   bar: {
    //     columnWidth: '80%',
    //     colors: {
    //       ranges: [{
    //         from: -1000,
    //         to: 0,
    //         color: '#F15B46'
    //       }, {
    //         from: 1,
    //         to: 10000,
    //         color: '#FEB019'
    //       }],
    
    //     },
    //   }
    // },
    stroke: {
      width: 0
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        offsetX: 13
      }
    },
    yaxis: {
        opposite:true,
        labels: {
            // show: false
        }
    }
};


class ApexChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          series: [],
          options: myOptions,
        }
    }

    async componentDidMount() {
      const candleData = await candlestickData();
      const lowData = await lowPointsData();
      const highData = await highPointsData();
      const trendsData = await trendData();
      const lowDataAux = await lowPointsDataAux();
      const highDataAux = await highPointsDataAux();
      const channelUpLine = await channelUpData();
      const channelDownLine = await channelDownData();
      const lines = await linesData();
      const fibo = await fiboData();
      const positions = await positionsData()
      const lastPrice = parseFloat((candleData[candleData.length-1]).y[3]);
      const lastPriceArray = {
              y: lastPrice,
              strokeDashArray: 3,
              borderColor: 'gray',
              fillColor: 'gray',
              label: {
                borderColor: 'gray',
                style: {
                  fontSize: '12px',
                  color: '#fff',
                  background: 'black'
                },
                orientation: 'vertical',
                offsetY: 5,
                offsetX: 60,
                text: lastPrice
              }
            }
      lines.push(lastPriceArray)
      const linesfibo = lines.concat(fibo)
      // fibo.map(element => (lines.push(element)))
      const Series = [
        {
          name: 'candle',
          type:'candlestick',
          data: candleData
        },
        {
          name: 'positions',
          type: 'line',
          color: 'lightgreen',
          data: positions
        },
        {
          name: 'upline',
          type: 'line',
          color: 'lightgreen',
          data: channelUpLine
        },
        {
          name: 'downline',
          type: 'line',
          color: 'lightgreen',
          data: channelDownLine
        },
        {
          name: 'low',
          type: 'scatter',
          data: lowData
        },
        {
          name: 'high',
          type: 'scatter',
          data: highData
        },
        {
          name: 'lowAux',
          type: 'scatter',
          data: lowDataAux
        },
        {
          name: 'highAux',
          type: 'scatter',
          data: highDataAux
        },
      ];
      const Options = {
        annotations: {
          xaxis: trendsData,
          yaxis: linesfibo, 
        },
      };
      this.setState({series: Series, options: Options})
    }

    render() {
      return (
        <>
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="candlestick"
            height={'85%'}
            width={'100%'}
          />

          <ReactApexChart
            options={optionsIndicator}
            series={seriesIndicator}
            type="area"
            height={'15%'}
            width={'100%'}
          />
        </>
      );
    }
};


// const domContainer = document.querySelector('#App');
// ReactDOM.render(React.createElement(ApexChart), domContainer);


export default ApexChart;
