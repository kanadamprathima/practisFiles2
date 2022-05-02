const array=[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function clean(arr) {
	let i = 0;
	let pos = 0;
	let duplicateArray = [];
	let newArray = [];
	arr.sort((a, b) => a - b);
	while (i < arr.length) {
		if ( arr[0] === arr[1] ) {
			pos = arr.lastIndexOf(arr[0]) + 1;
			duplicateArray = arr.splice(0, pos);
			newArray.push(duplicateArray);
		} else {
			newArray.push(arr[0]);
			arr.shift();
		}
	}
	return newArray;
}
console.log(clean([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]));