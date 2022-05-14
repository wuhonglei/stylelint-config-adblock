// 从 data/easylistchina+easylist.txt 文件中提取 class selector，并存放到 src/classSelector.js

const fs = require('fs');
const path = require('path');

const filepath = {
  // easylist 数据来源：https://easylist-downloads.adblockplus.org/easylistchina+easylist.txt
  easylist: path.resolve(
    __dirname,
    '../data/easylistchina+easylist_20220512.txt'
  ),
  output: path.join(__dirname, '../lib/classSelector.js')
};

function getFileContentList(src) {
  const content = fs.readFileSync(src, {
    encoding: 'utf8',
    flag: 'r'
  });
  return content || '';
}

function writeContentToFile(rowList) {
  const content = `module.exports = ${JSON.stringify(rowList, null, 2)};\n`;
  fs.writeFileSync(filepath.output, content, { encoding: 'utf8' });
}

function isClassSelector(str) {
  const pattern = /^(##)(\.)([a-z])/;
  if (!pattern.test(str)) {
    return false;
  }

  if (str.includes('yahoo')) {
    return false;
  }

  return true;
}

function extractClassSelector(str) {
  return str.replace(/^##/, '');
}

// --------------------------- //
function main() {
  const content = getFileContentList(filepath.easylist);
  const rowList = content.split('\n');
  const selectorList = rowList
    .filter(isClassSelector)
    .map(extractClassSelector);

  writeContentToFile(selectorList);
}

main();
