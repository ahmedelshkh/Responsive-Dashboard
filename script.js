// Show The Menu ON The Mobile

const menuIcon = document.querySelector(".content header .menu-icon");
const sidebar = document.querySelector(".sidebar");
let menuClicked = false;

menuIcon.addEventListener("click", function(){
    if(menuClicked) {
        sidebar.style.cssText = "left: -400px;";
        menuClicked = false;
    }else {
        sidebar.style.cssText = "left: 0;";
        menuClicked = true;
    }
});

// Charts
const activityChart = document.getElementById("activity-chart");
const expenseChart = document.getElementById("expense-chart").getContext('2d');

function chartBuilder(){

}
new Chart(activityChart, {
    type: 'bar',
    data: {
        labels: ['Sat','Sun','Mon','Tue','Wed','Sat','Fri'],
        datasets: [{
            label: 'Diposit',
            data: [490, 350, 350, 490, 150, 405, 400],
            borderSkipped: "none",
            borderRadius: 30,
            backgroundColor: 'rgb(24 20 243)',
            barThickness: 10
        },
        {
            label: '',
            data: [null, null, null, null, null, null, null],
            borderSkipped: "none",
            backgroundColor: "transparent",
            barThickness: 10
        },
        {
            label: 'Withdraw',
            data: [250, 120, 260, 390, 220, 250, 320],
            borderSkipped: "none",
            borderRadius: 30,
            backgroundColor: 'rgb(22 219 204)',
            barThickness: 10
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                border: {
                    display: false
                },
                ticks: {
                    stepSize: 100
                }
            },
            x: {
                grid: {
                    display: false,
                    offset: true
                },
            }
        },
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                }
            }
        },
    }
});

new Chart(expenseChart, {
    type: 'polarArea',
    data: {
        labels: ['Entertainment', 'Bill Expense', 'Investment', 'Others'],
        datasets: [{
            data: [30, 15, 20, 35],
            backgroundColor: ['#1E2A78', '#FF7F00', '#FF00FF', '#0000FF'],
            borderColor: 'white', // Adds space effect between categories
            borderWidth: 4, // Increases spacing
        }]
    },
    options: {
        plugins: {
            legend: { display: false },
            datalabels: {
                color: 'white',
                font: { weight: 'bold', size: 14 },
                formatter: (value, expenseChart) => {
                    return expenseChart.chart.data.labels[expenseChart.dataIndex] + "\n" + value + "%";
                }
            }
        },
        scales: {
            r: {
                grid: { display: false },
                angleLines: { display: false }, // Hides background lines
                ticks: { display: false }, // Hides value labels
                pointLabels: { display: false }, // Hides outer labels
                suggestedMin: 0,
                suggestedMax: 40,
                spacing: 10 // Adds spacing between segments (acts like padding)
            }
        }
    },
    plugins: [ChartDataLabels]
});