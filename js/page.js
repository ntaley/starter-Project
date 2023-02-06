//Charts

let ctx = document.getElementById("monthlySales").getContext("2d");
let ctx2 = document.getElementById("deptSales").getContext("2d");
let yearlyLabel = document.getElementById("yearlyTotal");


let monthlySales = Array.of(120, 1300, 150);
let monthlyLabels = Array.of("Jan", "Feb", "Mar");

let deptSales = Array.of(120, 13, 150);
let deptLables = Array.of("Hiking", "Running", "Hunting");

let janNums = Array.of(120, 13000, 2200);
let febNums = Array.of(120, 13000, 2200);
let marNums = Array.of(120, 13000, 2200);

function addYearlyIncome(q,w,e) {
   return q + w + e
}

let yearlyIncome = Array.of(addYearlyIncome(...janNums),addYearlyIncome( ...febNums),addYearlyIncome( ...marNums));
let total = addYearlyIncome(...yearlyIncome)
yearlyLabel.innerHTML = "$" + total;

function find1000() {
    let findThousand = monthlySales.find(element => element > 1000);
    alert(findThousand);
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
                "rgba(255, 0, 100, 1)",
                "rgba(239, 100, 0, 1)",
                "rgba(239, 50, 50, 1)",


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
                "rgba(239, 118, 122, 1)",
                "rgba(239, 118, 188, 1)",
                "rgba(239, 118, 0, 1)",


            ],
        }]
    }
});