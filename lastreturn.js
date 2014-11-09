var lastreturn = function(fn, l, ctx) {
  return function() {
    var args = [].slice.call(arguments);
    args.push(l);
    return l = fn.apply(ctx, args);
  };
};

module.exports = lastreturn;
