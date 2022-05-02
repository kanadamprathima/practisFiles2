// class Animal{
//    	constructor(name,type,color){
//    		this.name = name;
//    		this.type = type;
//    		this.color = color;
//    	}
//    	sound(){
// 		console.log(`mooo I'm ${this.name} n my color is ${this.color} en ${this.type}`);

// 	}


// }
// class Mammal extends Animal{
// 	constructor(name,type,color){
// 		super(name,type,color)
// 	}
	
// }
// const cow = new Mammal("shelly", "cow", "brown");

//passbyvalue
//passby reference
let obj={a:'1',b:'j',c:'k'};
let clone = Object.assign({},obj);

obj.c = 6;
console.log(clone);