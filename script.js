const arr = [1, 2, 3, 4, 1, 0, 2, 2];
let result=[];
let subarray=[];
let sum=0;
const divide = (arr, n) => {
  // Write your code here
		for (let i = 0; i < arr; i++) {
		
	}
	if(sum+arr[i]>n) {
		result.push(subarray);
		subarray=[];
		sum=0;
	}
	subarray.push(arr[i]);
	sum+=arr[i];
}
if (subarray.length>0) {
	result.push(subarray);
}
return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));