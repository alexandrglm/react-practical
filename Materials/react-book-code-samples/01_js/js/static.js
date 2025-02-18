class Logger {
	static prefix = "Logger>";

	static log (msg) {
		console.log (this.prefix + msg);
	}
}

Logger.log ("Hello"); // Logger> Hello
Logger.prefix // Logger>