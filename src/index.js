function eval() {
    // Do not use eval!!!
    return;
}

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



function expressionCalculator(expr) {
    let str = expr.replace( /\s/g, '');
    let arr = str.split(/(\D)/);

    let stack = 0;
    let bracketsCount = 0;
    
        for(let i=0; i<arr.length; i++){
            if(arr[i]==='('){
                bracketsCount++;
            }
            if(arr[i]===')'){
                bracketsCount--;
            } 
        }
        if(bracketsCount != 0){
            throw 'ExpressionError: Brackets must be paired';   
        }
    if(expr.match(/\(/g) != null) { 
        let stackIndex;
        for(let i=arr.length-1; i>=0; i--){
            if (arr[i]==='('){
            let indexOpen=i;
                
                let stackArr=[];
                for (let k=i+1; k<arr.length; k++){
                    if (arr[k]==='('){
                        stackIndex=indexOpen;    
                        break;
                    }
                    if (arr[k]===')'){    
                    stackArr = arr.slice(i+1,k)
                    let x = calc(stackArr);
                    arr.splice(i-1, k-i+3, x);
                    console.log(stackIndex);
                    
                    }
                
                }
            }
        }
    }

    function calc(arr){
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
        return arr[0]; 
    }
    
    console.log(arr);
    let result =+calc(arr);    
    
    return result;
}

module.exports = {
    expressionCalculator
}
