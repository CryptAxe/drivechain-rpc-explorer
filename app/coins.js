var btc = require("./coins/btc.js");
var ltc = require("./coins/ltc.js");
var drivechain = require("./coins/drivechain.js");

module.exports = {
	"BTC": btc,
	"LTC": ltc,
	"DRV": drivechain,

	"coins":["BTC", "LTC", "DRV"]
};


