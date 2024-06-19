import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const MonthlyExpenditureChart = () => {
  const chartRef: any = useRef(null);
  const chartInstance: any = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      const data = isSmallScreen
        ? [200, 900, 600, 100, 800, 200, 500, 140, 400, 100, 200, 500]
        : [200, 900, 600, 100, 800, 200, 500, 140, 400, 100, 200, 500];

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Expenditure",
              data: data,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 2,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [isSmallScreen]);

  return (
    <div className="sm:relative w-full h-[380px] md:h-[500px] mt-10">
      <canvas ref={chartRef} className="w-[900px] h-[400px]"></canvas>
    </div>
  );
};

export default MonthlyExpenditureChart;
