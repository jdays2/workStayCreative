'use strict';

const ctxChart = document.getElementById('myChart');
if (ctxChart) {
	const myChartLine = new Chart(ctxChart.getContext('2d'), {
		type: 'line',
		data: {
			labels: [
				'03.22',
				'04.22',
				'05.22',
				'06.22',
				'07.22',
				'08.22',
				'09.22',
				'10.22',
				'11.22',
			],
			datasets: [
				{
					data: [10000, 20000, 30000, 80000, 30000, 20000, '', '', '', ''],
					label: 'Pending',
					borderWidth: 1,
					borderColor: 'rgba(255, 180, 47, 1)',
					backgroundColor: 'rgba(222, 117, 94, 0.2)',
					fill: true,
				},
			],
		},
	});
}

<<<<<<< HEAD
const ctx = document.getElementById('myChart');
const myPieChart = new Chart(ctx, {
    	type: 'line',
	
		data: {
		labels: ["03.22", "04.22", "05.22", "06.22", "07.22", "08.22", "09.22", "10.22", "11.22", "07.22", "08.22", "09.22", "10.22", "11.22"],
		interaction: {
			mode: 'nearest',
			intersect: false,
			axis: 'x'
		  },
		datasets: [{ 
			lineTension: 0.3,
			pointRadius: 5,
			data: [10000,102000,330000,20000,30000,50000,30000,60000,"",""],
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
=======
<<<<<<< HEAD
const ctxChart = document.getElementById('myChart').getContext('2d');
const myChartLine = new Chart(ctxChart, {
	type: 'line',
	data: {
	  labels: ["03.22", "04.22", "05.22", "06.22", "07.22", "08.22", "09.22", "10.22", "11.22"],
	  datasets: [{ 
		 
		 
		  data: [10000,20000,30000,80000,30000,20000,"","","",""],
		  label: "Pending",
		  borderWidth:1,
		  borderColor: "rgba(255, 180, 47, 1)",
		  backgroundColor: "rgba(222, 117, 94, 0.2)",
		  fill: true,
		}, 
	  ]
	},

	 options: {
>>>>>>> d72289dd (feat: add Dmitry's files and produce some fixes)
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
<<<<<<< HEAD
 





const ctxChartTwo = document.getElementById('myChartTwo').getContext('2d');
const myChartLineTwo = new Chart(ctxChartTwo, {
    type: 'line',
	
    data: {
    labels: ["03.22", "04.22", "05.22", "06.22", "07.22", "08.22", "09.22", "10.22", "11.22", "07.22", "08.22", "09.22", "10.22", "11.22"],
    interaction: {
        mode: 'nearest',
        intersect: false,
        axis: 'x'
      },
    datasets: [{ 
        lineTension: 0.3,
        pointRadius: 5,
        data: [10000,102000,330000,20000,30000,50000,30000,60000,"",""],
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
                let tooltipEl = document.getElementById('chartjs-tooltipTwo');

                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltipTwo';
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



const ctxChartThree = document.getElementById('myChartThree').getContext('2d');
const myChartLineThree = new Chart(ctxChartThree, {
    type: 'line',
	
    data: {
    labels: ["03.22", "04.22", "05.22", "06.22", "07.22", "08.22", "09.22", "10.22", "11.22", "07.22", "08.22", "09.22", "10.22", "11.22"],
    interaction: {
        mode: 'nearest',
        intersect: false,
        axis: 'x'
      },
    datasets: [{ 
        lineTension: 0.3,
        pointRadius: 5,
        data: [10000,102000,330000,20000,30000,50000,30000,60000,"",""],
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


const ctxChartFour = document.getElementById('myChartFour').getContext('2d');
const myChartLineFour = new Chart(ctxChartFour, {
	type: 'line',
	
		data: {
		labels: ["03.22", "04.22", "05.22", "06.22", "07.22", "08.22", "09.22", "10.22", "11.22", "07.22", "08.22", "09.22", "10.22", "11.22"],
		interaction: {
			mode: 'nearest',
			intersect: false,
			axis: 'x'
		  },
		datasets: [{ 
			lineTension: 0.3,
			pointRadius: 5,
			data: [10000,102000,330000,20000,30000,50000,30000,60000,"",""],
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
=======
=======
const ctxChartTwo = document.getElementById('myChartTwo');
if (ctxChartTwo) {
	const myChartLineTwo = new Chart(ctxChartTwo.getContext('2d'), {
		type: 'line',
		data: {
			labels: [
				'03.22',
				'04.22',
				'05.22',
				'06.22',
				'07.22',
				'08.22',
				'09.22',
				'10.22',
				'11.22',
			],
			datasets: [
				{
					data: [10000, 20000, 30000, 80000, 30000, 20000, '', '', '', ''],
					label: 'Pending',
					borderWidth: 1,
					borderColor: 'rgba(255, 180, 47, 1)',
					backgroundColor: 'rgba(222, 117, 94, 0.2)',
					fill: true,
				},
			],
		},
	});
}
>>>>>>> a1fd0222 (feat: add Dmitry's files and produce some fixes)

const ctxChartThree = document.getElementById('myChartThree');
if (ctxChartThree) {
	const myChartLineThree = new Chart(ctxChartThree.getContext('2d'), {
		type: 'line',
		data: {
			labels: [
				'03.22',
				'04.22',
				'05.22',
				'06.22',
				'07.22',
				'08.22',
				'09.22',
				'10.22',
				'11.22',
			],
			datasets: [
				{
					data: [10000, 20000, 30000, 80000, 30000, 20000, '', '', '', ''],
					label: 'Pending',
					borderWidth: 1,
					borderColor: 'rgba(255, 180, 47, 1)',
					backgroundColor: 'rgba(222, 117, 94, 0.2)',
					fill: true,
				},
			],
		},
	});
}
const ctxChartFour = document.getElementById('myChartFour');
if (ctxChartFour) {
	const myChartLineFour = new Chart(ctxChartFour.getContext('2d'), {
		type: 'line',
		data: {
			labels: [
				'03.22',
				'04.22',
				'05.22',
				'06.22',
				'07.22',
				'08.22',
				'09.22',
				'10.22',
				'11.22',
			],
			datasets: [
				{
					data: [10000, 20000, 30000, 80000, 30000, 20000, '', '', '', ''],
					label: 'Pending',
					borderWidth: 1,
					borderColor: 'rgba(255, 180, 47, 1)',
					backgroundColor: 'rgba(222, 117, 94, 0.2)',
					fill: true,
				},
			],
		},
	});
}
>>>>>>> d72289dd (feat: add Dmitry's files and produce some fixes)
