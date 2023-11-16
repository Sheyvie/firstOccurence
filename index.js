//Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

const example1 = strStr("sadbutsad", "sad");
console.log(example1);

const example2 = strStr("leetcode", "leeto");
console.log(example2);
