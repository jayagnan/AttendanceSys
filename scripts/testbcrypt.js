var passhash = require('password-hash');

var password = "JaysPass#123";
//var salt = bcrypt.
var options = {};
options.algorithm = 'sha512';
options.saltLength = 10;
options.iterations = 1;
var hashedpass = "sha512$6d7c48fa76$1$c65ad0a3aa7fd111eb97e327fe8313d07b2b337951f72d652f0d2aa962af9510677cb62a057447dbc638c8242341d2cd8c3184ee3d13f33e9fa0c41de735ba03";
//var hashedpass = passhash.generate(password,options);
console.log(hashedpass);
var bool = passhash.verify(password,hashedpass);
console.log("Verify ==> "+bool);