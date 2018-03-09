(function(window) {
    "use strict";
    window.customArrayFunctions = {
        take: function(arr, n) {
            if (arguments.length == 0) {
                return false;
            }
            if (!isArray(arr)) { return false; }
            return arr.slice(0, n);
        },
        skip: function(arr, n) {
            if (!isArray(arr)) { return false; }
            return arr.slice(n, arr.length);
        },
        map: function(arr, callback) {
            if (!isArray(arr)) { return false; }
            var length = arr.length,
                newarr = [];
            for (var i = 0; i < length; i = i + 1) {
                newarr.push(callback(i, arr[i]));
            }
            return newarr;
        },
        reduce: function(arr, callback, val) {
            if (!isArray(arr)) { return false; }
            var i, length = arr.length,
                newarr = [];
            for (i = 0; i < length; i++) {
                if (typeof arr[i] != 'number') {
                    return false;
                }
            }
            for (i = 0; i < length; i = i + 1) {
                newarr.push(callback(i, arr[i]) - val);
            }
            return newarr;
        },
        filter: function(arr, callback) {
            if (!isArray(arr)) { return false; }
            var length = arr.length,
                newarr = [];
            for (var i = 0; i < length; i = i + 1) {
                if (callback(i, arr[i]))
                    newarr.push(arr[i]);
            }
            return newarr;
        },
        foreach: function(arr, callback) {
            if (!isArray(arr)) { return false; }
            var length = arr.length;
            for (var i = 0; i < length; i = i + 1) {
                callback(i, arr[i]);
            }
        }
    };
    var isArray = function(arr) {
        return Array.isArray(arr);
    };
})(window);