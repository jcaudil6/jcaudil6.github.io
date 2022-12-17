people = [];
money = [];
var money = function (id) { return document.getElementById(id); };
window.onload = function () {
    document.getElementById("display_results").onclick = displayResults;
    document.getElementById("add_salary").onclick = addSalary;
    document.getElementById("display_salary").onclick = displaySalary;
};
function addSalary() {
    var input1 = document.getElementById("people").value;
    var input2 = document.getElementById("salary").value;
    if (input2 > 150 || input2 < 10 || input2 == "") {
        alert("please re-enter a name and a valid salary");
        input2 = "";
    }
    else {
        input2 = parseInt(input2);
        if (people.includes(input1)) {
            var index = people.indexOf(input1);
            money[index] = input2;
        }
        else {
            people.push(input1);
            money.push(input2);
        }
        money("money").innerHTML = "";
        money("people").focus();
    }
}
function displayResults() {
    var avg = 0;
    var sum = 0;
    var high;
    var max = 0;
    for (i = 0; i < money.length; i++) {
        sum += money[i];
    }
    avg = (sum / money.length);

    for (j = 0; j < money.length; j++) {
        if (money[j] > max) {
            max = money[j];
            high = j;
        }
    }
    money("results").innerHTML = "<h2>Results</h2>" + "<p>Average salary is " + avg + " thousand"
        + "</p>" + "<p>The highest salary was for " + people[high] + " with a salary of " + max + "</p>";

}
function displaySalary() {
    var tables_html = "";
    tables_html += "<tr><th>People</th> <th>Salary</th></tr>";
    for (k = 0; k < money.length; k++) {
        tables_html += "<tr><td>" + people[k] + "</td><td>" + money[k] +
            " k</td></tr>";
    }
    tables_html += "</table>";
    $("results_table").innerHTML = "<h2>Salaries</h2>" + tables_html;
}