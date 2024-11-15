const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

let directory_name = 'input';

let filenames = fs.readdirSync(directory_name);

filenames.forEach((file) => {
  const fileFormat = getExtension(file);
  if (fileFormat === 'svg') {
    console.log('svg not processed with sharp');
    return;
  }

  let sh = sharp('./input/' + file);
  if (fileFormat === 'jpg' || fileFormat === 'jpeg') {
    sh = sh.jpeg({ quality: 70 });
    sh.resize({
      width: 600,
      fit: sharp.fit.cover,
      position: sharp.strategy.entropy
    });
  } else if (fileFormat === 'png') {
    sh = sh.png({ quality: 80 });
    sh.resize({
      width: 600,
      fit: sharp.fit.cover,
      position: sharp.strategy.entropy
    });
  } else if (fileFormat === 'gif') {
    sh = sh.gif({ quality: 70 });
  }

  sh.toFile('output/' + file, function (err, info) {
    console.log(info);
    if (err) {
      console.log('error in image optimization');
      return;
    }
  });
});

function getExtension(filename) {
  let ext = path.extname(filename || '').split('.');
  return ext[ext.length - 1];
}