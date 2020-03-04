function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
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
    let stack = 0;
    for(let i=0; i<arr.length; i++){
        if (arr[i]==='*') {
            let stack = multipl(arr[i-1],arr[i+1]); 
            arr.splice(i-1, 3, stack);
            i-=1;   
        }
        if (arr[i]==='/') {
            let stack = div(arr[i-1],arr[i+1]); 
            arr.splice(i-1, 3, stack);
            i-=1;    
        }
    }
    
     
    for(let i=0; i<arr.length; i++){
        if (arr[i]==='+') {
            let stack = sum(arr[i-1],arr[i+1]); 
            arr.splice(i-1, 3, stack);   
            i-=1;         
        }
        if (arr[i]==='-') {
            let stack = subtr(arr[i-1],arr[i+1]); 
            arr.splice(i-1, 3, stack); 
            i-=1;   
        }
    } 
    
     
    let result =arr[0];    
    
    return result;

}

module.exports = {
    expressionCalculator
}