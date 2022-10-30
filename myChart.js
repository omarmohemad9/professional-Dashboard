const ctx = document.getElementById("myChart").getContext("2d");

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [20, 50, 30, 80, 70, 100],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: ["blue"],
        tension: 0.5,
        borderWidth: 3,
      },
    ],
  },
  options: {
    plugins: {
      subtitle: {
        display: true,
        text: "Custom Chart Subtitle",
      },
    },

    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
  },
});

let mychart = new Chart(document.getElementById("rateChart"), {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: [
          "rgba(255, 99, 132, 2)",
          "rgba(54, 162, 235, 2)",
          "rgba(255, 206, 86, 2)",
          "rgba(75, 192, 192, 2)",
          "rgba(153, 102, 255, 2)",
          "rgba(255, 159, 64, 2)",
        ],
        hoverBorderWidth: 20,
        hoverOffset: 20,
        borderWidth: 1,
        spacing: 5,
        weight: 1,
        clip: {
          left: 5,
          top: false,
          right: 2,
          bottom: 0,
        },
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Red", "Yellow", "Blue"],
  },
  options: {
    rotation: 2,
    animations: {
      animateRotate: false,
      animateScale: true,
    },
  },
});

// console.log("data");
