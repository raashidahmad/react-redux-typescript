import { useState } from "react";

type ObjectOne = {
    one: number,
    two: number,
    three: number
};

type ObjectTwo = {
    name: string,
    age: number
};

const JSConcepts = () => {
    const [itemOne, setItemOne] = useState<ObjectOne>({one: 0, two: 0, three: 0});
    const [itemTwo, setItemTwo] = useState<ObjectTwo>({name: "", age: 0});

    const destructureItems = () => {
        const [oneValue, twoValue, threeValue, ...rest] = [1, 2, 3, 4, 5];
        let obj: ObjectOne = {one: oneValue, two: twoValue, three: threeValue};
        

        setItemOne(obj);

        const { name, age, ...details } = {name: "Rashid", age: 35, qualification: "MS", experience: 10};
        let objTwo = {
            name: name,
            age: age
        };
        setItemTwo(objTwo);

        console.log("Spread operator usage...");
        //const originalArray = [1, 2, 3];
        //const newArray = [...originalArray];
        const obj1 = { a: 1, b: 2 };
        const obj2 = { c: 3, d: 4 };
        const mergedObj = { ...obj1, ...obj2 };
        console.log(`Result of spread operator merge is:`);
        console.dir(mergedObj);

        //Currying, where a function that takes multiple arguments is converted into a series of functions taking a single argument
        const multiply = (a: number) => (b: number) => a * b;
        const multiplyByTwo = multiply(2);
        const result = multiplyByTwo(5);
        console.log(`Result of multiply is: ${result}`);

        //Memoization
        const memoizedFibonacci = (function () {
            const cache: any = {};

            return function fib(n: number) {
                if (n in cache) return cache[n];
                if (n <= 1) return n;

                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            };
        })();
        console.log(`Fibonacci result is: ${memoizedFibonacci(5)}`);

        //Function composition
        const add = (x: number) => x + 1;
        const multiplyFunc = (y: number) => y * 2;
        const compose = (...fns: any[]) => (x: number) => fns.reduceRight((acc, fun) => fun(acc), x);
        const addAndMultiply = compose(add, multiplyFunc);
        console.log(`Result of add and multiply ${addAndMultiply(3)}`);

        
    }

    return <>
        <h4>Destructuring Assignment</h4>
        <p>
            Object one is: {itemOne.one}
        </p>
        <p>
            Person name is: {itemTwo.name} and age is: {itemTwo.age}
        </p>
        <button onClick={destructureItems}>Destructure Items</button>
    </>;
}

export default JSConcepts;

/*
Promises and async await
// Using Promises
function fetchData() {
  return new Promise((resolve, reject) => {
    // Asynchronous operation, e.g., fetching data from an API
    // resolve(data) or reject(error) based on the operation result
  });
}

// Using Async/Await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

//Closures
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
*/