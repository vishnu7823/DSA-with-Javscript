//problem given an integer "n" find the factorial of that integer

//Factorial of a non negative integer 'n' denoted n!,is the product of all positive integers less than or equal to n

//factorial of zero is 1
//factorial(5)=5*4*3*2*1=120

function factorial(n){
     let result=1;
     for(let i=2;i<=n;i++){
        result=result* i
     }
return result
}
console.log(factorial(0));
console.log(factorial(2))
console.log(factorial(5))
console.log(factorial(7))

//time complexity
//O(n)