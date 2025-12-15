const fs = require('fs');
const path = process.argv[2];

if (!path) {
  console.error('Uso: node fix_questions.js <archivo>');
  process.exit(1);
}

let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /answers:\s*\[((?:\s*"[^"]*",?\s*)+)\]/g,
  (match, p1) => {
    const arr = p1
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.startsWith('"'))
      .map((ans, idx) => {
        let clean = ans.replace(/^"/, '').replace(/",?$/, '');
        const letter = String.fromCharCode(65 + idx);
        return `"${letter}. ${clean}"`;
      });
    return `answers: [${arr.join(', ')}]`;
  }
);

fs.writeFileSync(path, content);
console.log(`Archivo ${path} convertido correctamente.`);