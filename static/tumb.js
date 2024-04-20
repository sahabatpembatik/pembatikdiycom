const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

let directory_name = 'inputheader';

let filenames = fs.readdirSync(directory_name);

filenames.forEach((file) => {
  const fileFormat = getExtension(file);
  const fileName = getName(file);
  if (fileFormat === 'svg') {
    console.log('svg not processed with sharp');
    return;
  }

  let sh = sharp('./inputheader/' + file);
  if (fileFormat === 'jpg' || fileFormat === 'jpeg') {
    sh = sh.jpeg({ quality: 80 });
    sh.resize({
      width: 320,
      height: 180,
      fit: sharp.fit.cover,
      position: sharp.strategy.entropy
    });
  } else if (fileFormat === 'png') {
    sh = sh.png({ quality: 70 });
    sh.resize({
      width: 320,
      height: 180,
      fit: sharp.fit.cover,
      position: sharp.strategy.entropy
    });
  }
  sh.toFormat("webp", { lossless: false, quality: 60, alphaQuality: 50 });
  sh.toFile('img/tumbnail/' + fileName  + 'webp', function (err, info) {
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
};
function getName(filename) {
  let ext = path.basename(filename || '', 'jpg');
  return ext;
};
