// Generated by CoffeeScript 1.6.2a
var f_list, food, msg, tweets, w_list, weather, __iced_deferrals, __iced_k, __iced_k_noop,
  _this = this;

__iced_k = __iced_k_noop = function() {};

w_list = ["sun", "rain", "snow", "sleet"];

f_list = ["tacos", "burritos", "pizza", "shrooms"];

(function(__iced_k) {
  __iced_deferrals = new iced.Deferrals(__iced_k, {
    filename: "documentation/coffee/iced_tw_6.coffee"
  });
  rankPopularity(w_list, __iced_deferrals.defer({
    assign_fn: (function() {
      return function() {
        return weather = arguments[0];
      };
    })(),
    lineno: 2
  }));
  __iced_deferrals._fulfill();
})(function() {
  (function(__iced_k) {
    if (weather.length) {
      (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          filename: "documentation/coffee/iced_tw_6.coffee"
        });
        rankPopularity(f_list, __iced_deferrals.defer({
          assign_fn: (function() {
            return function() {
              return food = arguments[0];
            };
          })(),
          lineno: 4
        }));
        __iced_deferrals._fulfill();
      })(__iced_k);
    } else {
      return __iced_k();
    }
  })(function() {
    (function(__iced_k) {
      if (weather.length && food.length) {
        (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            filename: "documentation/coffee/iced_tw_6.coffee"
          });
          search("" + weather[0] + "+" + food[0], __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return tweets = arguments[0];
              };
            })(),
            lineno: 6
          }));
          __iced_deferrals._fulfill();
        })(function() {
          var _ref;
          return __iced_k(msg = (_ref = tweets[0]) != null ? _ref.text : void 0);
        });
      } else {
        return __iced_k();
      }
    })(function() {
      return alert(typeof msg !== "undefined" && msg !== null ? msg : "<nothing found>");
    });
  });
});
