import React from 'react'
import Styles from './MiniJourneyDetails.module.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true, // Set the chart to be responsive (100% width)
    plugins: {
        legend: {
            display: false, // Hide the legend
        },
        title: {
            display: false, // Hide the title
        },
        fill: {
            display: true
        }
    },
    scales: {
        x: {
            display: false, // Hide the x-axis
        },
        y: {
            display: false, // Hide the y-axis
        },
    },
    elements: {
        point: {
            radius: 0, // Hide data points (optional)
        },
        line: {
            borderWidth: 2, // Set the line width
            borderColor: 'blue', // Set the line color
            tension: 0.2
        },
    },
}

const getlabels = count => {
    var returnArray = []
    for (let index = 0; index < count - 1; index++) {
        returnArray.push(index + 1)
    }
    return returnArray
}

const labels = getlabels(20)

export const data = {
    labels,
    datasets: [
        {
            curve: "catmullRom",
            label: 'Dataset 1',
            data: [0, 10, 13, 40, 32, 12, 34, 52, 11, 0, 10, 13, 40, 32, 12, 34, 52, 11, 55, 43],
            borderColor: 'rgb(0, 0, 0)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            fill: true
        },
    ],
};

function Graph({
    fullWidth = false
}) {
    return (
        <div className={`${Styles.item} ${fullWidth && Styles.fullWidth}`}>
            <Line options={options} data={data} />
        </div>
    )
}

export default Graph
