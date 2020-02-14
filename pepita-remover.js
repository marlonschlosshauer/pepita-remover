#!/usr/bin/env node
const process = require('process');
const fs = require('fs');

// TODO: Fix whitespace that's left
var default_pattern=/(class=\".*?)(pepita.*?)([\s]|[\"])/g

function load(path){
	fs.readFile(path, 'utf8', (err, data) => {
		if (err) throw err;
		console.log('Parsing ' + path  + ' ...');

		let content = replace(data);

		fs.writeFile(path, content, (err) => {
			if (err) throw err;
			console.log('Saving ' + path + ' ...');
			console.log('Done.');
		});
	});
}

function replace(string, pattern=default_pattern) {
	return string.replace(pattern, '$1 $3');
}

if (process.argv.length <= 2) {
	console.error('No file specified');
	process.exit(1);
};

process.argv.forEach((val, index) => {
	// Ignore path/executable
	if (index > 1) {
		load(val);
	}
});

