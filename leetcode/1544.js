// 1544. Make The String Great

var makeGood = function (s) {
  function checkString(str, changed = true) {
    if (!changed) {
      return str;
    } else {
      let curChanged = false;
      let curString = "";
      //
      for (let i = 0; i < str.length; i++) {
        if (
          str[i] !== str[i + 1] &&
          str[i].toLowerCase() === str[i + 1]?.toLowerCase()
        ) {
          curChanged = true;
          i++;
        } else {
          curString += str[i];
        }
      }

      return checkString(curString, curChanged);
    }
  }

  return checkString(s);
};

console.log(makeGood("abBAcC"));
console.log(makeGood("leEeetcode"));
