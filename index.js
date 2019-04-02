#!/usr/bin/env node
const findup = require('findup-sync');
const pjson = require(findup('package.json'));
const chalk = require('chalk');
const error = chalk.white.bgRed.bold;
const success = chalk.white.bgGreen.bold;
require('dotenv').config();

const getEnvironmemntVariables = pjson.mandatoryEnvironmentVariables;

if (Array.isArray(getEnvironmemntVariables) === true) {
  getEnvironmemntVariables.forEach((variable) => {
    if (process.env[variable] === undefined) {
      console.log(error(`Environment variable not found ${variable}`));
      process.exit(1);
    }
  });
  console.log(success('Env file check passed'));
}
console.log(success('Env file check passed'));
