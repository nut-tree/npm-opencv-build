const fs = require("fs");
const filename = "./package.json";
const packageJson = require(filename);

const plattformPackageName = `${packageJson.name}-${process.platform}`;
packageJson.name = plattformPackageName;

try {
  fs.writeFileSync(filename, JSON.stringify(packageJson, null, 2));
} catch (err) {
  console.log(err);
  process.exit(-1);
}
console.log(`Patched package name to '${plattformPackageName}'`);
