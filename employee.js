var sal1=10;
var sal2=20;
var sal3=30;
var sal4=40;
var sal5=50;

var employeeName= prompt("please enter employee name");
console.log(employeeName);
var employeeName=employeeName.toUpperCase();
//var employeeN=employeeName.touppercase();
console.log(typeof(employeeName));
switch(employeeName)

{
	case "NAGA":
	console.log(sal1);
	break;
	case "PRATHIMA":
	console.log(sal2);
	break;
	case "DHANVIN":
	console.log(sal3);
	break;
	case "4":
	console.log(sal4);
	break;
	case "5":
	console.log(sal5);
	break;
	default:
	console.log("please enter valid employeeNumber");
	break;
}


