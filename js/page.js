//Charts

let ctx = document.getElementById("monthlySales").getContext("2d");
let ctx2 = document.getElementById("deptSales").getContext("2d");
let yearlyLabel = document.getElementById("yearlyTotal");


let monthlySales = Array.of(500, 9000, 3000);
let monthlyLabels = Array.of("Jan", "Feb", "Mar");

let deptSales = Array.of(120, 13, 150);
let deptLables = Array.of("Hiking", "Running", "Hunting");

let yearlyTotal = 0;

function addYearlyTotal(x) {
   yearlyTotal = x + yearlyTotal
}

monthlySales.forEach(addYearlyTotal);

let janNums = Array.of(1300, 1000, 4200);
let febNums = Array.of(1100, 2000, 9000);
let marNums = Array.of(4000, 1000, 5000);
//let yearlyIncome = Array.of(addYearlyTotal(...janNums),addYearlyTotal( ...febNums),addYearlyTotal( ...marNums));

yearlyLabel.innerHTML = "$" + yearlyTotal;

function findOver1000() {
    let firstThousand = monthlySales.findIndex(element => element > 1000);
    alert(firstThousand);
}
function resetNum() {
    monthlySales.fill(0);
    monthlySalesChart.update();

}

//Bar

let monthlySalesChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: monthlyLabels,
        datasets: [{
            label: "# of sales",
            data:monthlySales ,
            backgroundColor: [
                "rgba(256, 167, 100, 1)",
                "rgba(75, 166, 223, 1)",
                "rgba(239, 118, 122, 1)",


            ],
        }]
    }
});


let deptSalesChart = new Chart(ctx2, {
    type: "pie",
    data: {
        labels: deptLables,
        datasets: [{
            label: "# of sales",
            data: deptSales,
            backgroundColor: [
                "rgba(238, 184, 104, 1)",
                "rgba(75, 166, 223, 1)",
                "rgba(239, 118, 122, 1)",


            ],
        }]
    }
});