// 배열
var members = ['seungdeok', 'sdk', 'hi'];
console.log(members[1]);
var i = 0;
while(i < members.length){
    console.log('array loop', members[i]);
    i += 1;
}

// 객체
var roles = {
    'programmer' : 'seungdeok',
    'designer' : 'sdk',
    'test' : 'hi'
}
console.log(roles.designer);

for(var key in roles){
    console.log('object => ', key, 'value => ', roles[key]);
}