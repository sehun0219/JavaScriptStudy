function firstOccurrence(haystack, needle) {
  if (needle === "") {
    return 0;
  }

  const needleLength = needle.length;
  const haystackLength = haystack.length;

  for (let i = 0; i <= haystackLength - needleLength; i++) {
    if (haystack.slice(i, i + needleLength) === needle) {
      return i;
    }
  }

  return -1;
}

"sadbutsad".indexOf("sad"); // 결과: 0

// 예제 사용법
console.log(firstOccurrence("sadbutsad", "sad")); // 결과: 0
