
module.exports = function (input) {
  input = input.replace("?", "")
  input = input.split("&")
  var actual = {}
  for (var i = 0; i < input.length; i++) {
    var newArray = input[i].split('=');
    actual[newArray[0]] = newArray[1];

  }

  return actual

}
