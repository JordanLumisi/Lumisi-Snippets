import Chart from "chart.js/auto";

// const chartColours = [
//   "#24629B", // Ohio light
//   "#5E8BBF", // Ohio lighter
//   "#487B81", // Alle light
//   "#7FA9B8", // Alle lighter
//   "#7F547B", // Mono light
//   "#9991AE", // Mono lighter
// ];

const chartColors = {
  ohioLight: "#24629B",
  ohioLighter: "#5E8BBF",
  alleLight: "#487B81",
  alleLighter: "#7FA9B8",
  monoLight: "#7F547B",
  monoLighter: "#9991AE",
};

console.log(chartColors.ohioLight);

(async function () {
  const data = [
    {
      label: "Value",
      team: "Book to price",
      score: 0.5,
      color: chartColors.ohioLight,
    },
    { label: "Value", team: "Earnings yield", score: 0.7, color: "#24629B" },
    { label: "Value", team: "Cash flow yield", score: 0.8, color: "#24629B" },
    { label: "Value", team: "Sales to price", score: 0.4, color: "#24629B" },
    { label: "Value", team: "EBITDA to EV", score: 0.9, color: "#24629B" },
    { label: "Yield", team: "Dividend yield", score: 0.9, color: "#5E8BBF" },
    {
      label: "Yield",
      team: "Shareholder yield",
      score: -0.3,
      color: "#5E8BBF",
    },
    {
      label: "Growth",
      team: "Dividend growth 5Y",
      score: -0.4,
      color: "#487B81",
    },
    {
      label: "Growth",
      team: "Earnings growth 5Y",
      score: -0.3,
      color: "#487B81",
    },
    { label: "Growth", team: "Sales growth 5Y", score: 0.2, color: "#487B81" },
    {
      label: "Growth",
      team: "Forecast growth 12M",
      score: -0.8,
      color: "#487B81",
    },
    {
      label: "Quality",
      team: "Return on equity",
      score: -0.7,
      color: "#7FA9B8",
    },
    {
      label: "Quality",
      team: "Net profit margin",
      score: -0.4,
      color: "#7FA9B8",
    },
    {
      label: "Quality",
      team: "Earnings growth stability",
      score: -1,
      color: "#7FA9B8",
    },
    {
      label: "Quality",
      team: "Sales growth stability",
      score: -1.9,
      color: "#7FA9B8",
    },
    { label: "Quality", team: "Low gearing", score: -0.4, color: "#7FA9B8" },
    {
      label: "Size",
      team: "Market cap (large cap)",
      score: -1.2,
      color: "#7F547B",
    },
    { label: "Volatility", team: "Market beta", score: 2.4, color: "#9991AE" },
    {
      label: "Volatility",
      team: "Daily volatility 1Y",
      score: 2.3,
      color: "#9991AE",
    },
    {
      label: "Volatility",
      team: "Volatility 3Y",
      score: 2.2,
      color: "#9991AE",
    },
    { label: "Momentum", team: "Momentum ST", score: -0.6, color: "#24629B" },
    { label: "Momentum", team: "Momentum 12-1", score: -1.2, color: "#24629B" },
    {
      label: "Momentum",
      team: "Forecast 12M revisions",
      score: -1.1,
      color: "#24629B",
    },
  ];

  const chartData = {
    labels: data.map((row) => row.team),
    datasets: [
      {
        label: "hello",
        data: data.map((row) => row.score),
        backgroundColor: data.map((row) => row.color),
        barPercentage: 1,
      },
    ],
  };

  const barChartData = {
    labels: data.map((row) => row.team),
    datasets: [
      {
        label: "American Express",
        backgroundColor: chartColors.ohioLighter,
        borderColor: chartColors.ohioLight,
        borderWidth: 1,
        data: [3, 5, 6, 7, 3, 5, 6, 7],
      },
      {
        label: "Mastercard",
        backgroundColor: chartColors.ohioLight,
        borderColor: chartColors.ohioLighter,
        borderWidth: 1,
        data: [4, 7, 3, 6, 10, 7, 4, 6],
      },
      {
        label: "Paypal",
        backgroundColor: chartColors.alleLighter,
        borderColor: chartColors.alleLight,
        borderWidth: 1,
        data: [10, 7, 4, 6, 9, 7, 3, 10],
      },
      {
        label: "Visa",
        backgroundColor: chartColors.alleLight,
        borderColor: chartColors.alleLighter,
        borderWidth: 1,
        data: [6, 9, 7, 3, 10, 7, 4, 6],
      },
    ],
  };

  const chartOptions = {
    indexAxis: "y",
    responsive: true,
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "December 2023 US factor performance",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  //   var chartOptions2 = {
  //     responsive: true,
  //     legend: {
  //       position: "top",
  //     },
  //     title: {
  //       display: true,
  //       text: "Chart.js Bar Chart",
  //     },
  //     scales: {
  //       yAxes: [
  //         {
  //           ticks: {
  //             beginAtZero: true,
  //           },
  //         },
  //       ],
  //     },
  //   };

  new Chart(document.getElementById("myChart"), {
    type: "bar",
    data: chartData,
    options: chartOptions,
  });
})();
