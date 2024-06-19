import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import lodash from "lodash";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const numb = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const paidValue = ["paid", "not-paid"];
const gender = ["Male", "Female"];
const terms = ["First Term", "Second Term", "Third Term"];

const session = () => {
  return Array.from({ length: 100 }, () => {
    return {
      status: paidValue[Math.ceil(Math.random() * paidValue.length - 1)],
      performance: `${numb(100, 10)}%`,
      attendance: `${numb(100, 10)}%`,
      gender: gender[Math.ceil(Math.random() * gender.length - 1)],
      terms: terms[Math.ceil(Math.random() * terms.length - 1)],
      fea: numb(20000, 100000),
    };
  });
};
const sessionI = () => {
  return Array.from({ length: 100 }, () => {
    return {
      status: paidValue[Math.ceil(Math.random() * paidValue.length - 1)],
      performance: `${numb(100, 10)}%`,
      attendance: `${numb(100, 10)}%`,
      gender: gender[Math.ceil(Math.random() * gender.length - 1)],
      terms: terms[Math.ceil(Math.random() * terms.length - 1)],
      fea: numb(20000, 100000),
    };
  });
};
const sessionII = () => {
  return Array.from({ length: 100 }, () => {
    return {
      status: paidValue[Math.ceil(Math.random() * paidValue.length - 1)],
      performance: `${numb(100, 10)}%`,
      attendance: `${numb(100, 10)}%`,
      gender: gender[Math.ceil(Math.random() * gender.length - 1)],
      terms: terms[Math.ceil(Math.random() * terms.length - 1)],
      fea: numb(20000, 100000),
    };
  });
};

console.log(
  "grouping",
  Object.values(lodash.groupBy(session(), "terms"))[0].length
);
console.log(
  "grouping",
  Object.values(lodash.groupBy(session(), "terms"))[0].length
);

const value = (max: number, min: number) => {
  return Array.from({ length: 7 }, () => {
    return numb(max, min);
  });
};

console.log(value);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["First Term", "Second Term", "Third Term"];

export const data = {
  labels,
  datasets: [
    {
      label: "First term",
      data: [
        Object.values(lodash.groupBy(session(), "terms"))[0].length,
        Object.values(lodash.groupBy(sessionI(), "terms"))[0].length,
        Object.values(lodash.groupBy(sessionII(), "terms"))[0].length,
      ],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Second term",
      data: [
        Object.values(lodash.groupBy(session(), "terms"))[1].length,
        Object.values(lodash.groupBy(sessionI(), "terms"))[1].length,
        Object.values(lodash.groupBy(sessionII(), "terms"))[1].length,
      ],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Third term",
      data: [
        Object.values(lodash.groupBy(session(), "terms"))[2].length,
        Object.values(lodash.groupBy(sessionI(), "terms"))[2].length,
        Object.values(lodash.groupBy(sessionII(), "terms"))[2].length,
      ],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
export const genderData = {
  labels,
  datasets: [
    {
      label: "First term",
      data: [
        Object.values(lodash.groupBy(session(), "gender"))[0].length,
        Object.values(lodash.groupBy(sessionI(), "gender"))[0].length,
        Object.values(lodash.groupBy(sessionII(), "gender"))[0].length,
      ],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Second term",
      data: [
        Object.values(lodash.groupBy(session(), "gender"))[1].length,
        Object.values(lodash.groupBy(sessionI(), "gender"))[1].length,
        Object.values(lodash.groupBy(sessionII(), "gender"))[1].length,
      ],
      backgroundColor: "rgba(53, 162, 200, 0.5)",
    },
  ],
};

const TestChart = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y5">
      <p>Test Chart</p>

      <div className="w-[50%]">
        <Bar options={options} data={data}></Bar>
        <br />
        <br />
        <Bar options={options} data={genderData}></Bar>
      </div>
    </div>
  );
};

export default TestChart;
