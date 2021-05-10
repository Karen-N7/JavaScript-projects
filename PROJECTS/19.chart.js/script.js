async function getData() {
    var xs = []
    var ys = []
    var response = await fetch('ZonAnn.Ts+dSST.csv');
    var data = await response.text();
    var table = data.split('\n').slice(1)
    table.forEach(row => {
        column = row.split(',')
        var year = column[0];
        var temp = column[1]
        xs.push(year);
        ys.push(temp) //parseFloat(temp) + 14
            // console.log(year, temp)
    })
    return { xs, ys }
}
async function ChartIt() {
    var data = await getData()
    var ctx = document.querySelector('.canvas').getContext('2d')
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xs,
            datasets: [{
                label: 'average temperature',
                data: data.ys,
                backgroundColor: '#3498db',
                hoverBackgroundColor: '#333',
                fill: false,
                borderWidth: '1',
                borderColor: '#000',
                // hoverBorderWidth: '3',
                // hoverBorderColor: '#000'
            }]
        },
        options: {
            title: {
                display: true,
                text: 'bla bla',
                fonSize: 25
            }
        }
    })
}
ChartIt()

