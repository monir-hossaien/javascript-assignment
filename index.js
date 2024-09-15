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
console.log(isOdd(5))


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



// Function to lowercase the first letter of a string
function lowercaseFirstLetter(str){
    return str.charAt(0).toLowerCase() + str.slice(1);

}
console.log(lowercaseFirstLetter('Bangladesh'));




// Function to count the number of vowels in a string
function countVowels(str){
    const vowels = 'aeiouAEIOU';

    return Array.from(str).filter((char)=>vowels.includes(char)).length;

};
console.log(countVowels("Rabbil Hasan Rupom"));




// Function to find the average of an array of numbers
function findAverage (arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length

}
console.log(findAverage([20,30,50,10,40]));