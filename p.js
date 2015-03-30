module.exports = {
  wrap: function (cb) {
    return new Promise(function (resolve, reject) {
      cb(function (err, result) {
        if (err) {
          reject(err);
        }
        else {
          resolve(result);
        }
      });
    });
  },

  call: function () {
    var fn   = arguments[0],
        args = Array.prototype.slice.call(arguments, 1);

    return new Promise(function (resolve, reject) {
      args.push(function (err, result) {
        if (err) {
          reject(err);
        }
        else {
          resolve(result);
        }
      });

      fn.apply(null, args);
    });
  },

  bind: function (fn, thisArg) {
    return pCall.bind(null, thisArg ? fn.bind(thisArg) : fn);
  }
};
