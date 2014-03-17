var elimFalsyVals = function(myArr) {
	var falseOutPut =[];
	var trueOutPut = [];
	for (var i=0; i<myArr.length; i++){
		if (!myArr[i]){
			falseOutPut.push(myArr[i]);
			// console.log("FALSE",falseOutPut);
		} else {
			trueOutPut.push(myArr[i]);
			// console.log("TRUE",trueOutPut);
		};	
	};	
	return trueOutPut;	
};

var myArr = ["a",0,"0",1,false,"false","b","c",2,"","null",7,null,"undefined",undefined,8,"true",true,NaN,9,"NaN"];
console.log(elimFalsyVals(myArr));