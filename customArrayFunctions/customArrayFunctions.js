"use strict";
var customArrayFunctions = (function() {
    function isArrayNumber(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] != "number") {
                return false;
            }
        }
        return true;
    }

    function take(arr, n) {
        if (arguments.length === 2 && Array.isArray(arr)) {
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
        if (Array.isArray(arr) && isArrayNumber(arr)) {
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
        if (Array.isArray(arr) && arguments.length === 2) {
            var length = arr.length;
            for (var i = 0; i < length; i = i + 1) {
                arr[i] = callback(i, arr[i]) ? callback(i, arr[i]) : arr[i];
            }
        }
    }

    function chain(arr) {
        return {
            take: function(n) {
                arr = arr.slice(0, n);
                return this;
            },
            skip: function(n) {
                arr = arr.slice(n, arr.length);
                return this;
            },
            map: function(callback) {
                var length = arr.length,
                    newarr = [];
                for (var i = 0; i < length; i = i + 1) {
                    newarr.push(callback(i, arr[i]));
                }
                arr = newarr;
                return this;

            },
            reduce: function(callback, val) {
                var length = arr.length,
                    newarr = [];
                for (var i = 0; i < length; i = i + 1) {
                    newarr.push(callback(i, arr[i]) - val);
                }
                arr = newarr;
                return this;

            },
            filter: function(callback) {
                var length = arr.length,
                    newarr = [];
                for (var i = 0; i < length; i = i + 1) {
                    if (callback(i, arr[i])) {
                        newarr.push(arr[i]);
                    }
                }
                arr = newarr;
                return this;
            },
            value: function() {
                return arr;
            }
        };
    }
    return {
        take: take,
        skip: skip,
        map: map,
        reduce: reduce,
        filter: filter,
        foreach: foreach,
        chain: chain
    };
})();