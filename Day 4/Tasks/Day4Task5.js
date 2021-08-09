//
function getUnion(a, n, b, m) {
 
    
    var s = new Set();

    for (let i = 0; i < n; i++)
        s.add(a[i]);

    for (let i = 0; i < m; i++)
        s.add(b[i]);
    console.log("Number of elements after union operation: "+ s.size);
   console.log("The union set of both arrays is :");

    var arr = [];
    for (let itr of s)
        arr.push(itr);
    arr.sort(function (a, b) { return a - b; })
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + " ");
    }
}

// Driver Code

let a = [1, 2, 5, 6, 2, 3, 5, 7, 3];
let b = [2, 4, 5, 6, 8, 9, 4, 6, 5, 4,98, 23423];
var a_len = a.length;
var b_len = b.length; 
getUnion(a, a_len, b, b_len);