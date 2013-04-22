// Generated by CoffeeScript 1.6.2a
var parallelSearch, __iced_k, __iced_k_noop;

__iced_k = __iced_k_noop = function() {};

parallelSearch = function(keywords, cb) {
  var i, k, out, ___iced_passed_deferral, __iced_deferrals, __iced_k,
    _this = this;
  __iced_k = __iced_k_noop;
  ___iced_passed_deferral = iced.findDeferral(arguments);
  out = [];
  (function(__iced_k) {
    var _i, _len;
    __iced_deferrals = new iced.Deferrals(__iced_k, {
      parent: ___iced_passed_deferral,
      filename: "documentation/coffee/iced_tw_2.coffee",
      funcname: "parallelSearch"
    });
    for (i = _i = 0, _len = keywords.length; _i < _len; i = ++_i) {
      k = keywords[i];
      search(k, __iced_deferrals.defer({
        assign_fn: (function(__slot_1, __slot_2) {
          return function() {
            return __slot_1[__slot_2] = arguments[0];
          };
        })(out, i),
        lineno: 6
      }));
    }
    __iced_deferrals._fulfill();
  })(function() {
    return cb(out);
  });
};
