/** 
* @namespace Utility 
*/
/**
* Propositional logic connectives
* @namespace Logic 
*/
module.exports.pipe = require("./src/pipe");
module.exports.spread = require("./src/spread");
module.exports.attempt = require("./src/attempt");
module.exports.repeat = require("./src/repeat");
module.exports.delay = require("./src/delay");

module.exports.and = require("./src/logic/and");
module.exports.or = require("./src/logic/or");
module.exports.xor = require("./src/logic/xor");
module.exports.nor = require("./src/logic/nor");
module.exports.not = require("./src/logic/not");