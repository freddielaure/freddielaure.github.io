var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});






var ctx = document.getElementById("myCharte").getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        "labels": ["January", "February", "March", "April", "May", "June", "July"],
        "datasets": [{
            "label": "My First Dataset",
            "data": [65, 59, 80, 81, 56, 55, 40],
            "fill": false,
            "borderColor": "rgb(75, 192, 192)",
            "lineTension": 0.1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }
});


var myRadarChart = document.getElementById("chartjs-3").getContext('2d');
var myRadarChart = new Chart(myRadarChart, {
    type: 'radar',
    data: {
        "labels": ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        "datasets": [{
            "label": "My First Dataset",
            "data": [65, 59, 90, 81, 56, 55, 40],
            "fill": true,
            "backgroundColor": "rgba(255, 99, 132, 0.2)",
            "borderColor": "rgb(255, 99, 132)",
            "pointBackgroundColor": "rgb(255, 99, 132)",
            "pointBorderColor": "#fff",
            "pointHoverBackgroundColor": "#fff",
            "pointHoverBorderColor": "rgb(255, 99, 132)"
        }, {
            "label": "My Second Dataset",
            "data": [28, 48, 40, 19, 96, 27, 100],
            "fill": true,
            "backgroundColor": "rgba(54, 162, 235, 0.2)",
            "borderColor": "rgb(54, 162, 235)",
            "pointBackgroundColor": "rgb(54, 162, 235)",
            "pointBorderColor": "#fff",
            "pointHoverBackgroundColor": "#fff",
            "pointHoverBorderColor": "rgb(54, 162, 235)"
        }]
    },
    options: {
        "elements": {
            "line": {
                "tension": 0,
                "borderWidth": 3
            }
        }
    }
});



new Chart(document.getElementById("chartjs-5"), {
  "type": "polarArea",
  "data": {
      "labels": ["Red", "Green", "Yellow", "Grey", "Blue"],
      "datasets": [{
          "label": "My First Dataset",
          "data": [11, 16, 7, 3, 14],
          "backgroundColor": ["rgb(255, 99, 132)", "rgb(75, 192, 192)", "rgb(255, 205, 86)", "rgb(201, 203, 207)", "rgb(54, 162, 235)"]
      }]
  }
});


new Chart(document.getElementById("chartjs-6"), {
 "type": "bubble",
 "data": {
     "datasets": [{
         "label": "First Dataset",
         "data": [{
             "x": 20,
             "y": 30,
             "r": 15
         }, {
             "x": 40,
             "y": 10,
             "r": 10
         }],
         "backgroundColor": "rgb(255, 99, 132)"
     }]
 }
});







var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
       var config = {
           type: 'line',
           data: {
               labels: ["January", "February", "March", "April", "May", "June", "July"],
               datasets: [{
                   label: "dataset - big points",
                   data: [
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor()
                   ],
                   backgroundColor: window.chartColors.red,
                   borderColor: window.chartColors.red,
                   fill: false,
                   borderDash: [5, 5],
                   pointRadius: 15,
                   pointHoverRadius: 10,
               }, {
                   label: "dataset - individual point sizes",
                   data: [
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor()
                   ],
                   backgroundColor: window.chartColors.blue,
                   borderColor: window.chartColors.blue,
                   fill: false,
                   borderDash: [5, 5],
                   pointRadius: [2, 4, 6, 18, 0, 12, 20],
               }, {
                   label: "dataset - large pointHoverRadius",
                   data: [
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor()
                   ],
                   backgroundColor: window.chartColors.green,
                   borderColor: window.chartColors.green,
                   fill: false,
                   pointHoverRadius: 30,
               }, {
                   label: "dataset - large pointHitRadius",
                   data: [
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor(),
                       randomScalingFactor()
                   ],
                   backgroundColor: window.chartColors.yellow,
                   borderColor: window.chartColors.yellow,
                   fill: false,
                   pointHitRadius: 20,
               }]
           },
           options: {
               responsive: true,
               legend: {
                   position: 'bottom',
               },
               hover: {
                   mode: 'index'
               },
               scales: {
                   xAxes: [{
                       display: true,
                       scaleLabel: {
                           display: true,
                           labelString: 'Month'
                       }
                   }],
                   yAxes: [{
                       display: true,
                       scaleLabel: {
                           display: true,
                           labelString: 'Value'
                       }
                   }]
               },
               title: {
                   display: true,
                   text: 'Chart.js Line Chart - Different point sizes'
               }
           }
       };

       window.onload = function() {
           var ctx = document.getElementById("canvas").getContext("2d");
           window.myLine = new Chart(ctx, config);
       };
