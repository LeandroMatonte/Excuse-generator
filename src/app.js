var who = ["The dog", "My grandma", "His turtle", "My bird"];
var action = ["ate", "peed", "crushed", "broke"];
var what = ["my homework", "the keys", "the car"];
var when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function concatenar(who, action, what, when) {
  var randomWho = who[Math.floor(Math.random() * 4)];
  var randomAction = action[Math.floor(Math.random() * 4)];
  var randomWhat = what[Math.floor(Math.random() * 4)];
  var randomWhen = when[Math.floor(Math.random() * 4)];

  return (document.querySelector("#excuse").innerHTML =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen);
}

window.onload = () => {
  concatenar(who, action, what, when);
};
