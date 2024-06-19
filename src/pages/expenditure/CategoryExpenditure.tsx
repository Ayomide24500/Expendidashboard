import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const CategoryExpenditure = () => {
  const chartRef: any = useRef(null);
  const chartInstance: any = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Salaries", "Utilities", "Maintenance", "Supplies"],
          datasets: [
            {
              label: "Expenditure",
              data: [50000, 20000, 15000, 10000],
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="mt-20 lg:mt-0 w-full h-[500px] lg:flex lg:justify-center lg:items-center">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default CategoryExpenditure;
