#!/usr/bin/node

/**
 * a script that imports a dictionary of occurrences by user id
 * and computes a dictionary of user ids by occurrence
 */

const dict = require('./101-data').dict;
const newDict = {};
for (let key in dict) {
	if (!newDict[dict[key]]) {
		newDict[dict[key]] = [];
	}
	newDict[dict[key]].push(key);
}
console.log(newDict);
