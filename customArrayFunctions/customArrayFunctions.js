"use strict";
var customArrayFunctions = (function() {
    function isNumber(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0; i < arr.length; i++) {
                if (typeof arr[i] != 'number') {
                    return false;
                }
            }
            return true;
        }
    }

    function take(arr, n) {
        if (arguments.length !== 0 && Array.isArray(arr)) {
            return arr.slice(0, n);
        }
    }

    function skip(arr, n) {
        if (Array.isArray(arr)) {
            return arr.slice(n, arr.length);
        }
    }

    function map(arr, callback) {
        if (Array.isArray(arr)) {
            var length = arr.length,
                newarr = [];
            for (var i = 0; i < length; i = i + 1) {
                newarr.push(callback(i, arr[i]));
            }
            return newarr;
        }
    }

    function reduce(arr, callback, val) {
        if (isNumber(arr) && Array.isArray(arr)) {
            var length = arr.length,
                newarr = [];
            for (var i = 0; i < length; i = i + 1) {
                newarr.push(callback(i, arr[i]) - val);
            }
            return newarr;
        }
    }

    function filter(arr, callback) {
        if (Array.isArray(arr)) {
            var length = arr.length,
                newarr = [];
            for (var i = 0; i < length; i = i + 1) {
                if (callback(i, arr[i])) {
                    newarr.push(arr[i]);
                }
            }
            return newarr;
        }
    }

    function foreach(arr, callback) {
        if (Array.isArray(arr)) {
            var length = arr.length;
            for (var i = 0; i < length; i = i + 1) {
                callback(i, arr[i]);
            }
        }
    }
    return {
        take: take,
        skip: skip,
        map: map,
        reduce: reduce,
        filter: filter,
        foreach: foreach
    };
})();