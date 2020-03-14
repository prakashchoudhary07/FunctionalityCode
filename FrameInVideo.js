// Test Runner to find frames in video with all possible values.

const testCases = {
  video1: {
    video: 'abcghjbcakjlbnmvbc',
    target: 'cba',
    output: [
      [0, 2],
      [6, 8]
    ]
  },
  video2: {
    video: '',
    target: '',
    output: []
  },
  video3: {
    video: '',
    target: 'fdsf',
    output: []
  },
  video4: {
    video: 'prsk',
    target: 'skpr',
    output: [[0, 3]]
  }
};
// [VIDEO][FRAME][OUTPUT]
/* const testCases = [
  [
    ['abcghjbcakjlbnmvbc'],
    ['cba'],
    [
      [0, 2],
      [6, 8]
    ]
  ],
  [[''], [''], []],
  [[], ['fdsa'], []],
  [['ansk'], ['ksna'], [[0, 3]]]
];
 */
/* testCases.forEach((video, index) => {
  if (
    getFramesOccurances(
      video[0].toString(),
      video[1].toString()
    ).toLocaleString() === video[2].toLocaleString()
  ) {
    console.log('Test Case ' + (index + 1) + ': Passed');
  } else {
    console.log(video[2]);
    console.log('Test Case ' + (index + 1) + ': Failed');
  }
}); */

Object.keys(testCases).forEach((key, index) => {
  let video = testCases[key];
  console.log('VIDEO: ' + video['video']);
  console.log('TARGET: ' + video['target']);
  // console.log('OUTPUT: ' + video['output']);
  if (
    getFramesOccurances(video['video'], video['target']).toLocaleString() ===
    video['output'].toLocaleString()
  ) {
    console.log('Test Case ' + (index + 1) + ': Passed\n');
  } else {
    console.log(video['output']);
    console.log('Test Case ' + (index + 1) + ': Failed\n');
  }
});

function getFramesOccurances(video, frame) {
  const targetFrameHash = getHash(frame);
  const targetFrameOccurences = getTargetOccurances(video, targetFrameHash);
  console.log(targetFrameOccurences);
  return targetFrameOccurences;
}

function getHash(frame) {
  //USING MAP
  /* 
  const map1 = new Map();
  for (let letter of frame) {
    map1.set(letter, letter.charCodeAt());
  }
  return map1; */

  //USING SET
  const set1 = new Set();
  for (let letter of frame) {
    set1.add(letter);
  }
  return set1;
}

function getTargetOccurances(video, targetFrameHash) {
  let listOfOccurrences = [];
  let patternStatus = false;
  if (!(video.length <= 0 && targetFrameHash.size <= 0)) {
    for (let i = 0; i < video.length - 1; i += targetFrameHash.size) {
      let j;
      for (j = i; j < i + targetFrameHash.size; j++) {
        if (targetFrameHash.has(video[j])) {
          patternStatus = true;
        } else {
          patternStatus = false;
          break;
        }
      }
      if (patternStatus) {
        listOfOccurrences.push([i, j - 1]);
      }
    }
  } else {
    return [];
  }
  return listOfOccurrences;
}
