var button = document.getElementById("clicked");
var input= document.getElementById("userinput");
var ul=document.querySelector("ul");

button.addEventListener("click",function () {
	// body...
	// console.log("click is working");
	
	console.log(ul.childnodes);
	if(input.value.length>0){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		//var btn= document.getElementById("remove");
		
		var btn=document.createElement("button");
		btn.innerHTML ="delete";
		li.appendChild(btn);
		btn.addEventListener("click",function () {
			// body...
			console.log("click working inside btn");
			li.remove();
			btn.remove();


		})

		input.value="";

	}


})