var args = process.argv;
console.log(args[2]);
console.log('A');
console.log('B');
if(args[2] === '1'){
    console.log('C1');
} else{
    console.log('C2');
}
console.log('D');
/*
  [
    'C:\\Program Files\\nodejs\\node.exe',// node.js 런타임이 어디에 위치해 있는지
    'C:\\Users\\tmdej\\Node.js\\syntax\\conditional.js', // 실행시킨 파일의 경로
    'tmdejr' // 내가 입력한 입력값
  ]
*/