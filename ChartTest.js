import React from 'react';
import isEqual from 'lodash/isEqual';
import find from 'lodash/find';
import {Line} from 'react-chartjs-2';
import Hammer from 'hammerjs';
import * as zoom from 'chartjs-plugin-zoom';



//console.log("Moment=" + JSON.stringify(moment))

const data = {
    labels: ['2011-12-12', '2012-01-11', '2012-09-11', '2013-01-11','2013-09-11','2014-01-11','2014-09-11'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,           
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const options = {
    responsive: true,
    //maintainAspectRatio: false,
    animation: true,    
    scales: {
        xAxes: [{
            type: 'time',
            display: true,
            scaleLabel: {
                display: true,
                labelString: "Date",
            },
            stacked: true

        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: "TITLE",
            }
            // ticks: {
            //     beginAtZero: true
            // }

        }],
        pan: {
            // Boolean to enable panning
            enabled: true,
            mode: 'x',
            // rangeMin: {
            //     x: null,
            //     y: null
            // },
            // rangeMax: {
            //     x: null,
            //     y: null
            // }
        },
        zoom: {
            enabled: true,
            drag: true,
            mode: 'xy',
            // rangeMin: {
            //     // Format of min zoom range depends on scale type
            //     x: null,
            //     y: null
            // },
            // rangeMax: {
            //     // Format of max zoom range depends on scale type
            //     x: null,
            //     y: null
            // }
        }
    }

};



export default class ChartTest extends React.Component {
    componentWillMount() {
        Chart.plugins.register(zoom);
        // Chart.pluginService.register({
        //     afterDraw:function(chart, easing){
        //         console.log(chart);
        //         console.log(easing);
        //     }
        // })
    }
    componentDidMount() {

    }
    render() {
        return <Line data={data} options={options} />;
    }
}