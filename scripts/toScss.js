const fs = require('fs');
const path = require('path');

const readFile = function(dir) {
  var result = [];
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    let info = {};
    info.fileName = file;
    file = dir + '/' + file;
    info.path = path.resolve(__dirname, file);
    var stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      result = result.concat(readFile(file));
    } else {
      if (path.extname(file) === '.less') {
        result.push(info);
      }
    }
  });
  console.log(result);
  return result;
};
function rename() {
  readFile('components').forEach(file => {
    fs.rename(file.path, file.path.replace('.less', '.scss'), err => console.log(err));
  })
}
rename();
