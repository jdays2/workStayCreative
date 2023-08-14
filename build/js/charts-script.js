'use strict';


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
});

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
