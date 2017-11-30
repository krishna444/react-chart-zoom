import React from 'react';
import ReactDOM from 'react-dom';
import ChartTest from './ChartTest'
import './index.html'

document.write("<div style='height:80%;width:100%' id='app'></div>");
ReactDOM.render(<ChartTest />, document.getElementById("app"))