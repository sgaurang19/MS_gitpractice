//
arr = [1, 5, 7, -1, 5 ]; 
var sum = 12;
function getPairsCount(arr, sum)
{

var count = 0; // Initialize result
// Consider all possible pairs and check their sums
for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
        if ((arr[i] + arr[j]) == sum)
        {
        console.log("Pairs "+ arr[i] +" "+ arr[j]);
        count++;
        }
    }
        
    }
    
    console.log("Count of pairs is: "+ count);
}

getPairsCount(arr,sum);