let path = require('path');

console.log(__filename, path.basename(__filename), path.basename(__filename, '.js'));



console.log(path.dirname(__filename), path.dirname(path.dirname(__filename)));

console.log(path.extname(__filename), path.extname('c:/a/b/a.index'));
console.log(path.isAbsolute(path.sep + 'a.txt'));

console.log(path.join('a','..','b','c.js'), path.join(''));

console.log(path.relative("c:/1/2/3/4/a.txt", "c:/1/2/b.txt"), path.relative("c:/1/2", "c:/1/2"));

console.log(path.resolve("1/2", "3/4", "5/6"));

console.log(path.sep);

