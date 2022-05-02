var css= document.querySelector("h3");
var color1= document.querySelector("input[name='color1']");
console.log(color1);
var color2=document.querySelector("input[name='color2']");
console.log(color2);

var body=document.getElementById("gradient");

color1.addEventListener("input",function () {
console.log("inside event-color1");
body.style.background = "linear-gradient(to right," +color1.value+ "," +color2.value+ ")";
css.textContent = body.style.background + ";";

}) 	

color2.addEventListener("input", function(){
	console.log("inside event-color2");
	body.style.background = "linear-gradient(to right," +color1.value+ "," +color2.value+ ")";

})
var button =document.getElementById("colornum");
button.addEventListener("click",function(){
	console.log(color1.value);
	console.log(color2.value);
	css.textContent = +color1.value , +color2.value ;

})