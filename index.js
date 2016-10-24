// Password Generator
// Author Jon Machtynger
// Date: 01 Oct 2016

var DFLT_LEN=10;			// Default password length

var nums      = "0123456789";
var alphaU    = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaL    = "abcdefghijklmnopqrstuvwxyz";
var specials  = "!@#$%^&*()|{}+=-~`";

var argv = require('minimist')(process.argv.slice(2));

var usage = function() {
	console.log('Usage: passgen [--help] [-l length] [-a] [-A] [-n] [-s] [-m]');
	console.log('--help : This message');
	console.log('-m     : Only return password (not minimal usage)');
	console.log('-l     : If not specified will be %d chars\n', DFLT_LEN);
	console.log('By default all characters are valid but...');
	console.log('-a     : Suppresses lower case alpha letters');
	console.log('-A     : Suppresses UPPER case alpha letters');
	console.log('-n     : Suppresses numeric digits');
	console.log('-s     : Suppresses special digits (e.g. $%*)\n');
	process.exit(1);
}

if (argv.help) {
	usage();
}

// Password routine assumes full complexity
// i.e. include numbers, upp/lower case alpha and special chars
// Options define which class are not included
function GenPass(opts) {
	var valid = "";

	if (!opts.l)		// Default password length
		argv.l = DFLT_LEN;
	if (!opts.s)		// don't suppress special chars
			valid += specials;
	if (!opts.a)		// don't suppress lower case alpha
		valid += alphaL;
	if (!opts.A)		// don't suppress upper case alpha
		valid += alphaU;
	if (!opts.n)		// don't suppress numeric
		valid += nums;

	vLen = valid.length;
	if (!vLen) {
		console.log("You must generate at least one class of output");
		usage();
	}

	// Scramble candidate chars - Not 'truly' random but good enough
	valid = valid.split('').sort(function(){ return 0.5-Math.random() }).join('');

	var a = valid.split(""), al = a.length, pass = "";

	for (c = 0; c<opts.l; c++) {
		p = Math.floor(Math.random()*al);
		pass = pass + a[p];
	}
	return pass;
}

if (!argv.m) {
	console.log("'passgen --help' provides more options");
	console.log("pass = %s", GenPass(argv));
} else {
	console.log(GenPass(argv));
}

