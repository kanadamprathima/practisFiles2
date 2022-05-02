// var age = prompt("What is your age?");
function checkDriverAge(age) {
	//var age= prompt("enter age");
console.log(age)
	// body...
if (Number(age) < 18) {
	console.log("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) {
	console.log("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	console.log("Congratulations on your first year of driving. Enjoy the ride!");
}
}

checkDriverAge(18);
var checkDriverAge2=checkDriverAge(24);


// function sayHello(argument) {
// 	// body...
// 	console.log("Hello");
// }
// sayHello();

// var sayBye=function(){
// 	console.log("bye");

// }
// sayBye();
 

//  function songs(moviesong) {
//  	// body...
//  	console.log(moviesong);
//  }

//  songs("song11");
//  songs("song12");
