const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

// modify HelloWorldVerifier contract

let content_hello = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped_hello = content_hello.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped_hello = bumped_hello.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped_hello);

// modify Multiplier3 contract

let content_m3 = fs.readFileSync("./contracts/Multiplier3.sol", { encoding: 'utf-8' });
let bumped_m3 = content_m3.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped_m3 = bumped_m3.replace(verifierRegex, 'contract Multiplier3');

fs.writeFileSync("./contracts/Multiplier3.sol", bumped_m3);

// modify _plonkMultiplier3 contract

let content_pm3 = fs.readFileSync("./contracts/_plonkMultiplier3.sol", { encoding: 'utf-8' });
let bumped_pm3 = content_pm3.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped_pm3 = bumped_pm3.replace(verifierRegex, 'contract _plonkMultiplier3');

fs.writeFileSync("./contracts/_plonkMultiplier3.sol", bumped_pm3);
