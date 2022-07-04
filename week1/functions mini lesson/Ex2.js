const story =
  'In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.';
const wordCounts = {};
countRepeatedWords(story);

function cleanText(story) {
  if (!story) return;
  story = story.replace(/[,.'"?!;]/g, '').toLowerCase();
  return story.split(' ');
}

function addToCounter(word) {
  let arr = Object.keys(wordCounts);
  if (arr.length == 0) {
    wordCounts[word] = 1;
  } else {
    const obj = arr.find((item) => item == word);
    if (obj) {
      wordCounts[`${word}`] = wordCounts[`${word}`] + 1;
    } else {
      wordCounts[word] = 1;
    }
  }
}

function countRepeatedWords(story) {
  story = cleanText(story);
  for (const word of story) {
    addToCounter(word);
  }
  console.log(wordCounts);
}
