(function () {

var wpi = require('wiring-pi');

wpi.wiringPiSetupGpio();
wpi.pwmSetMode(wpi.PWM_MODE_MS);
wpi.pwmSetClock(400);
wpi.pwmSetRange(1024);

// constructor
var ServoController = function(pin) {
	this.pin = pin;
	console.log('ServoController:', pin);
};

ServoController.prototype.setAngle = function(angle) {
	console.log('setAngle:', angle);
	if (angle < 0) {
		angle = 0;
	} else if (angle > 180) {
		angle = 180;
	}
	// 24 ~ 115
	var value = Math.floor(angle / 2 + 24);
	console.log('wpi.pwmWrite(pin=' + this.pin + ', value=' + value + ')');
	wpi.pwmWrite(this.pin, value);
}

exports.ServoController = ServoController;

})();
