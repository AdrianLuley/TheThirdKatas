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
    for (var x = 0; x < 6; x++){
        built = add(built, y);
    }
    return built;
    }
let built = multiply(6, 8); anwserBox(multiply(6, 8), "d2");
// //#3
function power(x, n) {
    let built2 = 0;
    for (var x = 0; x < 32; x++){
        built2 = add(built2, n);
    }
    return built2;
}
let built2 = power(2, 8); anwserBox(power(2, 8), "d3");
// //#4
function factorial(built3){
    for (var i = built3 - 1; i >= 1; i--){
        built3 *= i;
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