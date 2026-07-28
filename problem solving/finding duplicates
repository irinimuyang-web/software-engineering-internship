//approach:i loop through the array and count how many times each number appears
//if an element appears more than once,i add it to a new array which i will call duplicates array.
let  numbers=[2,3,4,5,2,3,6,7,8,9,10,1,2];
let duplicates=[];
for(let i=0;i<numbers.length;i++){
    if(numbers.indexOf(numbers[i])!==i && duplicates.indexOf(numbers[i])===-1){
        duplicates.push(numbers[i]);
    }
}
console.log(duplicates);