var test = require("tape");
var randomBytes = require('./');

test('correct length', function (t) {
    t.plan(3);
    t.equals(randomBytes(3).length, 3, 3);
    t.equals(randomBytes(30).length, 30, 30);
    t.equals(randomBytes(300).length, 300, 300);
});