$(document).ready(function () {
  $("#btn").click(function () {
    $("#excuse").text(excuse());
  });
});

const who = [
  "A helicopter",
  "Some birds",
  "My grandparent",
  "Elon Musk",
  "My dog",
];

const action = ["crashed", "fell over", "forgot", "destroyed", "ate"];

const what = [
  "my roof",
  "my homework",
  "my pencil",
  "my girlfriend",
  "my best friend",
];

const when = [
  "this morning.",
  "yesterday night.",
  "some minutes ago.",
  "a minute ago.",
  "today.",
];

function random(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

function excuse() {
  const text =
    who[random(who.length)] +
    " " +
    action[random(action.length)] +
    " " +
    what[random(what.length)] +
    " " +
    when[random(when.length)];

  return text;
}
