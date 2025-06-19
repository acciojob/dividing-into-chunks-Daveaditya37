function divide(arr,n){
	
const result=[];
let subarray=[];
let sum=0;
for(let num of arr){
	if(sum + num >n){
		result.push(subarray);
		subarray=[];
		sum=0;
	}
	subarray.push(num);
	sum += num;
}
if(subarray.length>0){
	result.push(subarray);
}
	return result;
}
const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));