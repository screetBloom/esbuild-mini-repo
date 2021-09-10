(() => {
  var __require = typeof require !== "undefined" ? require : (x) => {
    throw new Error('Dynamic require of "' + x + '" is not supported');
  };

  // index.js
  var arr = [
    __require.resolve("vue")
  ];
  console.log(arr[0]);
})();
