// 1、回调函数
function add(num1, num2, callback){
	var sum = num1 + num2;
	callback(sum);
}

function print(num){
	console.log(num);
}

add(1, 2, print);		//=>3

// 2、匿名回调函数
function add(num1, num2, callback){
	var sum = num1 + num2;
	callback(sum);
}

add(1, 2, function(sum){
	console.log(sum);		//=>3
});