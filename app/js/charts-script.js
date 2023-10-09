"use strict";


const ctx = document.getElementById('myChart');
var myPieChartDataForm = document.querySelector("#charts-values-profit");
var myPieChart;
function createMyPieChart(){
    if(!myPieChartDataForm) return;
    if(myPieChart !== undefined) myPieChart.destroy(); 
    var myPieChartData = new FormData(myPieChartDataForm);
    var myPieChartDataLabels = [];
    var myPieChartDataValues = [];
    for (const pair of myPieChartData.entries()){
        myPieChartDataLabels.push(pair[0]);
        myPieChartDataValues.push(pair[1]);
    }

    myPieChart = new Chart(ctx, {
        type: 'line',
        
        data: {
            labels: myPieChartDataLabels,
            interaction: {
                mode: 'nearest',
                intersect: false,
                axis: 'x'
            },
            datasets: [{ 
                lineTension: 0.3,
                pointRadius: 5,
                data: myPieChartDataValues,
                label: false,
                borderWidth: 1,
                borderColor: "rgba(255, 180, 47, 1)",
                backgroundColor: "rgba(222, 117, 94, 0.2)",
                fill: true,
                pointBorderColor: "#DE755E",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 2,
                }, 
            ]},
        options: {
            responsive: true,
            maintainAspectRatio: false,
            viewMode: 1,
            dragMode: 'move',
            aspectRatio: 1,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    // Disable the on-canvas tooltip
                    enabled: false,

                    external: function(context) {
                        // Tooltip Element
                        let tooltipEl = document.getElementById('chartjs-tooltip');

                        // Create element on first render
                        if (!tooltipEl) {
                            tooltipEl = document.createElement('div');
                            tooltipEl.id = 'chartjs-tooltip';
                            tooltipEl.innerHTML = '<table></table>';
                            document.body.appendChild(tooltipEl);
                        }

                        // Hide if no tooltip
                        const tooltipModel = context.tooltip;
                        if (tooltipModel.opacity === 0) {
                            tooltipEl.style.opacity = 0;
                            return;
                        }

                        // Set caret Position
                        tooltipEl.classList.remove('above', 'below', 'no-transform');
                        if (tooltipModel.yAlign) {
                            tooltipEl.classList.add(tooltipModel.yAlign);
                        } else {
                            tooltipEl.classList.add('no-transform');
                        }

                        function getBody(bodyItem) {
                            return bodyItem.lines;
                        }

                        // Set Text
                        if (tooltipModel.body) {
                            const titleLines = tooltipModel.title || [];
                            const bodyLines = tooltipModel.body.map(getBody);

                            let innerHtml = '<thead>';

                            titleLines.forEach(function(title) {
                                innerHtml += '<tr><th>' + title + '</th></tr>';
                            });
                            innerHtml += '</thead><tbody>';

                            bodyLines.forEach(function(body, i) {
                                const colors = tooltipModel.labelColors[i];
                                let style = 'background:' + colors.backgroundColor;
                                style += '; border-color:' + colors.borderColor;
                                style += '; border-width: 1px';
                                const span = '<span style="' + style + '">' + body + '</span>';
                                innerHtml += '<tr><td>' + span + '</td></tr>';
                                
                            });
                            innerHtml += '</tbody>';

                            let tableRoot = tooltipEl.querySelector('table');
                            tableRoot.innerHTML = innerHtml;
                        }

                        const position = context.chart.canvas.getBoundingClientRect();
                        const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

                        // Display, position, and set styles for font
                        tooltipEl.style.opacity = 1;
                        tooltipEl.style.position = 'absolute';
                        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                        tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                        tooltipEl.style.font = bodyFont.string;
                        tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
                        tooltipEl.style.pointerEvents = 'none';
                    }
                }
            },
        }
    });
}

createMyPieChart();
if(myPieChartDataForm) myPieChartDataForm.addEventListener("update", createMyPieChart);

const ctxChartThree = document.getElementById('myChartThree').getContext('2d');
var myPieChartThreeDataForm = document.querySelector("#charts-values-sales");
var myChartLineThree;

function createMyChartLineThree(){
    if(!myPieChartThreeDataForm) return;
    if(myChartLineThree !== undefined) myChartLineThree.destroy();
    var myPieChartThreeData = new FormData(myPieChartThreeDataForm);
    var myPieChartThreeDataLabels = [];
    var myPieChartThreeDataValues = [];
    for (const pair of myPieChartThreeData.entries()){
        myPieChartThreeDataLabels.push(pair[0]);
        myPieChartThreeDataValues.push(pair[1]);
    }
    myChartLineThree = new Chart(ctxChartThree, {
        type: 'line',
        
        data: {
        labels: myPieChartThreeDataLabels,
        interaction: {
            mode: 'nearest',
            intersect: false,
            axis: 'x'
          },
        datasets: [{ 
            lineTension: 0.3,
            pointRadius: 5,
            data: myPieChartThreeDataValues,
            label: false,
            borderWidth: 1,
            borderColor: "rgba(255, 180, 47, 1)",
            backgroundColor: "rgba(222, 117, 94, 0.2)",
            fill: true,
            pointBorderColor: "#DE755E",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            }, 
        ]
        },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        viewMode: 1,
        dragMode: 'move',
        aspectRatio: 1,
        plugins: {
            legend: {
                display: false
             },
            tooltip: {
                // Disable the on-canvas tooltip
                enabled: false,

                external: function(context) {
                    // Tooltip Element
                    let tooltipEl = document.getElementById('chartjs-tooltipThree');

                    // Create element on first render
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjs-tooltipThree';
                        tooltipEl.innerHTML = '<table></table>';
                        document.body.appendChild(tooltipEl);
                    }

                    // Hide if no tooltip
                    const tooltipModel = context.tooltip;
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    // Set caret Position
                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }

                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }

                    // Set Text
                    if (tooltipModel.body) {
                        const titleLines = tooltipModel.title || [];
                        const bodyLines = tooltipModel.body.map(getBody);

                        let innerHtml = '<thead>';

                        titleLines.forEach(function(title) {
                            innerHtml += '<tr><th>' + title + '</th></tr>';
                        });
                        innerHtml += '</thead><tbody>';

                        bodyLines.forEach(function(body, i) {
                            const colors = tooltipModel.labelColors[i];
                            let style = 'background:' + colors.backgroundColor;
                            style += '; border-color:' + colors.borderColor;
                            style += '; border-width: 1px';
                            const span = '<span style="' + style + '">' + body + '</span>';
                            innerHtml += '<tr><td>' + span + '</td></tr>';
                            
                        });
                        innerHtml += '</tbody>';

                        let tableRoot = tooltipEl.querySelector('table');
                        tableRoot.innerHTML = innerHtml;
                    }

                    const position = context.chart.canvas.getBoundingClientRect();
                    const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                    tooltipEl.style.font = bodyFont.string;
                    tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                }
            }
        },



          
    }
    });
}

createMyChartLineThree();
 
if(myPieChartThreeDataForm) myPieChartThreeDataForm.addEventListener("update", createMyChartLineThree);

const ctxChartFour = document.getElementById('myChartFour').getContext('2d');
var myPieChartFourDataForm = document.querySelector("#charts-values-conversion");
var myChartLineFour;

function createMyChartLineFour(){
    if(!myPieChartFourDataForm) return;
    if(myChartLineFour !== undefined) myChartLineFour.destroy();
    var myPieChartFourData = new FormData(myPieChartFourDataForm);
    var myPieChartFourDataLabels = [];
    var myPieChartFourDataValues = [];
    for (const pair of myPieChartFourData.entries()){
        myPieChartFourDataLabels.push(pair[0]);
        myPieChartFourDataValues.push(pair[1]);
    }
    myChartLineFour = new Chart(ctxChartFour, {
        type: 'line',
        
            data: {
            labels: myPieChartFourDataLabels,
            interaction: {
                mode: 'nearest',
                intersect: false,
                axis: 'x'
              },
            datasets: [{ 
                lineTension: 0.3,
                pointRadius: 5,
                data: myPieChartFourDataValues,
                label: false,
                borderWidth: 1,
                borderColor: "rgba(255, 180, 47, 1)",
                backgroundColor: "rgba(222, 117, 94, 0.2)",
                fill: true,
                pointBorderColor: "#DE755E",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 2,
                }, 
            ]
            },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            viewMode: 1,
            dragMode: 'move',
            aspectRatio: 1,
            plugins: {
                legend: {
                    display: false
                 },
                tooltip: {
                    // Disable the on-canvas tooltip
                    enabled: false,

                    external: function(context) {
                        // Tooltip Element
                        let tooltipEl = document.getElementById('chartjs-tooltipFour');

                        // Create element on first render
                        if (!tooltipEl) {
                            tooltipEl = document.createElement('div');
                            tooltipEl.id = 'chartjs-tooltipFour';
                            tooltipEl.innerHTML = '<table></table>';
                            document.body.appendChild(tooltipEl);
                        }

                        // Hide if no tooltip
                        const tooltipModel = context.tooltip;
                        if (tooltipModel.opacity === 0) {
                            tooltipEl.style.opacity = 0;
                            return;
                        }

                        // Set caret Position
                        tooltipEl.classList.remove('above', 'below', 'no-transform');
                        if (tooltipModel.yAlign) {
                            tooltipEl.classList.add(tooltipModel.yAlign);
                        } else {
                            tooltipEl.classList.add('no-transform');
                        }

                        function getBody(bodyItem) {
                            return bodyItem.lines;
                        }

                        // Set Text
                        if (tooltipModel.body) {
                            const titleLines = tooltipModel.title || [];
                            const bodyLines = tooltipModel.body.map(getBody);

                            let innerHtml = '<thead>';

                            titleLines.forEach(function(title) {
                                innerHtml += '<tr><th>' + title + '</th></tr>';
                            });
                            innerHtml += '</thead><tbody>';

                            bodyLines.forEach(function(body, i) {
                                const colors = tooltipModel.labelColors[i];
                                let style = 'background:' + colors.backgroundColor;
                                style += '; border-color:' + colors.borderColor;
                                style += '; border-width: 1px';
                                const span = '<span style="' + style + '">' + body + '</span>';
                                innerHtml += '<tr><td>' + span + '</td></tr>';
                                
                            });
                            innerHtml += '</tbody>';

                            let tableRoot = tooltipEl.querySelector('table');
                            tableRoot.innerHTML = innerHtml;
                        }

                        const position = context.chart.canvas.getBoundingClientRect();
                        const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

                        // Display, position, and set styles for font
                        tooltipEl.style.opacity = 1;
                        tooltipEl.style.position = 'absolute';
                        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                        tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                        tooltipEl.style.font = bodyFont.string;
                        tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
                        tooltipEl.style.pointerEvents = 'none';
                    }
                }
            },
        }
    });
}

createMyChartLineFour();
 
if(myPieChartFourDataForm) myPieChartFourDataForm.addEventListener("update", createMyChartLineFour);