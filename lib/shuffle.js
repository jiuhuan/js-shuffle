module.exports = function shuffle( arr, num ) {
  var arr = arr || [];
  var num = num || arr.length;
  var ret = [];

  while ( num > 0 ) {
    // Get index
    var index = Math.floor(Math.random() * arr.length);
    // Random one
    var item = arr[ index ];

    // Determine whether to repeat
    // Only list does not exist can join in
    if( ret.indexOf(item) === -1 ){
      num -= 1;
      ret.push(item);
    }
  }

  return ret;
};
