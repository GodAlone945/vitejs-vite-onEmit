const Event = (function () {
  var clientList = {},
    listen,
    trigger,
    remove;
  listen = function (key, fn) {
    console.log(this);
    if (!clientList[key]) {
      clientList[key] = [];
    }
    clientList[key].push(fn);
  };

  trigger = function () {
    var key = Array.prototype.shift.call(arguments);
    var fns = clientList[key];

    if (!fns || fns.length === 0) {
      return false;
    }

    for (var i = 0, fn; (fn = fns[i++]); ) {
      fn.apply(this, arguments);
    }
  };

  remove = function (key, fn) {
    var fns = clientList[key];

    if (!fns) {
      // 如果 key 对应的消息没有被人订阅，则直接返回
      return false;
    }
    if (!fn) {
      // 如果没有传入具体的回调函数，表示需要取消 key 对应消息的所有订阅
      fns && (fns.length = 0);
    } else {
      for (var l = fns.length - 1; l >= 0; l--) {
        var _fn = fns[l];
        if (_fn === fn) {
          fns.splice(l, 1);
        }
      }
    }
  };

  return {
    listen: listen,
    trigger: trigger,
    remove: remove,
  };
})();

export default Event;
