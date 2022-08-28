import './Chart.css';

import ChartBar from './ChartBar';


function Chart(props) {
    var dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    var totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map(function (dataPoint) {
                return (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMaximum}
                        label={dataPoint.label}
                    />
                );
            })}
        </div>
    );
}

export default Chart;
