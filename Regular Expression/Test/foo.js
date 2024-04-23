let str = 'table football';

let regex = new RegExp('foo*');
let globalRegex = new RegExp('foo*', 'g');

console.log(regex.test(str));
// Expected output: true
