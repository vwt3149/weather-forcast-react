export const doughnutChart = (type, data) => {
  let chartData = [];
  if (type === 'uv') {
    chartData = [data, 10 - data];
  } else {
    chartData = [data, 1 - data];
  }
  return {
    data: {
      datasets: [
        {
          data: [...chartData],
          backgroundColor: ['#1695e9', '#9fbfd4'],
          borderColor: ['#1695e9', '#9fbfd4'],
        },
      ],
    },
    options: {
      cutoutPercentage: 95,
      tooltips: {
        enabled: false,
      },
    },
    legend: {
      display: false,
      rtl: false,
    },
    width: 100,
    height: 100,
    percentage: type === 'uv' ? data.toFixed(0) : (data * 100).toFixed(0),
  };
};

export const lineChart = ({ maxTemp, minTemp, days }) => {
  const colorBlue = '#2980b9';
  const colorRed = '#e74c3c';
  const colorGray = '#dfe6e9';
  const numSuggestion = 5;

  const maxSuggestion = Math.max(...maxTemp) + numSuggestion;
  const minSuggestion = Math.min(...minTemp) - numSuggestion;
  return {
    data: {
      backgroundColor: '#fff',
      labels: [...days],
      datasets: [
        {
          label: 'Maximum',
          data: [...maxTemp],
          backgroundColor: 'rgba(0, 0, 0, 0.0)',
          borderColor: colorRed,
        },
        {
          label: 'Minimum',
          data: [...minTemp],
          backgroundColor: 'rgba(0, 0, 0, 0.0)',
          borderColor: colorBlue,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              color: colorGray,
            },
            ticks: {
              fontColor: colorGray,
              suggestedMin: minSuggestion,
              suggestedMax: maxSuggestion,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              color: colorGray,
            },
            ticks: {
              fontColor: colorGray,
            },
          },
        ],
      },
    },
  };
};
