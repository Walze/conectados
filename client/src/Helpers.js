export function makeid(sz) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,.?!";

  for (var i = 0; i < sz; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}