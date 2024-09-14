// Calculated difference between numbers
const calculateDifference = (a,b)=>{
    return Math.abs(a - b)
}

console.log(calculateDifference(10, 5))

// Checks if a number is odd
function isOdd(num) {
    if (num % 2 !== 0){
        return true
    }else{
        return false
    }
} 
console.log(isOdd(4))


//find smallest number in the Array
function findMin(number){
   return Math.min(...number);
}
console.log(findMin([20,10,45,34]));


// Function to filter out even numbers from an array
function filterEvenNumbers(numbers){
    return numbers.filter(num => num % 2 == 0);
}
console.log(filterEvenNumbers([3,5,6,2,7,8,30,55,60]));


// Function to sort an array of numbers in descending order
function sortArrayDescending(numbers){
    return numbers.sort((a,b)=> b - a );

}
console.log(sortArrayDescending([3,5,6,2,7,8,30,55,60]));


function lowercaseFirstLetter(str){
    return str.charAt(0).toLowerCase() + str.slice(1);

}
console.log(lowercaseFirstLetter('Bangladesh'))