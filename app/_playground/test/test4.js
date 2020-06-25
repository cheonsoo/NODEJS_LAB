String.prototype.format = function () {
	var formatted = this;
	for ( var i = 0; i < arguments.length; i++ ) {
			var regexp = new RegExp('\\{' + i + '\\}', 'gi');
			formatted = formatted.replace(regexp, arguments[i]);
	}
	return formatted;
};

console.log("test {0}, {1}, {3}, {2}".format("a", "b", "d", "c"));