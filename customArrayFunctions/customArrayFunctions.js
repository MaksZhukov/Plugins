(function(window, undefined) {
    "use strict";
    window.customArrayFunctions = {
        take: function(arr, n) {
            if (arguments.length == 0) {
                return false;
            }
            if (!Array.isArray(arr)) {
                return false;
            }
            return arr.slice(0, n);
        },
        skip: function(arr, n) {
            if (!Array.isArray(arr)) {
                return false;
            }
            return arr.slice(n, arr.length);
        },
        map: function(arr, callback) {
            if (!Array.isArray(arr)) {
                return false;
            }
            var i, length = arr.length,
                newarr = [];
            for (i = 0; i < length; i = i + 1) {
                newarr.push(callback(i, arr[i]));
            }
            return newarr;
        },
        reduce: function(arr, callback, val) {
            if (!Array.isArray(arr)) {
                return false;
            }
            for (var i = 0; i < arr.length; i++) {
                if (!Number.isInteger(arr[i])) {
                    return false;
                }
            }
            var i, length = arr.length,
                newarr = [];
            for (i = 0; i < length; i = i + 1) {
                newarr.push(callback(i, arr[i]) - val);
            }
            return newarr;
        },
        filter: function(arr, callback) {
            if (!Array.isArray(arr)) {
                return false;
            }
            var i, length = arr.length,
                newarr = [];
            for (i = 0; i < length; i = i + 1) {
                if (callback(i, arr[i]))
                    newarr.push(arr[i]);
            }
            return newarr;
        },
        foreach: function(arr, callback) {
            if (!Array.isArray(arr)) {
                return false;
            }
            var i, length = arr.length,
                newarr = [];
            for (i = 0; i < length; i = i + 1) {
                if (callback(i, arr[i]))
                    newarr.push(arr[i]);
            }
            return newarr;
        }
    };
})(window);