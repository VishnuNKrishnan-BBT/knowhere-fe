import React from 'react'
import Styles from './LineChartCard.module.css'
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
            tension: 0
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            curve: "catmullRom",
            label: 'Dataset 1',
            data: [23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 54, 54, 54, 54],
            borderColor: 'rgb(0, 0, 0)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            fill: true
        },
    ],
};

function LineChartCard() {

    return (
        <div className={`${Styles.card}`}>
            <Line options={options} data={data} />
        </div>
    )
}

export default LineChartCard
