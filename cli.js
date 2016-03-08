#!/usr/bin/env node

var path = require('path');
var yml = require('yamljs');
var program = require('commander');
var shuffle = require('./lib/shuffle');
var pkg = require('./package');

program
  .version(pkg.version)
  .usage('shuffle -t [items...] [item length]')
  .option('-f, --file [filename]', 'Load the file, the shuffle of multiple items')
  .option('-t, --text [str]', 'Text items shuffle, ("text1|text2...")')
  .option('-n, --num [number]')
  .parse(process.argv);

if (program.file){
  var filename = path.join(process.cwd(), program.file);
  var array = yml.load(filename);
  var result = shuffle(array, parseInt(program.num, 10));
  console.log(result);
}

if (program.text){
  var array = (program.text + '').split('|');
  var result = shuffle(array, parseInt(program.num, 10));
  console.log(result);
}
