let querystring = require('querystring');

let value = querystring.escape("{user:heifade}");

console.log(value);

console.log(querystring.unescape(value));

console.log(querystring.parse('a=1&b=2&c=3'));
console.log(querystring.stringify({a:1,b:2}))