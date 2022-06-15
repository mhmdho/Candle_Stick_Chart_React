import React, { Component } from "react";
import Chart from "react-google-charts";


const data = [
  ['day', 'dot', 'Low', 'open', 'close', 'high'],
  ['Mon', null, 20, 28, 38, 45],
  ['Tue', 31, 31, 38, 55, 66],
  ['Wed', null, 50, 55, 77, 90],
  ['Thu', 77, 77, 77, 66, 50],
  ['Fri', 15, 68, 66, 22, 15],
      ];
class GoogleChart extends Component {

  constructor(props) {
    super(props)
  }
  render() {
      return (
          <div className="container mt-5">
              <h2>Bitcoin Candlestick Chart</h2>
              <Chart
                width={'100%'}
                height={450}
                chartType="ComboChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                  title: 'Bitcoin',
                  vAxis: { title: 'Price' },
                  hAxis: { title: 'Date' },
                  seriesType: 'candlesticks',
                  series: { 1: { type: 'candlesticks', color: 'blue'},
                            0: { type: 'scatter', pointShape: 'diamond', color: '#0f9d58', pointSize: 5 },
                            // 0: { type: 'scatter', pointShape: 'triangle', color: '#a52714' },
                          },
                  legend: 'none',
                }}
                rootProps={{ 'data-testid': '1' }}
              />
          </div>
    )
  }
}
export default GoogleChart;
