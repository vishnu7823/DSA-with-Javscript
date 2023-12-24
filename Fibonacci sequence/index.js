//problem: given a nuumber "n",find the first 'n' elements of the fibonacci sequence

//it is a sequence in which each number is sum of the preceding ones//
//f(2)=[0,1]
//f(5)=[0,1,1,2,3]

function fibonacci(n){
    const fib=[0,1] //declare array cpontaining only two elements
    for(let i=2;i<n;i++){  //for loop iterating the values
        fib[i]=fib[i-1]+fib[i-2] //stores index and value to the fib after iteration to display
    }
    return fib

}

console.log(fibonacci(2))//[0,1]
console.log(fibonacci(5)) //[0,1,1,2,3]
console.log(fibonacci(7))//[0,1,1,2,3,5,8]


//time complexity:
//big-O-O(n)