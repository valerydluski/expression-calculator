function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let result=0;
    let str = expr.replace( /\s/g, '');
    let arr = str.split(/(\D)/);
    function multipl(a,b){
        return (+a)*(+b);
    }
    function sum(a,b){
        return (+a)+(+b);
    }
    function div(a,b){
        if (+b===0){
            throw 'TypeError: Division by zero.';
        }
        return (+a)/(+b);
    }
    function subtr(a,b){
        return (+a)-(+b);
    }
    for(let i=0; i<arr.length; i++){
        if (arr[i]==='*') {
            result+=multipl(arr[i-1],arr[i+1]);
        }
        if (arr[i]==='+') {
            result+=sum(arr[i-1],arr[i+1]);
        }
        if (arr[i]==='/') {
            result+=div(arr[i-1],arr[i+1]);
        }
        if (arr[i]==='-') {
            result+=subtr(arr[i-1],arr[i+1]);
        }
    }
    console.log(result);
    return result;

}

module.exports = {
    expressionCalculator
}