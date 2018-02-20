//FUNCTION LOOP// 
function anwserBox(answer, location) {
    let div = document.createElement("div");
    div.textContent = answer;
    document.getElementById(location).appendChild(div);
}
//#1
function add(x, y) {
    return x + y;
} anwserBox(add(2, 4), "d1");
//#2
function multiply(x, y) {
    let built = 0;
    for (var i = 0; i < y; i++){
        built = add(built, x);
    }
    return built;
    }
let built = multiply(6, 8); anwserBox(multiply(4, 4), "d2");
// //#3
function power(x, n) {
    let built2 = 1;
    for (var j = 0; j < n; j++){
        built2 = multiply(built2, x);
    }
    return built2;
}
let built2 = power(2, 8); anwserBox(power(2, 8), "d3");
// //#4

function factorial(n){
    let built3 = 1;
    for (var i = 1; i <= n; i++){
        built3 = multiply(built3, i);
    }
            return built3;
}
built3 = factorial(4); anwserBox(factorial(4), "d4");
// //#5
function fibonacci(built4){
        let x = 0;
        let y = 1;
    for (var i = 2; i <= built4; i++){
        fib =add(x,y);
        x=y;
        y=fib;
    }
        return x;
}
// console.log(fibonacci(8));
built4 = fibonacci(8); anwserBox(fibonacci(8), "d5");