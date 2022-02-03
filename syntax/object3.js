// array, object : 데이터를 정리 정돈해주는 것들

function f1(){
    console.log(1+1);

}

// var i = if(true){console.log(1)}; // 오류 발생

var f1 = function(){
    console.log(1+1);

}

console.log(f1);

var a = [f];
a[0]();
var o = {
    func:f
}
o.func();