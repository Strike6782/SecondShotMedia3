const fs = require('fs');
const path = require('path');

const outDir = path.resolve('out');
const codeDir = path.resolve('code');

// Delete existing 'code' directory if it exists
if (fs.existsSync(codeDir)) {
  fs.rmSync(codeDir, { recursive: true, force: true });
}

// Rename 'out' to 'code'
if (fs.existsSync(outDir)) {
  fs.renameSync(outDir, codeDir);
  console.log('Successfully renamed "out" directory to "code"');
} else {
  console.log('Error: "out" directory not found');
}
