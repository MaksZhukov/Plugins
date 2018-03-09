"use strict";
var customArrayFunctions = (function() {
    function isArray(arr) {
        return Array.isArray(arr);
    }

    function take(arr, n) {
        if (arguments.length == 0) {
            return false;
        }
        if (!isArray(arr)) { return false; }
        return arr.slice(0, n);
    }

    function skip(arr, n) {
        if (!isArray(arr)) { return false; }
        return arr.slice(n, arr.length);
    }

    function map(arr, callback) {
        if (!isArray(arr)) { return false; }
        var length = arr.length,
            newarr = [];
        for (var i = 0; i < length; i = i + 1) {
            newarr.push(callback(i, arr[i]));
        }
        return newarr;
    }

    function reduce(arr, callback, val) {
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
    }

    function filter(arr, callback) {
        if (!isArray(arr)) { return false; }
        var length = arr.length,
            newarr = [];
        for (var i = 0; i < length; i = i + 1) {
            if (callback(i, arr[i])) {
                newarr.push(arr[i]);
            }
        }
        return newarr;
    }

    function foreach(arr, callback) {
        if (!isArray(arr)) { return false; }
        var length = arr.length;
        for (var i = 0; i < length; i = i + 1) {
            callback(i, arr[i]);
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