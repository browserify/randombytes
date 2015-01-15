var test = require("tape");
var randomBytes = require('./');

test('sync', function (t) {
    t.plan(3);
    t.equals(randomBytes(3).length, 3, 'len: ' + 3);
    t.equals(randomBytes(30).length, 30, 'len: ' + 30);
    t.equals(randomBytes(300).length, 300, 'len: ' + 300);
});
test('async', function (t) {
    t.plan(3);
    randomBytes(3, function (err, resp) {
      t.equals(resp.length, 3, 'len: ' + 3);
    });
    randomBytes(30, function (err, resp) {
      t.equals(resp.length, 30, 'len: ' + 30);
    });
    randomBytes(300, function (err, resp) {
      t.equals(resp.length, 300, 'len: ' + 300);
    });
});