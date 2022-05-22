const fs   = require('fs');
const path = require('path');

const UNICODE_FILE = path.resolve(__dirname, './UnicodeData.txt');
const DIST_FOLDER  = path.resolve(__dirname, '../dist');

function getUnicodeNames (shouldFormat) {
  let output = [];

  const lines = fs.readFileSync(UNICODE_FILE, 'utf8').trim().split('\n');

  lines.forEach((line) => {
    const data    = line.split(';');
    const code    = data[0];
    const name    = data[1];
    const altName = data[10];

    output.push(`"${code}":"${name}${altName ? ` / ${altName}` : ''}"`);
  });

  if (shouldFormat) {
    return `{
  ${output.join(',\n  ')}
}`;
  } else {
    return `{${output.join(',')}}`;
  }
}

function main () {
  if (fs.existsSync(DIST_FOLDER)){
    fs.rmSync(DIST_FOLDER, { recursive: true, force: true });
  }

  fs.mkdirSync(DIST_FOLDER);

  fs.writeFileSync(path.resolve(__dirname, '../dist/unicode-names.json'), getUnicodeNames(true));
  fs.writeFileSync(path.resolve(__dirname, '../dist/unicode-names.min.json'), getUnicodeNames());
}

main();
