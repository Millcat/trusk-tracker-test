const fs = require("fs");
const xml2js = require("xml2js");

const parseXml = path =>
  new Promise((resolve, reject) => {
    const parser = new xml2js.Parser();
    fs.readFile(`${__dirname}${path}`, (err, data) => {
      parser.parseString(data, (parseErr, result) => {
        if (parseErr) {
          return reject(parseErr);
        }
        return resolve(result);
      });
    });
  });

const timeout = (ms = 3000) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

module.exports = {
  parseXml,
  timeout
};
