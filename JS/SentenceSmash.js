smash(["this", "is", "a", "really", "long", "sentence"]);

function smashJS(words) {
  return words.join(" ");
}

function smash(words) {
  let sentence = "";

  for (let i = 0; i < words.length; i++) {
    sentence += words[i];

    if (i != words.length - 1) sentence += " ";
  }

  console.log(sentence);
}
