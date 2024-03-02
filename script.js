const makeChange = (c) => {
  // your name here
	let value = Number(c);
	let result = { q: 0, d: 0, n: 0, p:0 }
	while(value>0){
		if(value>=25){
			let value1 = Math.floor(value/25);
			value = value%25;
			result["q"]=value1;
		}
		if(value>=10){
			let value1 = Math.floor(value/10);
			result["d"]=value1;
			value = value%10;
		}
		if(value>=5){
			let value1 = Math.floor(value/5);
			result["n"]=value1;
			value = value%5;
		}
		if(value>=1){
			let value1 = Math.floor(value/1);
			result["p"]=value1;
			value = value%1;
		}
	}
	return result;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
